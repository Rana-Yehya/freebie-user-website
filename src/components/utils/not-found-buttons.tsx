"use client";
import CustomButton from "@/components/utils/custom-button";

export default function NotFoundButtons() {
  return (
    <div className="flex items-center gap-4 mt-6">
      <CustomButton
        type="button"
        title="Go back home"
        onClick={() => {}}
        className=" bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white px-7 py-2.5 active:scale-95 transition-all"
      />

      <CustomButton
        type="button"
        title="Contact support"
        onClick={() => {}}
        className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition"
      >
        {/* <svg
              className="group-hover:translate-x-0.5 mt-1 transition"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="#1F2937"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
      </CustomButton>
    </div>
  );
}
