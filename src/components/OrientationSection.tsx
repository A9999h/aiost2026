import React from 'react';

export const OrientationSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#E7E3D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#484A4F] tracking-widest uppercase font-semibold">
              ARCHITECTURAL ORIENTATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292B2F] tracking-tight mt-2">
              I work between problem, system and execution.
            </h2>
          </div>
          <div className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider">
            METRIC OF MERIT: HIGH IMPACT WITH REDUCED RUNTIME COMPLEXITY
          </div>
        </div>

        {/* 3-Column Magazine / Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 01 */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono-code font-bold text-sm text-[#DDB84F]">01</span>
              <div className="h-px bg-[#E7E3D9] flex-1"></div>
              <span className="font-mono-code text-[11px] text-[#484A4F] uppercase tracking-wider">
                FRAME
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#292B2F] mb-1">
                Problem Framing
              </h3>
              <p className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider mb-3">
                從模糊到本質
              </p>
            </div>

            <p className="text-sm text-[#484A4F] leading-relaxed">
              從「客戶說想要什麼」往下追，釐清真正值得解決的核心問題，以及使用者在現場願意承擔多少操作複雜度，不盲從表面要求。
            </p>
          </div>

          {/* Column 02 */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono-code font-bold text-sm text-[#DDB84F]">02</span>
              <div className="h-px bg-[#E7E3D9] flex-1"></div>
              <span className="font-mono-code text-[11px] text-[#484A4F] uppercase tracking-wider">
                MODEL
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#292B2F] mb-1">
                System Thinking
              </h3>
              <p className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider mb-3">
                結構化與邊界
              </p>
            </div>

            <p className="text-sm text-[#484A4F] leading-relaxed">
              把角色、流程、資料與系統邊界整理成工程可以實作、客戶可以理解的共同語言。清晰的實體定義與狀態機轉移，防禦架構混亂。
            </p>
          </div>

          {/* Column 03 */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono-code font-bold text-sm text-[#DDB84F]">03</span>
              <div className="h-px bg-[#E7E3D9] flex-1"></div>
              <span className="font-mono-code text-[11px] text-[#484A4F] uppercase tracking-wider">
                SHIP
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#292B2F] mb-1">
                AI-assisted Execution
              </h3>
              <p className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider mb-3">
                敏捷驗證與交付
              </p>
            </div>

            <p className="text-sm text-[#484A4F] leading-relaxed">
              讓 AI 加快 prototype 與 implementation，但把更多注意力放回測試、整合與品質判斷。加速產出，同時建立嚴格的驗收防線。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
