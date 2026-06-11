"use-client";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const handleCheckout = () => {
    // Perform checkout logic here
    // router.push('/success');
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Checkout...</h1>
    </div>
  );
}
