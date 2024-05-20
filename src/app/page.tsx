import Brands from "@/components/home/Brands";
import FlashSale from "@/components/home/FlashSale";
import TrendingProducts from "@/components/home/TrendingProducts";
import Carousel from "@/components/shared/Carousel";
// import Carot from "@/components/shared/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
const HomePage = () => {
  return (
    <div>
      {/* <Carot></Carot> */}
      <Carousel></Carousel>
      <FlashSale></FlashSale>
      <Brands></Brands>
      <TrendingProducts></TrendingProducts>
    </div>
  );
};

export default HomePage;
