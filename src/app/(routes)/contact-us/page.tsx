import { Metadata } from "next";
import ContactUsDetails from "./_components/contact-us-details";
export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <ContactUsDetails />
    </section>
  );
}
