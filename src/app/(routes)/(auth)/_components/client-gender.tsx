export default function ClientGender({
  gender,
  setGender,
  formErrors,
  setFormErrors,
}: {
  gender: string;
  setGender: (gender: string) => void;
  formErrors: Record<string, string>;
  setFormErrors: (formErrors: Record<string, string>) => void;
}) {
  return (
    <div>
      <label className="text-slate-700 text-sm font-medium mb-2 block">
        Gender <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-6">
        {/* Male */}
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => {
                setGender(e.target.value);
                if (formErrors.gender) {
                  setFormErrors({ ...formErrors, gender: "" });
                }
              }}
              className="sr-only"
            />
            <div
              className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${gender === "male" 
                  ? "border-honey" 
                  : "border-slate-300 group-hover:border-honey"
                }
                ${formErrors.gender ? "border-red-500" : ""}
              `}
            >
              {gender === "male" && (
                <div className="w-2.5 h-2.5 rounded-full bg-honey animate-scale-in" />
              )}
            </div>
          </div>
          <span className="text-sm text-slate-700">Male</span>
        </label>

        {/* Female */}
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => {
                setGender(e.target.value);
                if (formErrors.gender) {
                  setFormErrors({ ...formErrors, gender: "" });
                }
              }}
              className="sr-only"
            />
            <div
              className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${gender === "female" 
                  ? "border-honey" 
                  : "border-slate-300 group-hover:border-honey"
                }
                ${formErrors.gender ? "border-red-500" : ""}
              `}
            >
              {gender === "female" && (
                <div className="w-2.5 h-2.5 rounded-full bg-honey animate-scale-in" />
              )}
            </div>
          </div>
          <span className="text-sm text-slate-700">Female</span>
        </label>
      </div>
      {formErrors.gender && (
        <p className="mt-1 text-sm text-red-500">{formErrors.gender}</p>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}