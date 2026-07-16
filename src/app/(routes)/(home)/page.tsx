import HomeMainImage from "./_components/home-main-image";
import HomeReasonsToBuy from "./_components/home-reasons-to-buy";

import FAQMenuHome from "./_components/faq/faq-menu-home";
import ProductDisplay from "./_components/products/product-display";
import { Suspense } from "react";
import ScrollableContainer from "./_components/home-product-scroll";
import HomeProducts from "./_components/products/home-products";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HomeMainImage />

      {/* Reasons to Buy */}
      <HomeReasonsToBuy />

      {/* Products Carousel Section */}
      <HomeProducts />

      {/* Hide scrollbar globally */}
      <FAQMenuHome />
    </>
  );
}
