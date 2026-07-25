"use client";
import { useState, useRef, useEffect } from "react";

interface ClientBirthDateProps {
  dateOfBirth: string;
  setDateOfBirth: (date: string) => void;
  formErrors: Record<string, string>;
  //   setFormErrors: (errors: Record<string, string>) => void;
}

export default function ClientBirthDate({
  dateOfBirth,
  setDateOfBirth,
  formErrors,
  //   setFormErrors,
}: ClientBirthDateProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    dateOfBirth ? new Date(dateOfBirth) : null,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateOfBirth(value);
    if (value) {
      setSelectedDate(new Date(value));
    } else {
      setSelectedDate(null);
    }
    // if (formErrors.dateOfBirth) {
    //   setFormErrors({ ...formErrors, dateOfBirth: "" });
    // }
    setShowPicker(false);
  };

  const handleDateSelect = (date: Date) => {
    // Don't allow future dates
    if (date > today) return;

    const formattedDate = date.toISOString().split("T")[0];
    setDateOfBirth(formattedDate);
    setSelectedDate(date);
    setShowPicker(false);
    // if (formErrors.dateOfBirth) {
    //   setFormErrors({ ...formErrors, dateOfBirth: "" });
    // }
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push(
        <button
          key={`prev-${day}`}
          type="button"
          className="w-8 h-8 text-slate-400 cursor-pointer hover:bg-slate-100 rounded-full transition-colors text-sm"
          onClick={() => {
            const prevMonth = new Date(year, month - 1, day);
            handleDateSelect(prevMonth);
          }}
        >
          {day}
        </button>,
      );
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const isFuture = date > today;

      days.push(
        <button
          key={`current-${i}`}
          type="button"
          className={`
            w-8 h-8 rounded-full transition-all duration-200 text-sm cursor-pointer
            ${isFuture ? "text-slate-300 cursor-not-allowed" : "hover:bg-honey/20"}
            ${isSelected ? "bg-honey text-white hover:bg-honey" : "text-slate-700"}
            ${isToday && !isSelected ? "border-2 border-honey/50" : ""}
            ${isFuture ? "opacity-50" : ""}
          `}
          onClick={() => !isFuture && handleDateSelect(date)}
          disabled={isFuture}
        >
          {i}
        </button>,
      );
    }

    // Next month days
    const totalDays = days.length;
    const remainingDays = 42 - totalDays; // 6 rows
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <button
          key={`next-${i}`}
          type="button"
          className="w-8 h-8 text-slate-400 cursor-pointer hover:bg-slate-100 rounded-full transition-colors text-sm"
          onClick={() => {
            const nextMonth = new Date(year, month + 1, i);
            handleDateSelect(nextMonth);
          }}
        >
          {i}
        </button>,
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const changeMonth = (delta: number) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1),
    );
  };

  return (
    <div>
      <label
        htmlFor="dateOfBirth"
        className="text-slate-700 text-sm font-medium mb-1.5 block"
      >
        Date of Birth <span className="text-red-500">*</span>
      </label>

      <div className="relative">
        {/* Input Field */}
        <div
          className={`
            w-full h-11 px-4 pr-10
            text-sm text-slate-900
            bg-white border rounded-xl
            transition-all duration-200
            hover:border-slate-400
            focus-within:outline-none focus-within:ring-2 focus-within:ring-honey/20 focus-within:border-honey
            ${isFocused ? "border-honey" : "border-slate-300"}
            ${formErrors.dateOfBirth ? "border-red-500 focus:ring-red-500/20" : ""}
            flex items-center cursor-pointer
          `}
          onClick={() => setShowPicker(!showPicker)}
        >
          <span className={selectedDate ? "text-slate-900" : "text-slate-400"}>
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Select date"}
          </span>
        </div>

        {/* Calendar Icon */}
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-honey transition-colors p-1 rounded-lg hover:bg-honey/10"
          aria-label="Select date"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {/* Hidden native input for form submission */}
        {/* <input
          ref={inputRef}
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={handleDateChange}
          className="sr-only"
          required
        /> */}

        {/* Custom Date Picker */}
        {showPicker && (
          <div
            ref={pickerRef}
            className="absolute z-50 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-[280px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-sm font-semibold text-slate-900">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </span>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className="w-8 h-8 flex items-center justify-center text-xs font-medium text-slate-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

            {/* Today Button */}
            {/* <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  const todayDate = new Date();
                  // Don't allow selecting today if it's after current date
                  if (todayDate <= today) {
                    handleDateSelect(todayDate);
                  }
                }}
                className={`
                  text-sm font-medium w-full py-1.5 rounded-lg transition-colors
                  ${
                    today <= new Date()
                      ? "text-honey hover:bg-honey/10"
                      : "text-slate-400 cursor-not-allowed"
                  }
                `}
                disabled={today > new Date()}
              >
                Today
              </button>
            </div> */}
          </div>
        )}
      </div>

      {formErrors.dateOfBirth && (
        <p id="dateOfBirth-error" className="mt-1 text-sm text-red-500">
          {formErrors.dateOfBirth}
        </p>
      )}
    </div>
  );
}
