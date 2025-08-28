import React from 'react';

const linkColumns = [
  {
    title: "앤드(&)콘텐츠",
    links: [
      { name: "실감콘텐츠(융합콘텐츠)", href: "#" },
      { name: "연결콘텐츠", href: "#" },
      { name: "문화콘텐츠", href: "#" },
    ],
  },
  {
    title: "앤드(&)프로그램",
    links: [
      { name: "상설 공간 안내", href: "#" },
      { name: "개인 프로그램", href: "#" },
      { name: "학교 및 기관 프로그램", href: "#" },
      { name: "특별 프로그램", href: "#" },
      { name: "개별 모집 프로그램", href: "#" },
    ],
  },
  {
    title: "앤드(&)커뮤니티",
    links: [
      { name: "공지사항", href: "#" },
      { name: "Q&A", href: "#" },
      { name: "갤러리", href: "#" },
      { name: "보도자료", href: "#" },
    ],
  },
  {
    title: "앤드(&)센터",
    links: [
      { name: "인사말", href: "#" },
      { name: "About 앤드(&)", href: "#" },
      { name: "조직도", href: "#" },
      { name: "운영·시설 안내", href: "#" },
      { name: "오시는길", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] text-[#424242]">
      <div className="max-w-[1200px] mx-auto py-16 px-5">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="grid flex-grow grid-cols-2 sm:grid-cols-4 gap-x-8 lg:gap-x-14">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h4 className="font-bold text-base text-[#333333]">{column.title}</h4>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-[#666666] hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <a href="#" className="bg-[#1976D2] text-white text-sm font-medium py-2 px-5 rounded-sm">
                개인정보처리방침
              </a>
              <a href="#" className="bg-[#e3e3e3] text-[#666666] text-sm font-medium py-2 px-5 rounded-sm">
                이용약관
              </a>
            </div>

            <div className="mt-8 text-[13px] text-[#666666] leading-relaxed space-y-1.5">
              <p>
                대표 : 김진상<span className="mx-2 text-[#dcdcdc]">|</span>주소 : 서울특별시 노원구 노원로16길 16
              </p>
              <p>
                TEL : 02.949.7766<span className="mx-2 text-[#dcdcdc]">|</span>FAX : 02.949.7744
              </p>
            </div>

            <p className="mt-6 text-xs text-[#888888]">
              Copyrights 2022 Nowon Career Center for Youth and Future. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;