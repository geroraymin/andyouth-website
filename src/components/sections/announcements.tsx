"use client";
import Image from "next/image";

type AnnouncementItem = {
  date: {
    month: string;
    day: string;
  };
  title: string;
  href: string;
};

const announcements: AnnouncementItem[] = [
  {
    date: { month: "2025.08", day: "06" },
    title: "2025년 하반기 위드놀로지 프로젝트 참여 청소년 ...",
    href: "#",
  },
  {
    date: { month: "2025.07", day: "22" },
    title: "2025년 앤터아지트 2분기 업무추진비 집행내역",
    href: "#",
  },
  {
    date: { month: "2025.07", day: "22" },
    title: "[공지] 프로그램 감면(다동이) 중단 안내",
    href: "#",
  },
];

const pressReleases: AnnouncementItem[] = [
  {
    date: { month: "2024.08", day: "22" },
    title: "북부교육지원청과 SAM&가 함께하는 「스탬프 얘…",
    href: "#",
  },
  {
    date: { month: "2024.02", day: "02" },
    title: "노원구청 소식지(2월호): 에듀클래스 모집 안내",
    href: "#",
  },
  {
    date: { month: "2023.12", day: "29" },
    title: "노원구청 소식지(1월호): 앤드센터 운영 안내",
    href: "#",
  },
];

const AnnouncementColumn = ({ title, items }: { title: string; items: AnnouncementItem[] }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-brand-dark-gray pb-3">
        <h3 className="text-[28px] font-medium text-brand-dark-gray">{title}</h3>
        <div className="flex items-center space-x-1.5">
          <button>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/icons/main_board_down_btn-2.jpg"
              alt=""
              width={18}
              height={18}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/icons/main_board_up_btn-3.jpg"
              alt=""
              width={18}
              height={18}
              className="object-contain"
            />
          </button>
          <a href="#">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/icons/main_board_more_btn-4.jpg"
              alt=""
              width={18}
              height={18}
              className="object-contain"
            />
          </a>
        </div>
      </div>
      <ul className="mt-3">
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-200">
            <a href={item.href} className="flex items-center py-3.5 hover:no-underline">
              <div className="flex-shrink-0 w-[70px] h-[70px] border border-gray-300 bg-white flex flex-col justify-center items-center mr-5">
                <span className="text-xs text-brand-medium-gray">{item.date.month}</span>
                <span className="text-2xl font-bold text-brand-dark-gray -mt-0.5 tracking-tighter">{item.date.day}</span>
              </div>
              <p className="text-base text-gray-700 truncate">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Announcements() {
    return (
        <section className="bg-brand-light-gray py-[70px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                    <AnnouncementColumn title="공지사항" items={announcements} />
                    <AnnouncementColumn title="언론보도" items={pressReleases} />
                </div>
            </div>
        </section>
    );
};