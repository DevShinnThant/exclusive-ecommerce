import BestSellingProducts from "./components/BestSellingProducts";
import BrowseByCategory from "./components/BrowseByCategory";
import CustomerService from "./components/CustomerService";
import EnhancedYourMusicExperience from "./components/EnhancedYourMusicExperience";
import ExploreOurProducts from "./components/ExploreOurProducts";
import NewArrival from "./components/NewArrival";

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
