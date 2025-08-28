import React from 'react';

// Data for partner logos. 
// As image assets were not provided in the scraped data, text placeholders are used instead
// to represent the partners shown in the design screenshot.
const partners = [
  { name: '서울특별시', sub: 'SEOUL METROPOLITAN GOVERNMENT' },
  { name: '광운대학교', sub: '상담복지정책대학원' },
  { name: '서울특별시청소년시설협회', sub: 'THE SEOUL ASSOCIATION OF YOUTHCENTER' },
  { name: '여성가족부', sub: 'Ministry of Gender Equality and Family' },
  { name: '질병 없는 노원', sub: '' },
];


const PartnerLogos = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1200px] px-5 py-10">
                <div className="flex flex-wrap justify-center gap-5 md:justify-between">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex h-24 w-full max-w-[216px] items-center justify-center border border-border p-4 text-center sm:w-[216px]"
                        >
                            <div className="text-muted-foreground">
                                <p className="text-sm font-bold text-foreground">{partner.name}</p>
                                {partner.sub && <p className="mt-1 text-xs">{partner.sub}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;