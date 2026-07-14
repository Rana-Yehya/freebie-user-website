import { Metadata } from "next";
import ProductFilter from "./search";
export const metadata: Metadata = {
  title: "Search",
};

// Main ProductFilter component
export default function Search() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <ProductFilter />
    </section>
  );
}
