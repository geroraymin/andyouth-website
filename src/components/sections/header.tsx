import { Lock, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: '#', text: '앤드(&)콘텐츠' },
    { href: '#', text: '앤드(&)프로그램' },
    { href: '#', text: '앤드(&)커뮤니티' },
    { href: '#', text: '앤드(&)센터' },
  ];

  return (
    <header className="bg-white shadow-sm font-body">
      {/* Top utility bar */}
      <div className="bg-[#1E88E5]">
        <div className="container mx-auto flex h-[34px] items-center justify-end px-5">
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="https://www.andyouth.or.kr/kr/member/login.php"
                className="flex items-center space-x-1 text-white text-xs font-normal transition-colors hover:text-gray-200 hover:no-underline"
              >
                <Lock size={14} className="flex-shrink-0" />
                <span>로그인</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.andyouth.or.kr/kr/member/join_01.php"
                className="flex items-center space-x-1 text-white text-xs font-normal transition-colors hover:text-gray-200 hover:no-underline"
              >
                <UserPlus size={14} className="flex-shrink-0" />
                <span>회원가입</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main header with logo, navigation, and sitemap button */}
      <div className="container mx-auto flex h-[88px] items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:no-underline">
          <span className="text-5xl font-bold text-[#0ab1c9]">&</span>
          <div>
            <p className="text-base font-semibold text-[#007fad]">
              시립노원청소년미래진로센터 <span className="font-bold text-[#1A237E]">앤드</span>
            </p>
            <p className="text-[10px] text-gray-500 tracking-wider">
              Nowon Career Center for Youth and Future
            </p>
          </div>
        </Link>
        
        <div className="flex items-center space-x-8">
          {/* Main Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-12">
              {navLinks.map(({ href, text }) => (
                <li key={text}>
                  <Link href={href} className="text-lg font-medium text-[#424242] hover:text-[#1976D2] hover:no-underline">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sitemap/Hamburger Button */}
          <button className="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-sm bg-[#333333]">
            <span className="h-0.5 w-5 bg-white"></span>
            <span className="h-0.5 w-5 bg-white"></span>
            <span className="h-0.5 w-5 bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}