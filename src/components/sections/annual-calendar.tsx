import React from 'react';

const MONTH_NAMES = [
  '1월', '2월', '3월', '4월', '5월', '6월',
  '7월', '8월', '9월', '10월', '11월', '12월'
];

const WEEKDAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

function getMonthInfo(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  
  return {
    firstDayIndex: firstDay.getDay(),
    daysInMonth: lastDay.getDate()
  };
}

function MonthCard({ monthIndex }: { monthIndex: number }) {
  const { firstDayIndex, daysInMonth } = getMonthInfo(2025, monthIndex);
  
  const days = [];
  
  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(<div key={`empty-${i}`} className="h-8" />);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className="flex h-8 items-center justify-center text-sm hover:bg-gray-50 rounded"
      >
        {day}
      </div>
    );
  }
  
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="flex items-baseline justify-between px-4 py-3 border-b">
        <h3 className="text-lg font-medium text-gray-900">{MONTH_NAMES[monthIndex]}</h3>
        <span className="text-sm text-gray-500">2025</span>
      </div>
      <div className="px-4 pb-4">
        <div className="grid grid-cols-7 gap-0 mb-2 text-xs text-gray-500">
          {WEEKDAY_NAMES.map(day => (
            <div key={day} className="flex h-8 items-center justify-center tracking-wide">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0">
          {days}
        </div>
      </div>
    </div>
  );
}

export default function AnnualCalendar() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">2025 연간 캘린더</h2>
          <p className="text-gray-600">연간 주요 일정을 한 눈에 확인하세요.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MONTH_NAMES.map((_, index) => (
            <MonthCard key={index} monthIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}