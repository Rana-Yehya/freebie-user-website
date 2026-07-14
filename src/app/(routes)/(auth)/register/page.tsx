import { Metadata } from "next";
import RegisterCard from "./register-card";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <RegisterCard />
    </section>
  );
}
