import Image from "next/image";
import Banner from "../../components/Banner";
import SaleCount from "../../components/SaleCount";
import FeaturedProducts from "../../components/FeaturedProducts";
import Faq from "../../components/Faq";


export default function Home() {
  return (
    <main>
      <Banner />
      <SaleCount />
      <FeaturedProducts />
      <Faq />
    </main>
  );
}
