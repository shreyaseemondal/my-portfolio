"use client";

import Image from "next/image";
import CTAButton from "../components/CTAButton";
import { useEffect, useState, useRef } from "react";

const TechIcon = ({ icon, delay, className }: { icon: string, delay: number, className?: string }) => (
  <div 
    className={`absolute w-8 h-8 opacity-20 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Image
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={32}
      height={32}
      className="filter invert"
    />
  </div>
);

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M11.572 0c-.176 0-.31.001-.358.007-.927.125-1.527.489-2.19 1.494l-6.65 10.508c-.386.61-.505.931-.505 1.264 0 .512.414.927.926.927.192 0 .375-.043.671-.236l.278-.177 6.651-10.509c.245-.388.428-.59.651-.59.223 0 .406.202.651.59l6.651 10.509.278.177c.296.193.479.236.671.236.512 0 .926-.415.926-.927 0-.333-.119-.654-.505-1.264L19.544 1.5c-.663-1.005-1.263-1.369-2.19-1.494-.049-.006-.182-.007-.358-.007H11.572zM11.573 1.318h4.679c.076 0 .123.001.14.003.29.039.52.155.824.613l6.784 10.72c.136.215.218.39.249.51a.459.459 0 0 1-.137.098c-.055.035-.117.06-.19.077-.076.017-.157.023-.247.016-.172-.013-.362-.067-.592-.168l-6.784-10.72c-.224-.354-.396-.522-.599-.522-.203 0-.375.168-.599.522L8.317 13.167c-.23.101-.42.155-.592.168a.792.792 0 0 1-.247-.016.493.493 0 0 1-.19-.077.459.459 0 0 1-.137-.098c.031-.12.113-.295.249-.51l6.784-10.72c.304-.458.534-.574.824-.613.017-.002.064-.003.14-.003h4.679z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: 'HTML/CSS',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
      setIsVisible(currentScrollY < document.documentElement.scrollHeight - window.innerHeight - 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update state for components that don't need smooth animation
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Direct DOM manipulation for smooth cursor effect
      if (cursorRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #3A0519, #670D2F)",
        }}
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden"
      >
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%23ffffff' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0',
            animation: 'patternMove 60s linear infinite'
          }}
        />

        {/* Mouse Follow Effect - Enhanced */}
        <div 
          ref={cursorRef}
          className="fixed w-[30rem] h-[30rem] rounded-full pointer-events-none mix-blend-soft-light will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(235,232,219,0.07) 0%, rgba(235,232,219,0.03) 40%, rgba(235,232,219,0) 60%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
        />

        {/* Secondary Cursor Effects */}
        <div 
          className="fixed w-64 h-64 rounded-full pointer-events-none mix-blend-soft-light"
          style={{
            background: 'radial-gradient(circle, rgba(235,232,219,0.05) 0%, rgba(235,232,219,0) 70%)',
            transform: `translate3d(${mousePosition.x - 128}px, ${mousePosition.y - 128}px, 0)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div 
          className="fixed w-32 h-32 rounded-full pointer-events-none mix-blend-soft-light"
          style={{
            background: 'radial-gradient(circle, rgba(235,232,219,0.1) 0%, rgba(235,232,219,0) 70%)',
            transform: `translate3d(${mousePosition.x - 64}px, ${mousePosition.y - 64}px, 0)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Background Animation Elements - Enhanced */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Floating Tech Icons - Enhanced */}
          <TechIcon icon="react" delay={0} className="top-[20%] left-[15%] animate-float" />
          <TechIcon icon="typescript" delay={1.5} className="top-[30%] right-[20%] animate-float-reverse" />
          <TechIcon icon="nextjs" delay={1} className="bottom-[25%] left-[20%] animate-float-slow" />
          <TechIcon icon="tailwind" delay={2} className="bottom-[35%] right-[15%] animate-float-reverse-slow" />
        </div>

        <div className="container mx-auto max-w-6xl relative">
          {/* Decorative Lines - Enhanced */}
          <div className="absolute -left-8 top-1/2 w-16 h-px bg-gradient-to-r from-[#EBE8DB]/0 to-[#EBE8DB]/30"></div>
          <div className="absolute -right-8 top-1/2 w-16 h-px bg-gradient-to-l from-[#EBE8DB]/0 to-[#EBE8DB]/30"></div>

          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-[#EBE8DB] text-[#3A0519] rounded-full mb-6 animate-fade-in hover:scale-105 transition-all duration-300 relative group">
              <span className="absolute -left-8 top-1/2 w-6 h-px bg-[#3A0519]/20 group-hover:w-8 transition-all"></span>
              Portfolio
              <span className="absolute -right-8 top-1/2 w-6 h-px bg-[#3A0519]/20 group-hover:w-8 transition-all"></span>
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#EBE8DB] animate-scale-in relative">
              Shreyasee Mondal
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#EBE8DB]/0 via-[#EBE8DB]/30 to-[#EBE8DB]/0"></div>
            </h1>
            <p className="text-xl md:text-2xl text-[#EBE8DB]/90 mb-10 max-w-2xl animate-fade-in animate-delay-200 leading-relaxed">
              I'm a passionate web developer focused on creating beautiful, functional, and user-friendly applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-6 justify-center animate-fade-in animate-delay-300">
              <CTAButton 
                href="/projects" 
                variant="primary"
                className="hover:scale-105 transition-all duration-300 relative group text-lg"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-[#EBE8DB]/10 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </CTAButton>
              <CTAButton 
                href="/contact" 
                variant="secondary"
                className="hover:scale-105 transition-all duration-300 relative group text-lg"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-[#3A0519]/10 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#EBE8DB] text-sm font-medium tracking-wide transition-all duration-300">
            {isScrollingUp ? 'Scroll Up' : 'Scroll Down'}
          </span>
          <div className="w-6 h-12 border-2 border-[#EBE8DB]/70 rounded-full p-1.5 flex justify-center hover:border-[#EBE8DB] transition-colors duration-300">
            <div 
              className={`w-2 h-2 bg-[#EBE8DB]/70 rounded-full transition-all duration-300 hover:bg-[#EBE8DB] ${
                isScrollingUp ? 'animate-float-reverse' : 'animate-float'
              }`}
            ></div>
          </div>
        </div>
      </section>
      
      {/* About Me Section - Enhanced */}
      <section className="py-32 px-4 bg-[#EBE8DB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3A0519]/[0.02] pattern-grid-lg"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A0519] to-[#670D2F] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(58,5,25,0.15)] transition-all duration-300 group-hover:shadow-[0_25px_50px_rgba(58,5,25,0.2)] group-hover:scale-[1.02]">
                <Image
                  src="/p1.jpg"
                  alt="Shreyasee Mondal"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:col-span-7 text-[#3A0519] space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight relative inline-block">
                  About Me
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#3A0519] to-[#3A0519]/0"></div>
                </h2>
                <p className="text-xl leading-relaxed opacity-90">
                  Hi! I'm Shreyasee Mondal, a frontend developer passionate about crafting elegant, user-first web experiences. I specialize in building responsive and intuitive interfaces that combine clean design with seamless functionality.
                </p>
                <p className="text-xl leading-relaxed opacity-90">
                  With a strong foundation in modern web technologies, I focus on creating applications that not only look beautiful but also deliver exceptional user experiences.
                </p>
              </div>
              
              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Skills I Work With</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-5 py-2.5 bg-[#3A0519]/10 text-[#3A0519] rounded-full text-base font-medium transition-all duration-300 hover:bg-[#3A0519]/20 hover:scale-105 cursor-default flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Resume Button */}
              <div className="pt-6">
                <a 
                  href="/Shreyasee_Mondal_Resume.pdf"
                  className="inline-flex items-center px-8 py-4 bg-[#3A0519] text-[#EBE8DB] hover:bg-[#670D2F] border-2 border-[#3A0519] hover:border-[#670D2F] rounded-lg transition-all duration-300 font-medium text-lg shadow-[0_4px_12px_rgba(58,5,25,0.15)] hover:shadow-[0_8px_24px_rgba(58,5,25,0.25)] group"
                  download
                >
                  <span>Download Resume</span>
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
