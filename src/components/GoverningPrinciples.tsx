import React from 'react';
import { PrincipleItem } from '../types';

export const GoverningPrinciples: React.FC = () => {
  const principles: PrincipleItem[] = [
    {
      id: 'p-1',
      step: '01',
      category: 'DISCOVERY',
      title: 'Problem before solution.',
      quote: '“客戶提出的解法，不一定是真正的問題。”',
      description:
        '從功能需求往回推，往往發現這只是因應既有缺陷或習慣所採取的補償手段。解決根本瓶頸，通常比直接照抄需求更簡單、更優雅。',
    },
    {
      id: 'p-2',
      step: '02',
      category: 'FEASIBILITY',
      title: 'Complexity has a price.',
      quote: '“不是先問什麼功能該砍，而是先釐清什麼價值值得使用者承擔相應的複雜度。”',
      description:
        '每多一個流程、多一個開關都是認知負載與維護成本。唯有能帶來決定性價值的環節，才值得讓使用者付出學習與操作成本。',
    },
    {
      id: 'p-3',
      step: '03',
      category: 'CONSTRAINTS',
      title: 'Boundaries create reliability.',
      quote: '“尤其是 AI 系統，清楚知道自己不該處理什麼，和知道自己能處理什麼一樣重要。”',
      description:
        '邊界不清往往帶來系統性災難。在未授權或不可控域的主動拒絕，比勉強提供模糊解答更值得信賴。系統可信度來自 100% 可預期的反應。',
    },
    {
      id: 'p-4',
      step: '04',
      category: 'OWNERSHIP',
      title: 'AI accelerates output, not accountability.',
      quote: '“AI 加快實作，也把更多驗證、整合與品質責任推回產品端。”',
      description:
        '模型降低了原型與撰寫程式碼的門檻，但產品的價值不在於產出速度，而在於產出是否正確。工程越容易被自動化生成，產品架構與品質標準的判斷就越關鍵。',
    },
  ];

  return (
    <section id="thinking" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
            GOVERNING PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292B2F] tracking-tight mt-2">
            How I make product decisions.
          </h2>
          <p className="text-base text-[#484A4F] mt-2">
            Four principles derived from shipping data & AI products in ambiguous environments.
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid — Typography as Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((p) => (
            <div
              key={p.id}
              className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-[#DDB84F] transition-all hover:shadow-xs group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code font-bold text-base text-[#DDB84F]">
                    {p.step}
                  </span>
                  <span className="text-[11px] font-mono-code text-[#484A4F] tracking-wider uppercase bg-[#F7F4EA] px-2.5 py-0.5 rounded border border-[#E7E3D9]">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#292B2F] group-hover:text-[#DDB84F] transition-colors leading-snug">
                  {p.title}
                </h3>

                <blockquote className="font-serif-quote italic text-base text-[#292B2F] border-l-2 border-[#DDB84F] pl-3 py-1 font-medium">
                  {p.quote}
                </blockquote>
              </div>

              <p className="text-sm text-[#484A4F] leading-relaxed pt-4 border-t border-[#E7E3D9]/60">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
