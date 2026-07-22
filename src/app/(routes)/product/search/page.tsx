import { Metadata } from "next";
import ProductFilter from "../_components/search/search";
export const metadata: Metadata = {
  title: "Search",
};

// Main ProductFilter component
export default async function Search() {
  //   {
  //   params,
  // }: {
  //   params: Promise<{
  //     tag?: string;
  //     categoryId?: string;
  //     subcategoryId?: string;
  //     occasionId?: string;
  //   }>;
  // }
  // const router = useRouter();
  // const {
  //   tag,
  //   categoryId,
  //   subcategoryId,
  //   occasionId,
  // }: {
  //   tag?: string | undefined;
  //   categoryId?: string | undefined;
  //   subcategoryId?: string | undefined;
  //   occasionId?: string | undefined;
  // } = router.query;
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <ProductFilter
      // categoryId={categoryId}
      // subcategoryId={subcategoryId}
      // occasionId={occasionId}
      // tag={tag}
      />
    </section>
  );
}
// "use client";

// import { useState } from "react";
// import MultiSelectTree from "../_components/search/multi-level-checkbox-item";

// const fileSystem = [
//   {
//     value: "/app",
//     label: "app",
//     children: [
//       {
//         value: "/app/Http",
//         label: "Http",
//         children: [
//           { value: "/app/Http/Controllers", label: "Controllers" },
//           { value: "/app/Http/routes.js", label: "routes.js" },
//         ],
//       },
//       { value: "/app/Providers", label: "Providers" },
//     ],
//   },
//   {
//     value: "/config",
//     label: "config",
//     children: [
//       { value: "/config/app.js", label: "app.js" },
//       { value: "/config/database.js", label: "database.js" },
//     ],
//   },
//   {
//     value: "/public",
//     label: "public",
//     children: [
//       { value: "/public/index.html", label: "index.html" },
//       { value: "/public/assets", label: "assets" },
//     ],
//   },
//   { value: "/.env", label: ".env" },
//   { value: "/.gitignore", label: ".gitignore" },
//   { value: "/README.md", label: "README.md" },
// ];

// export default function Page() {
//   const [checked, setChecked] = useState<string[]>([]);
//   const [expanded, setExpanded] = useState<string[]>(["/app"]);

//   return (
//     <div className="p-8">
//       <MultiSelectTree
//         nodes={fileSystem}
//         checked={checked}
//         expanded={expanded}
//         onCheck={setChecked}
//         onExpand={setExpanded}
//         title="Select Files"
//         searchable={true}
//       />
//     </div>
//   );
// }
