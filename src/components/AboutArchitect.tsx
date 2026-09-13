import React from 'react';
import { SharkLogo } from './SharkLogo';

export const AboutArchitect: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Shark Visual Badge & Monogram */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-8 text-center space-y-6 shadow-xs">
              <div className="w-36 h-36 mx-auto flex items-center justify-center">
                <SharkLogo size="100%" />
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="font-mono-code font-bold text-base text-[#292B2F] tracking-wider">
                  APEX SYSTEMS
                </div>
                <div className="text-xs font-mono-code text-[#484A4F]">
                  Continuous Forward Momentum
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E3D9] text-[11px] font-mono-code text-[#484A4F]">
                Product Architecture & Decision Framework
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Signature */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
              ABOUT THE ARCHITECT
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292B2F] tracking-tight leading-snug">
              我最能發揮價值的地方，
              <br className="hidden sm:inline" />
              是問題還模糊、系統還沒有答案的時候。
            </h2>

            <div className="space-y-4 text-base text-[#484A4F] leading-relaxed font-normal">
              <p>
                在真實的商業世界裡，許多失敗的 AI 專案並不是因為演算法不夠強，而是因為沒有人在開發之前，把結構與真正的核心問題想清楚。
              </p>
              <p>
                具備 SA/SD 的扎實工程背景，讓我能直接在系統架構、API 合約與狀態機層面與技術團隊精準對齊；而約 8 年的資料產品經驗，更培養了對「邊界」與「資料真實性」的深刻敬畏。
              </p>
              <p>
                我的目標是把模糊的商業願景轉化為最少繁瑣、高可靠度且經得起產線現場考驗的俐落產品。
              </p>
            </div>

            {/* Signature Shark Quote */}
            <div className="pt-4">
              <div className="inline-block bg-[#F3E7B8]/60 border border-[#DDB84F]/40 rounded-xl px-5 py-3.5">
                <p className="font-serif-quote italic text-lg sm:text-xl text-[#292B2F] font-semibold flex items-center gap-2">
                  <span>“I like simple products, clear boundaries, and sharks.”</span>
                  <span className="text-2xl not-italic">🦈</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
