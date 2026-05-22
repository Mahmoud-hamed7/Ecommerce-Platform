import FeaturesSection from "../components/FeaturesSection";
import HeroSlider from "../components/HeroSlider";
import PopularCategories from "../components/PopularCategories";
import  ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <PopularCategories></PopularCategories>
      <ProductCard HeadTitle="Shop Recent Products" ></ProductCard>
      <FeaturesSection></FeaturesSection>
    </>
  );
}
