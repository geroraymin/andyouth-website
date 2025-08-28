import Image from "next/image";

const HeroBanners = () => {
  return (
    <section className="container mx-auto py-5">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        {/* Left Banners */}
        <div className="w-full lg:w-[310px] flex-shrink-0">
          <ul className="flex flex-col gap-[18px]">
            <li>
              <a href="#" className="block bg-gradient-to-b from-[#ffdb5c] to-[#ff9d3e] rounded-lg p-6 h-[241px] text-center text-white relative overflow-hidden">
                <div className="bg-black/10 inline-block px-3 py-0.5 rounded-md">
                  <p className="text-xs font-medium text-white">앤드넷</p>
                </div>
                <h2 className="text-[40px] font-black leading-none mt-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  앤드넷
                </h2>
                <p className="text-lg font-medium mt-1">온라인 학습 사이트</p>
                <hr className="border-t border-white/30 my-3" />
                <p className="text-[11px] font-light">
                  AR·VR·코딩·빅데이터·IoT(사물인터넷)·코봇
                </p>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full px-6">
                  <button className="bg-[#424242] text-white text-sm font-bold py-2.5 w-full rounded-md shadow-md hover:bg-gray-800 transition-colors">
                    앤드넷 바로가기
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block bg-gradient-to-b from-[#ffa94d] to-[#ff7e36] rounded-lg px-6 py-8 h-[241px] text-center text-white relative overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="font-bold text-xl">&센터</p>
                  <h2 className="text-5xl font-black my-1" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    온라인 접수
                  </h2>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full px-6">
                  <button className="bg-[#f57c00] text-white text-sm font-bold py-2.5 w-full rounded-md shadow-md hover:bg-orange-700 transition-colors">
                    접수 바로가기
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Banner */}
        <div className="w-full lg:w-[860px] h-[500px] mt-4 lg:mt-0">
          <a href="http://www.andyouth.or.kr/kr/program_and/individual.php?part_idx=39#list" className="block w-full h-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/images/17432129121-4.png"
              alt="멀티플렉스 - 청소년 자율체험공간"
              width={860}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;