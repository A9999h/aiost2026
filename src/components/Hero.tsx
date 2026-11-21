import React from 'react';
import { ArrowRight, Download, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { SharkLogo } from './SharkLogo';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative isolate pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E7E3D9] overflow-hidden bg-[#F7F4EA]">
      {/* Background Wallpaper Layer (Systems Thinking Architectural Blueprint) */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpeg`}
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('hero-bg-sketch.svg')) {
              target.src = `${import.meta.env.BASE_URL}hero-bg-sketch.svg`;
            }
          }}
          alt="Systems Thinking Architectural Blueprint"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Very soft corner gradient blending to harmonize with borders without obscuring sketches */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EA]/20 via-transparent to-[#F7F4EA]/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Philosophy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FFFEF9] border border-[#E7E3D9] text-xs font-mono-code tracking-wider text-[#484A4F]">
              <span className="w-2 h-2 rounded-full bg-[#DDB84F] inline-block animate-pulse"></span>
              <span className="font-semibold text-[#292B2F]">PRODUCT MANAGER</span>
              <span className="text-[#E7E3D9]">|</span>
              <span>SYSTEMS THINKER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#292B2F] tracking-tight leading-[1.25] text-balance">
              先把問題想清楚，
              <br />
              <span className="relative inline-block">
                再決定 AI 該出現在哪裡。
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#F3E7B8] -z-10 rounded-full opacity-80"></span>
              </span>
            </h1>

            {/* English Tagline Quote */}
            <div className="border-l-3 border-[#DDB84F] pl-4 py-1.5 bg-[#FFFEF9]/60 rounded-r-lg">
              <p className="font-serif-quote italic text-lg text-[#484A4F] leading-relaxed">
                “Frame the problem. Define the boundaries. Decide where AI belongs.”
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-[#484A4F] leading-relaxed max-w-2xl font-normal">
              我是一名具備 SA/SD 與約 8 年資料應用經驗的產品經理。擅長從模糊需求中找到真正的核心問題，將需求轉成可以實作的系統設計，再運用 AI 加速開發、驗證與交付。
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] font-semibold text-sm sm:text-base transition-all shadow-xs hover:shadow-sm active:scale-98 group cursor-pointer"
              >
                <span>看看我怎麼做產品</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFEF9] hover:bg-[#F3E7B8]/40 border border-[#E7E3D9] text-[#292B2F] font-medium text-sm sm:text-base transition-all active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#484A4F]" />
                <span>下載履歷 (Download CV)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Shark Visual Signature with Editorial Annotations */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-7 shadow-xs hover:shadow-md transition-shadow">
              {/* Annotation 01: Frame Problem */}
              <div className="absolute -top-3.5 left-6 bg-[#FFFEF9] border border-[#E7E3D9] rounded-md px-2.5 py-1 text-[11px] font-mono-code font-medium text-[#484A4F] shadow-2xs flex items-center gap-1.5">
                <span className="text-[#DDB84F] font-bold">01</span>
                <span>Frame Problem</span>
              </div>

              {/* Annotation 02: Design System */}
              <div className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 bg-[#FFFEF9] border border-[#E7E3D9] rounded-md px-2.5 py-1 text-[11px] font-mono-code font-medium text-[#484A4F] shadow-2xs flex items-center gap-1.5">
                <span className="text-[#DDB84F] font-bold">02</span>
                <span>Design System</span>
              </div>

              {/* Annotation 03: Build AI-assisted */}
              <div className="absolute -bottom-3.5 left-8 bg-[#FFFEF9] border border-[#E7E3D9] rounded-md px-2.5 py-1 text-[11px] font-mono-code font-medium text-[#484A4F] shadow-2xs flex items-center gap-1.5">
                <span className="text-[#DDB84F] font-bold">03</span>
                <span>Build AI-assisted</span>
              </div>

              {/* Shark Canvas */}
              <div className="relative flex flex-col items-center justify-center pt-3 pb-2">
                <div className="w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center transition-transform hover:scale-[1.02] duration-300">
                  <div className="w-full h-full relative">
                    <SharkLogo size="100%" />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <span className="inline-block font-mono-code text-xs uppercase tracking-widest font-bold text-[#292B2F] bg-[#F7F4EA] px-3 py-1 rounded border border-[#E7E3D9]">
                    SYSTEMS THINKER
                  </span>
                  <p className="text-xs text-[#484A4F] mt-1.5 font-serif-quote italic">
                    Sharp Thinking. Simple Products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
