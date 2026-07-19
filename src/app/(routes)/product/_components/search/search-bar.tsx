import CustomInput from "@/components/ui/custom-input";

export default function SearchBar({
  onChange,
  className = "",
}: {
  onChange: (value: string) => void;
  className?: string;
}) {
  //action="/search"
  return (
    <div className="w-full relative">
      <CustomInput
        type="text"
        name="q"
        className={`w-full text-sm bg-white flex-1 min-w-0 border border-slate-200 ${className}`}
        // className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
        placeholder="search"
        onChange={onChange}
        id="search"
      />
      {/* <button type="submit">
          <img src="/search.svg" />
        </button> */}
    </div>
  );
}
