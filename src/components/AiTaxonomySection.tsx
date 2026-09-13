import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AiTaxonomySection: React.FC = () => {
  return (
    <section id="work" className="py-20 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono-code text-xs text-[#484A4F] uppercase tracking-wider">
              AI TAXONOMY & STRATEGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292B2F] tracking-tight">
            AI 不只有一種位置。
          </h2>
          <p className="text-base text-[#484A4F] mt-2 max-w-2xl">
            我做過三種產品，也做過三種不同的 AI 決策。精準配置技術邊界，才是系統可信賴的關鍵。
          </p>
        </div>

        {/* 3 Narrative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: AI as Product */}
          <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-7 flex flex-col justify-between hover:border-[#DDB84F]/60 transition-all hover:shadow-xs group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#484A4F]">
                  PATTERN A
                </span>
                <span className="text-[11px] font-mono-code text-[#484A4F] bg-[#F7F4EA] px-2 py-0.5 rounded border border-[#E7E3D9]">
                  AI AS THE PRODUCT
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#292B2F] group-hover:text-[#DDB84F] transition-colors">
                Enterprise Text2SQL
              </h3>

              <blockquote className="font-serif-quote italic text-sm text-[#484A4F] border-l-2 border-[#DDB84F] pl-3 py-1">
                “當 AI 是產品核心，我選擇先限制它知道什麼。”
              </blockquote>

              <p className="text-xs text-[#484A4F] leading-relaxed">
                以嚴格領域定義限制知識範圍，避免非預期推理造成對資料庫的客製化傷害與幻覺風險。
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  5 test domains
                </span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  ~75 eval cases
                </span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  Out-of-domain refusal
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E3D9]/70">
              <a
                href="#case-text2sql"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-semibold text-[#292B2F] hover:text-[#DDB84F] transition-colors"
              >
                <span>View case details</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: AI in Workflow */}
          <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-7 flex flex-col justify-between hover:border-[#DDB84F]/60 transition-all hover:shadow-xs group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#484A4F]">
                  PATTERN B
                </span>
                <span className="text-[11px] font-mono-code text-[#484A4F] bg-[#F7F4EA] px-2 py-0.5 rounded border border-[#E7E3D9]">
                  AI IN THE WORKFLOW
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#292B2F] group-hover:text-[#DDB84F] transition-colors">
                Weekly Industry Intelligence
              </h3>

              <blockquote className="font-serif-quote italic text-sm text-[#484A4F] border-l-2 border-[#DDB84F] pl-3 py-1">
                “當 AI 是流程的一部分，我限制資料來源、時間範圍與服務目的。”
              </blockquote>

              <p className="text-xs text-[#484A4F] leading-relaxed">
                把非結構化商業情報轉為高可信圖表與決策摘要，透過定時管線化降低高昂的人工作業成本。
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  7-day window
                </span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  Source-grounded
                </span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F] border border-[#E7E3D9]">
                  Automated delivery
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E3D9]/70">
              <a
                href="#case-intelligence"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-semibold text-[#292B2F] hover:text-[#DDB84F] transition-colors"
              >
                <span>View case details</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: AI as Builder (Primary Focus) */}
          <div className="bg-[#FFFEF9] rounded-2xl border-2 border-[#DDB84F] p-7 flex flex-col justify-between shadow-xs relative group bg-gradient-to-b from-[#FFFEF9] to-[#FDF9EE]">
            <div className="absolute -top-3 right-6 bg-[#DDB84F] text-[#292B2F] px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider shadow-2xs">
              PRIMARY FOCUS
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#484A4F]">
                  PATTERN C
                </span>
                <span className="text-[11px] font-mono-code text-[#292B2F] bg-[#F3E7B8] px-2 py-0.5 rounded font-semibold">
                  AI AS THE BUILDER
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#292B2F]">
                Manufacturing Work Management
              </h3>

              <blockquote className="font-serif-quote italic text-sm text-[#292B2F] border-l-2 border-[#DDB84F] pl-3 py-1 font-medium">
                “最初想做 AI ERP/MES。最後發現，真正好的產品根本不需要 AI 存在 Runtime。”
              </blockquote>

              <p className="text-xs text-[#484A4F] leading-relaxed">
                AI 加快了原型與前期設計探索，但在第一線工廠現場，極致精簡、防呆與易用性才是核心。
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#F3E7B8] text-[#292B2F] font-medium border border-[#DDB84F]/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#292B2F]" />
                  Prototype → First customer deployment
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DDB84F]/30">
              <a
                href="#case-manufacturing"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#292B2F] hover:text-[#B89330] transition-colors"
              >
                <span>View featured deep dive</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
