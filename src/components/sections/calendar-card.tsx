"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Compact monthly calendar card that fits the left banner tile area
// Size target: h-[241px], rounded, gradient background similar to existing tiles
// Shows one month at a time, with prev/next to navigate months
// Tailwind only (no styled-jsx)

export const CalendarCard = () => {
  const today = new Date();
  const [viewDate, setViewDate] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));

  const { year, monthIndex, monthLabel, weeks } = useMemo(() => {
    const y = viewDate.getFullYear();
    const m = viewDate.getMonth();

    const monthLabel = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" }).format(viewDate);

    // First day of month and number of days
    const firstDay = new Date(y, m, 1);
    const startWeekday = firstDay.getDay(); // 0 Sun - 6 Sat
    const daysInMonth = new Date(y, m + 1, 0).getDate();

    // Create cells: leading blanks + days
    const cells: (number | null)[] = Array.from({ length: startWeekday }, () => null).concat(
      Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );

    // Pad to complete weeks (up to 6 weeks to keep height stable)
    while (cells.length % 7 !== 0) cells.push(null);
    while (cells.length < 42) cells.push(null);

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

    return { year: y, monthIndex: m, monthLabel, weeks };
  }, [viewDate]);

  const isToday = (d: number | null) => {
    if (!d) return false;
    return (
      d === today.getDate() &&
      monthIndex === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const goPrev = () => setViewDate(new Date(year, monthIndex - 1, 1));
  const goNext = () => setViewDate(new Date(year, monthIndex + 1, 1));

  const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="block bg-gradient-to-b from-[#ffdb5c] to-[#ff9d3e] rounded-lg p-3 h-[241px] text-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/15 hover:bg-black/25 transition-colors"
          aria-label="이전 달"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-center">
          <p className="text-xs bg-black/10 inline-block px-2 py-0.5 rounded-md">캘린더</p>
          <h3 className="text-xl font-black leading-none mt-1 drop-shadow-sm">{monthLabel}</h3>
        </div>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/15 hover:bg-black/25 transition-colors"
          aria-label="다음 달"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Weekday header */}
      <div className="mt-2 grid grid-cols-7 text-center text-[10px] font-medium text-white/90">
        {weekdayLabels.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
      </div>

      {/* Dates grid */}
      <div className="grid grid-cols-7 gap-[2px] text-[11px]">
        {weeks.flat().map((d, i) => {
          const isWeekend = i % 7 === 0 || i % 7 === 6;
          const active = isToday(d);
          return (
            <div
              key={i}
              className={[
                "aspect-square flex items-center justify-center rounded-md",
                d ? "bg-white/10" : "bg-white/5",
                isWeekend ? "text-white" : "text-white",
                active ? "ring-2 ring-white/80 font-bold bg-white/20" : "",
              ].join(" ")}
            >
              {d ?? ""}
            </div>
          );
        })}
      </div>

      {/* Today hint */}
      <div className="absolute bottom-3 left-3 right-3 text-[10px] text-white/90 flex items-center justify-between">
        <span>
          오늘: {new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium" }).format(today)}
        </span>
      </div>
    </div>
  );
};

export default CalendarCard;