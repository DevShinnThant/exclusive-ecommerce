import { generateProductQueryString } from "@/lib/utils";
import CategoryBar from "../components/CategoryBar";
import axios from "@/lib/api/axios";
import { ProductSelector } from "@/lib/store/server/product/selectors";
import ProductSection from "../components/ProductSection";
import SortBar from "../components/SortBar";

async function fetchProducts(props: {
  tag: "productName" | "category" | "sort";
  productName: string;
  category: {
    name: string;
  };
  sort?: {
    varaible: string;
    value: string;
  };
}) {
  let queryString: string;

  if (props.tag === "category" && props.category) {
    {
      queryString = generateProductQueryString({
        filters: {
          slug: {
            name: "category",
            value: props.category?.name,
          },
          deep: {
            columnName: "Name",
          },
        },
      });
    }
  } else if (props.tag === "sort" && props.sort) {
    {
      queryString = generateProductQueryString({
        filters: {
          slug: {
            name: "category",
            value: props.category?.name,
          },
          property: "$contains",
        },
      });
    }
  } else {
    {
      queryString = generateProductQueryString({
        filters: {
          slug: {
            name: "name",
            value: props.productName,
          },
          property: "$contains",
        },
      });
    }
  }

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/${queryString}`
  );
  const data = ProductSelector(response.data.data);

  return data;
}

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q, tag, name } = searchParams as { [key: string]: string };

  const products = await fetchProducts({
    tag: tag === "category" ? "category" : "productName",
    productName: q,
    category: {
      name,
    },
  });

  return (
    <main className="w-full min-h-[650px] bg-neutral-50 pt-10 pb-[220px]">
      <div className="w-5/6 m-auto flex gap-[80px]">
        <div className="w-[100px]">
          <CategoryBar />
        </div>
        <div className="flex-1">
          <ProductSection products={products} searchQuery={q || name} />
        </div>
        <div className="w-[114px]">
          <SortBar />
        </div>
      </div>
    </main>
  );
}
