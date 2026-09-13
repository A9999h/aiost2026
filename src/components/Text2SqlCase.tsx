import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, Code2, Database } from 'lucide-react';

export const Text2SqlCase: React.FC = () => {
  const [selectedDemoQuery, setSelectedDemoQuery] = useState<'in' | 'out'>('in');

  return (
    <section id="case-text2sql" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
            CASE 02 · AI AS THE PRODUCT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292B2F] tracking-tight mt-1">
            TEXT2SQL — RELIABILITY STARTS WITH BOUNDARIES
          </h2>
          <p className="font-serif-quote italic text-lg text-[#484A4F] mt-2">
            “Reliability came from defining what the system should not answer.”
          </p>
        </div>

        {/* Boundary Architecture Container */}
        <div className="relative bg-[#FFFEF9] rounded-3xl border border-[#E7E3D9] p-6 sm:p-10 shadow-xs overflow-hidden">
          {/* Outside Domain Label Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E7E3D9]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="font-mono-code text-xs text-[#484A4F] uppercase tracking-wider font-semibold">
                OUTSIDE DOMAIN BOUNDARY = STRICT REFUSAL WITH "NOT SUPPORTED"
              </span>
            </div>
            <div className="text-xs font-mono-code text-[#484A4F] bg-[#F7F4EA] px-3 py-1 rounded border border-[#E7E3D9]">
              Zero-hallucination Contract
            </div>
          </div>

          {/* Interactive Boundary Demonstration */}
          <div className="mb-8">
            <div className="text-xs font-mono-code text-[#484A4F] mb-3 flex items-center gap-2">
              <span>Try Query Boundary Test:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedDemoQuery('in')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  selectedDemoQuery === 'in'
                    ? 'bg-[#DDB84F] text-[#292B2F] font-bold shadow-xs'
                    : 'bg-[#F7F4EA] text-[#484A4F] hover:bg-[#E7E3D9]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>In-Domain: 查詢上月各產線稼動率與報廢分析</span>
              </button>

              <button
                onClick={() => setSelectedDemoQuery('out')}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  selectedDemoQuery === 'out'
                    ? 'bg-[#292B2F] text-[#FFFEF9] font-bold shadow-xs'
                    : 'bg-[#F7F4EA] text-[#484A4F] hover:bg-[#E7E3D9]'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>Out-of-Domain: 幫我寫一首給經理的問候短詩</span>
              </button>
            </div>
          </div>

          {/* THE BIG YELLOW BOUNDARY BOX */}
          <div className="relative rounded-2xl border-2 border-[#DDB84F] bg-gradient-to-b from-[#FFFDF6] to-[#FAF5E6] p-6 sm:p-8">
            {/* Box Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#DDB84F]/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#DDB84F]"></span>
                <span className="font-mono-code font-bold text-sm tracking-wider text-[#292B2F]">
                  THIS BUSINESS DOMAIN
                </span>
              </div>
              <span className="text-xs font-mono-code bg-[#DDB84F] text-[#292B2F] px-3 py-1 rounded-md font-bold">
                75 / 75 EVAL CASES IN DEFINED DOMAIN (100% ACCURACY)
              </span>
            </div>

            {/* Workflow Steps inside the Domain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 01 */}
              <div className="bg-[#FFFEF9] rounded-xl border border-[#DDB84F]/50 p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold text-[#DDB84F]">01</span>
                  <span className="text-[10px] font-mono-code text-[#484A4F] uppercase">INPUT</span>
                </div>
                <h4 className="font-bold text-sm text-[#292B2F]">User Question</h4>
                <p className="text-xs text-[#484A4F] font-mono-code">
                  Natural language intent parse with entity recognition.
                </p>
              </div>

              {/* Step 02 */}
              <div className="bg-[#FFFEF9] rounded-xl border border-[#DDB84F]/50 p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold text-[#DDB84F]">02</span>
                  <span className="text-[10px] font-mono-code text-[#484A4F] uppercase">SYNTHESIS</span>
                </div>
                <h4 className="font-bold text-sm text-[#292B2F]">Schema + Golden SQL</h4>
                <p className="text-xs text-[#484A4F] font-mono-code">
                  Constrained semantic mapping to verified physical schema.
                </p>
              </div>

              {/* Step 03 */}
              <div className="bg-[#FFFEF9] rounded-xl border border-[#DDB84F]/50 p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold text-[#DDB84F]">03</span>
                  <span className="text-[10px] font-mono-code text-[#484A4F] uppercase">VERIFY</span>
                </div>
                <h4 className="font-bold text-sm text-[#292B2F]">Evidence & Output</h4>
                <p className="text-xs text-[#484A4F] font-mono-code">
                  Execution guardrails validate rows & generate chart artifact.
                </p>
              </div>
            </div>

            {/* Simulated Query Execution Result Box */}
            <div className="mt-8 pt-6 border-t border-[#DDB84F]/30">
              {selectedDemoQuery === 'in' ? (
                <div className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-5 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Domain Validated (Confidence: 0.99)
                    </span>
                    <span className="text-[#484A4F]">Execution time: 420ms</span>
                  </div>
                  <div className="bg-[#292B2F] text-[#E7E3D9] p-3 rounded-lg font-mono-code text-xs overflow-x-auto">
                    <span className="text-[#DDB84F]">SELECT</span> line_id, AVG(utilization_rate) AS avg_oee, SUM(scrap_qty) AS total_scrap <br />
                    <span className="text-[#DDB84F]">FROM</span> production_metrics_daily <br />
                    <span className="text-[#DDB84F]">WHERE</span> report_date &gt;= DATEADD(month, -1, CURRENT_DATE) <br />
                    <span className="text-[#DDB84F]">GROUP BY</span> line_id;
                  </div>
                  <p className="text-xs text-[#484A4F]">
                    ✓ SQL 邏輯通過審計防線，自動轉譯為產線可視化圖表與數據稽核對帳單。
                  </p>
                </div>
              ) : (
                <div className="bg-[#292B2F] text-[#FFFEF9] rounded-xl p-5 space-y-2.5 animate-in fade-in duration-200 border border-rose-500/40">
                  <div className="flex items-center gap-2 text-rose-400 font-mono-code text-xs font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>BOUNDARIES ENFORCED: REQUEST REJECTED (OUT OF SCOPE)</span>
                  </div>
                  <p className="text-xs font-mono-code text-[#E7E3D9] leading-relaxed">
                    “抱歉，該請求超出本企業資料庫的授權分析邊界（僅支援生產指標、稼動率與工單報表）。系統拒絕進行非相關領域的自由推理與妄想生成。”
                  </p>
                  <span className="text-[11px] font-mono-code text-[#DDB84F] block">
                    Zero-hallucination guardrail triggered by design.
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[#484A4F] pt-4 border-t border-[#DDB84F]/30">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#DDB84F]" />
                Deterministic Golden SQL Mapping + Execution Checks
              </span>
              <span className="font-semibold text-[#292B2F]">
                Clear boundary prevents hallucinations by design.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
