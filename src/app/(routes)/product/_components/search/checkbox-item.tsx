import { Entry } from "./filter-content";

interface CheckoutBoxItemProps {
  item: Entry;
  checked: boolean;
  onChange: (value: string) => void;
}

// Custom checkbox item
export default function CheckboxItem({
  item,
  checked,
  onChange,
}: CheckoutBoxItemProps) {
  return (
    <li className="py-1.5">
      <label
        htmlFor={item.id}
        className="inline-flex items-center gap-3 group cursor-pointer"
      >
        <input
          type="checkbox"
          className="sr-only"
          id={item.id}
          name={item.id.startsWith("brand") ? "brand" : "category"}
          value={item.value}
          checked={checked}
          onChange={() => onChange(item.value)}
        />
        <span
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
            checked
              ? "bg-blue-600 border-blue-600"
              : "bg-white border-slate-300"
          } group-focus-within:ring-2 group-focus-within:ring-blue-500`}
          aria-hidden="true"
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 5l3 3 7-7" />
            </svg>
          )}
        </span>
        <span className="text-sm text-slate-700 capitalize">{item.label}</span>
      </label>
    </li>
  );
}
