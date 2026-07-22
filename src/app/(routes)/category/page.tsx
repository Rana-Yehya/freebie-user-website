import { Metadata } from "next";
import CategoryDisplay from "./_components/category-display";

export const metadata: Metadata = {
  title: "Catogeries",
};

export default function Category() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <CategoryDisplay />
    </section>
  );
}
