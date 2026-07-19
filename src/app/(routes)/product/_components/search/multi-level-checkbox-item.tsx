"use client";
import { useState } from "react";
import { CategoryItem } from "../../../../../types/category";

interface TreeItemProps {
  node: CategoryItem;
  checked: string[];
  expanded: string[];
  onCheck: (value: string) => void;
  onExpand: (value: string) => void;
  level?: number;
  parentChecked?: boolean;
  parentPartial?: boolean;
}

// Individual Tree Item Component
function TreeItem({
  node,
  checked,
  expanded,
  onCheck,
  onExpand,
  level = 0,
  parentChecked = false,
  parentPartial = false,
}: TreeItemProps) {
  const hasChildren = node.subcategories && node.subcategories.length > 0;
  const isExpanded = expanded.includes(node.id ?? "");
  const isChecked = checked.includes(node.id ?? "");

  // Check if all children are checked
  const allChildrenChecked =
    hasChildren &&
    node.subcategories?.every((child) => checked.includes(child.id ?? ""));
  const someChildrenChecked =
    hasChildren &&
    node.subcategories?.some((child) => checked.includes(child.id ?? ""));

  // Determine checkbox state
  const isPartiallyChecked =
    (someChildrenChecked && !allChildrenChecked) || parentPartial;
  const isFullyChecked = isChecked || allChildrenChecked || parentChecked;

  const showCheckmark = isFullyChecked && !isPartiallyChecked;
  const showMinus = isPartiallyChecked && !isFullyChecked;

  const handleToggle = () => {
    if (hasChildren) {
      onExpand(node.id ?? "");
    }
  };

  const handleCheck = () => {
    onCheck(node.id ?? "");
  };

  // Indentation based on level
  const getIndent = () => {
    if (level === 0) return "pl-2";
    if (level === 1) return "pl-8";
    return "pl-12";
  };

  return (
    <div className="select-none">
      <div
        className={`
          flex items-center gap-2 py-1.5 px-2 rounded-md 
          hover:bg-slate-50 transition-colors duration-150
          ${getIndent()}
        `}
      >
        {/* Checkbox */}
        <div
          className="relative flex items-center cursor-pointer shrink-0"
          onClick={handleCheck}
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={isFullyChecked}
            onChange={handleCheck}
            ref={(el) => {
              if (el) {
                el.indeterminate = isPartiallyChecked && !isFullyChecked;
              }
            }}
          />
          <div
            className={`
              w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150
              ${
                isFullyChecked
                  ? "bg-honey border-honey"
                  : isPartiallyChecked
                    ? "bg-honey/40 border-honey"
                    : "bg-white border-slate-300 hover:border-honey"
              }
            `}
          >
            {(showCheckmark || (!hasChildren && isFullyChecked)) && (
              <img
                src="/checkmark.svg"
                className="w-3 h-3"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(101%) contrast(101%)",
                }}
              />
            )}
            {showMinus && hasChildren && (
              <img
                src="/minus.svg"
                className="w-3 h-3"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(101%) contrast(101%)",
                }}
              />
            )}
          </div>
        </div>

        {/* Label */}
        <span
          className={`
            text-sm cursor-pointer select-none flex-1
            ${isFullyChecked ? "text-slate-800 font-medium" : "text-slate-600"}
            hover:text-slate-900 transition-colors
          `}
          onClick={handleCheck}
        >
          {node.name?.defaultName}
        </span>

        {/* Arrow for parent with children */}
        {hasChildren && (
          <button
            type="button"
            onClick={handleToggle}
            className="p-1 rounded hover:bg-slate-200 transition-colors shrink-0"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <svg
                className="w-4 h-4 text-slate-400 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
        )}

        {/* Item count badge */}
        {hasChildren && (
          <span className="text-xs text-slate-400 shrink-0 bg-slate-100 px-2 py-0.5 rounded-full">
            {node.subcategories?.length}
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="ml-2">
          {(node.subcategories ?? []).map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              checked={checked}
              expanded={expanded}
              onCheck={onCheck}
              onExpand={onExpand}
              level={level + 1}
              parentChecked={isFullyChecked}
              parentPartial={isPartiallyChecked}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Main MultiSelect Component
interface MultiSelectTreeProps {
  nodes: CategoryItem[];
  checked?: string[];
  expanded?: string[];
  onCheck?: (checked: string[]) => void;
  onExpand?: (expanded: string[]) => void;
  onHeightChange?: () => void;
}

export default function MultiSelectTree({
  nodes,
  checked: initialChecked = [],
  expanded: initialExpanded = [],
  onCheck,
  onExpand,
}: MultiSelectTreeProps) {
  const [checked, setChecked] = useState<string[]>(initialChecked);
  const [expanded, setExpanded] = useState<string[]>(initialExpanded);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheck = (value: string) => {
    const newChecked = checked.includes(value)
      ? checked.filter((v) => v !== value)
      : [...checked, value];
    setChecked(newChecked);
    onCheck?.(newChecked);
  };

  const handleExpand = (value: string) => {
    const newExpanded = expanded.includes(value)
      ? expanded.filter((v) => v !== value)
      : [...expanded, value];
    setExpanded(newExpanded);
    onExpand?.(newExpanded);
  };

  // Filter nodes based on search
  const filterNodes = (items: CategoryItem[], term: string): CategoryItem[] => {
    if (!term) return items;
    return items
      .map((item) => {
        const children = item.subcategories
          ? filterNodes(item.subcategories, term)
          : [];
        if (
          item.name?.defaultName?.toLowerCase().includes(term.toLowerCase()) ||
          children.length > 0
        ) {
          return {
            ...item,
            children: children.length > 0 ? children : item.subcategories,
          };
        }
        return null;
      })
      .filter(Boolean) as CategoryItem[];
  };

  const filteredNodes = searchTerm ? filterNodes(nodes, searchTerm) : nodes;

  return (
    <div className="w-full">
      {/* Tree */}
      <div className="border border-slate-200 rounded-lg p-2 overflow-y-auto bg-white">
        {filteredNodes.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-sm">
            No items found
          </div>
        ) : (
          <div className="space-y-0.5">
            {filteredNodes.map((node) => (
              <TreeItem
                key={node.id}
                node={node}
                checked={checked}
                expanded={expanded}
                onCheck={handleCheck}
                onExpand={handleExpand}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
