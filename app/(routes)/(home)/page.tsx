import BrowseByCategory from "./layout/BrowseByCategory";
import NewArrival from "./layout/NewArrival";

export default function Home() {
  return (
    <div className="w-full pb-10 max-width">
      <div className="text-3xl my-10 m-auto w-fit tracking-wider font-semibold">
        FREE AND FAST DELIVERY
      </div>
      <NewArrival />
      <BrowseByCategory />
    </div>
  );
}
