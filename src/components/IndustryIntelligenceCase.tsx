import React from 'react';
import { Newspaper, Clock, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { MetricCardData } from '../types';

export const IndustryIntelligenceCase: React.FC = () => {
  const metrics: MetricCardData[] = [
    {
      id: 'm-1',
      tag: 'BENCHMARK RIGOR',
      value: '~75',
      label: 'Evaluation cases',
      detail: 'across 5 test domains for precision assurance.',
    },
    {
      id: 'm-2',
      tag: 'QUERY LATENCY',
      value: '~10m',
      label: 'From question to analysis',
      detail: 'verifiable data analysis for supported self-service queries.',
    },
    {
      id: 'm-3',
      tag: 'PUBLIC IMPACT',
      value: '20+',
      label: 'Media reports & features',
      detail: 'after public exhibition demo and industry validation.',
    },
    {
      id: 'm-4',
      tag: 'DEPLOYMENT REALITY',
      value: '1st',
      label: 'Manufacturing deployment',
      detail: 'customer production deployment currently in progress.',
    },
  ];

  return (
    <section id="case-intelligence" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
            CASE 03 · AI IN THE WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292B2F] tracking-tight mt-1">
            Weekly Industry Intelligence
          </h2>
          <p className="text-base sm:text-lg text-[#484A4F] mt-2 max-w-3xl">
            Making an uneconomical weekly analytical service viable with an automated, source-grounded AI pipeline.
          </p>
        </div>

        {/* Narrative Comparison Card */}
        <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-7 sm:p-9 mb-14 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code bg-[#F7F4EA] border border-[#E7E3D9] px-2 py-0.5 rounded text-[#484A4F]">
                  THE ECONOMIC BOTTLENECK
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#292B2F]">
                傳統人工週報：成本高昂且無法規模化
              </h3>
              <p className="text-sm text-[#484A4F] leading-relaxed">
                每周需消耗分析師 25+ 小時閱讀數十份行業新聞、財報與法規檔案。人工整理耗時且易受主觀偏見影響，邊際服務成本過高，導致無法向中小型客戶規模化推廣。
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code bg-[#F3E7B8] text-[#292B2F] font-bold px-2 py-0.5 rounded">
                  THE PRAGMATIC PM FIX
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#292B2F]">
                嚴格限制資料來源與 7 日滾動窗口
              </h3>
              <p className="text-sm text-[#484A4F] leading-relaxed">
                不讓 AI 自由上網搜尋妄加推斷，而是鎖定白名單權威產業來源與 7 天時間窗口。將 AI 定位為「萃取與對齊」的引擎，維持 100% 可回溯的原文引用索引。
              </p>
            </div>
          </div>
        </div>

        {/* Rigorous Metric Cards (KPI Strip) */}
        <div>
          <div className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider mb-6 flex items-center gap-2">
            <span>MEASURABLE OUTCOMES & REFINED METRICS</span>
            <div className="h-px bg-[#E7E3D9] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-6 flex flex-col justify-between space-y-3 hover:border-[#DDB84F] transition-all hover:shadow-xs group"
              >
                <div>
                  <span className="text-[10px] font-mono-code text-[#484A4F] tracking-wider block mb-2 font-medium">
                    {m.tag}
                  </span>
                  <div className="text-4xl sm:text-5xl font-bold font-mono-code text-[#292B2F] group-hover:text-[#DDB84F] transition-colors">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-[#292B2F] mt-2">
                    {m.label}
                  </div>
                </div>

                <p className="text-xs text-[#484A4F] leading-relaxed pt-3 border-t border-[#E7E3D9]/60">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
