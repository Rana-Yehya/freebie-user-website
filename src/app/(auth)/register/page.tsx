import { Metadata } from "next";
import RegisterCard from "./register-card";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <section
      id="_product_asymmetric_split_v6_005"
      className="py-20 sm:py-24 bg-white"
    >
      <RegisterCard />
    </section>
  );
}
