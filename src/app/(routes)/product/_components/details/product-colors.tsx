export default function ProductColors({
  colors,
  setSelectedVariant,
  isColorSelected,
}: {
  colors?: string[] | undefined;
  setSelectedVariant: (index: number) => void;
  isColorSelected: (index: number) => boolean;
}) {
  return (
    colors &&
    colors.length > 0 && (
      <div>
        <p className="text-sm font-medium text-slate-700 mb-3">
          Available Colors
        </p>
        <div className="flex items-center gap-3">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedVariant(index);
              }}
              type="button"
              className={`w-8 h-8 rounded-full ring-offset-2 transition-all hover:scale-110 
                          ${
                            isColorSelected(index) == true
                              ? "ring-2 ring-primary ring-offset-2"
                              : ""
                          }
                        `}
              // className={`w-8 h-8 rounded-full ring-offset-2 transition-all hover:scale-110 `}
              style={{ backgroundColor: `#${color}` }}
              aria-label={`Color ${index + 1}`}
            />
          ))}
          {colors.length > 6 && (
            <span className="text-xs text-slate-400">+{colors.length - 6}</span>
          )}
        </div>
      </div>
    )
  );
}
