import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
export default function HeaderButtons({ scrolled }: { scrolled: boolean }) {
  const router = useRouter();

  return (
    <div className="flex flex-row">
      <CustomButton
        onClick={() => router.push("/login")}
        title="Log in"
        className={`bg-transparent text-background hidden lg:flex text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#fbb72c] after:-translate-x-1/2 hover:after:w-full after:left-1/2 after:transition-all px-3 py-2 text-sm font-medium transition hover:text-primary ${
          scrolled ? "text-[#fbb72c]" : "text-honey"
        }`}
      />
      <CustomButton
        onClick={() => router.push("/register")}
        title="Register"
        className="w-fit bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white"
      />
    </div>
  );
}
