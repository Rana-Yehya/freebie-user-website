import { Metadata } from "next";
import LoginCard from "./login-card";
export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <LoginCard />
    </section>
  );
}
