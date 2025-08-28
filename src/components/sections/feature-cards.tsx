import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  descriptionLine1: string;
  descriptionLine2: string;
  imageUrl: string | null;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, descriptionLine1, descriptionLine2, imageUrl, link }) => {
  return (
    <a href={link} className="block group">
      <div className="relative h-[235px] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-zinc-600" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center gap-x-8 px-4 sm:gap-x-12 sm:px-8">
          <div className="text-white">
            <h3 className="text-3xl font-bold lg:text-4xl">{title}</h3>
            <div className="w-10 h-px my-5 bg-white" />
            <p className="text-base leading-relaxed">
              {descriptionLine1}<br />{descriptionLine2}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 border border-white rounded-full group-hover:bg-white/10">
              <Plus className="w-10 h-10" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const cardData: FeatureCardProps[] = [
  {
    title: 'Q&A',
    descriptionLine1: '프로그램 및 센터와 관련된',
    descriptionLine2: '질문들입니다.',
    imageUrl: null,
    link: 'https://www.andyouth.or.kr/kr/community/qna.php'
  },
  {
    title: '갤러리',
    descriptionLine1: '프로그램 및 센터와 관련된',
    descriptionLine2: '사진/영상입니다.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/598a5dd4-a2bc-45b0-8c97-0d0ea0ae3f3a-andyouth-or-kr/assets/images/15855479771-24.jpg',
    link: 'https://www.andyouth.or.kr/kr/community/faq.php'
  }
];

export default function FeatureCards() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {cardData.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}