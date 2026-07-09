import { Metadata } from "next";
import LoginCard from "./login-card";
export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  return (
    <section className="bg-gray-50 px-4 py-36 md:px-8">
      <LoginCard />
    </section>
  );
}
