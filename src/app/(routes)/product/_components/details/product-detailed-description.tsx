import DOMPurify from "isomorphic-dompurify";
interface ProductDetailedDescriptionProps {
  title: string;
  className?: string;
}
export default function productDetailedDescription({
  title,
  className = "",
}: ProductDetailedDescriptionProps) {
  const cleanHTML = DOMPurify.sanitize(title);
  //   , {
  //   ALLOWED_TAGS: [
  //     "h1",
  //     "h2",
  //     "h3",
  //     "p",
  //     "div",
  //     "ul",
  //     "ol",
  //     "li",
  //     "strong",
  //     "em",
  //     "a",
  //     "img",
  //   ],
  //   ALLOWED_ATTR: ["href", "src", "alt", "class", "id"],
  // });

  return (
    <div
      data-animate="text"
      className="text-slate-600 leading-relaxed"
      style={{ opacity: 1 }}
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
  // return (
  //   <div className="space-y-3">
  //     <div
  //       data-motion="feature"
  //       className="flex items-center gap-3"
  //       style={{
  //         opacity: 1,
  //         transform: "translateY(0px)",
  //         filter: "blur(0px)",
  //       }}
  //     >
  //       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
  //       <span className="text-slate-700 dark:text-neutral-300 text-sm">
  //         24-Hour Battery Life
  //       </span>
  //     </div>
  //     <div
  //       data-motion="feature"
  //       className="flex items-center gap-3"
  //       style={{
  //         opacity: 1,
  //         transform: "translateY(0px)",
  //         filter: "blur(0px)",
  //       }}
  //     >
  //       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
  //       <span className="text-slate-700 dark:text-neutral-300 text-sm">
  //         Waterproof IPX7
  //       </span>
  //     </div>
  //     <div
  //       data-motion="feature"
  //       className="flex items-center gap-3"
  //       style={{
  //         opacity: 1,
  //         transform: "translateY(0px)",
  //         filter: "blur(0px)",
  //       }}
  //     >
  //       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
  //       <span className="text-slate-700 dark:text-neutral-300 text-sm">
  //         Multi-Room Pairing
  //       </span>
  //     </div>
  //   </div>
  // );
}
