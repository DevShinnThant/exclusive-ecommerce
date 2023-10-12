import BestSellingProducts from "./layout/BestSellingProducts";
import BrowseByCategory from "./layout/BrowseByCategory";
import CustomerService from "./layout/CustomerService";
import EnhancedYourMusicExperience from "./layout/EnhancedYourMusicExperience";
import ExploreOurProducts from "./layout/ExploreOurProducts";
import NewArrival from "./layout/NewArrival";

export default function Home() {
  return (
    <div className="w-full pb-10 max-width">
      <div className="text-3xl my-10 m-auto w-fit tracking-wider font-semibold">
        FREE AND FAST DELIVERY
      </div>
      <NewArrival />
      <BestSellingProducts />
      <BrowseByCategory />
      <ExploreOurProducts />
      <EnhancedYourMusicExperience />
      <CustomerService />
    </div>
  );
}
