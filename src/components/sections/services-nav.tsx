import Image from "next/image";

interface ServiceItem {
  href: string;
  imgSrc: string | null;
  label: string;
}

const serviceItems: ServiceItem[] = [
  {
    href: "https://www.andyouth.or.kr/kr/center/intro.php",
    imgSrc: null, 
    label: "운영시설 안내",
  },
  {
    href: "http://www.andyouth.or.kr/kr/community/notice.php?returnURL=%2Fkr%2Fcommunity%2Fnotice.php&bgu=view&idx=1428",
    imgSrc: null,
    label: "접수 및 환불 안내",
  },
  {
    href: "https://www.andyouth.or.kr/kr/community/qna.php",
    imgSrc: null,
    label: "Q & A",
  },
  {
    href: "https://www.andyouth.or.kr/kr/community/faq.php",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/images/17561016921-13.png",
    label: "갤러리",
  },
  {
    href: "https://www.andyouth.or.kr/kr/center/location.php",
    imgSrc: null,
    label: "오시는길",
  },
];

const ServicesNav = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1200px] py-5">
        <div className="flex h-[203px] items-stretch gap-5">
          {/* Left Side: "유스내비" branding */}
          <div className="flex w-[310px] flex-shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
             <a href="http://www.youthnavi.net" className="flex flex-col items-center justify-center text-center">
              <p className="text-[11px] font-medium text-[#9E9E9E]">서울시 청소년미래진로이노베이션</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#424242]">유스내비</h2>
            </a>
          </div>

          {/* Right Side: Service Icons */}
          <div className="flex-1 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            <ul className="flex h-full items-center justify-around px-6">
              {serviceItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="group flex flex-col items-center gap-4">
                    <div className="relative h-[85px] w-[85px]">
                      {item.imgSrc ? (
                        <Image
                          src={item.imgSrc}
                          alt={item.label}
                          width={85}
                          height={85}
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-[85px] w-[85px] rounded-lg bg-gray-100 transition-transform duration-300 group-hover:scale-105" />
                      )}
                    </div>
                    <p className="whitespace-nowrap text-base font-medium text-[#424242]">{item.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNav;