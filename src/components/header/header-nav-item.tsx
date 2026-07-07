import Link from "next/link";

interface HeaderNavItemProps {
  title: string;
  href: string;
  scrolled: boolean;
}
export default function HeaderNavItem({
  title,
  href,
  scrolled,
}: HeaderNavItemProps) {
  // ({children }: {

  //   children:  Promise<{
  //       title: string,
  //     href: string,
  //     scrolled: boolean
  //  }>
  // })

  return (
    <Link
      className={`items-center justify-center whitespace-nowrap text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:-translate-x-1/2 hover:after:w-full after:left-1/2 after:w-0 after:h-0.5 after:bg-[#fbb72c] hover:after:w-full after:transition-all px-3 py-2 hidden lg:flex px-3 py-2 text-sm font-medium transition hover:text-primary ${
        scrolled ? "text-[#fbb72c]" : "text-white"
      }`}
      href={href}
    >
      {title}
    </Link>
  );
}
