import React from 'react';
import { ArrowRight, Database, Layers, BrainCircuit, Sparkles } from 'lucide-react';
import { CareerPhase } from '../types';

export const CareerTrajectory: React.FC = () => {
  const phases: CareerPhase[] = [
    {
      id: 'c-1',
      phase: 'PHASE 01 (FOUNDATION)',
      role: 'Data & Analytics',
      subBadge: '~8 Years Experience',
      description:
        'Schema design, ETL pipelines, tabular modeling, data governance, and analytical data stores.',
    },
    {
      id: 'c-2',
      phase: 'PHASE 02 (STRUCTURE)',
      role: 'SA / SD Engineering',
      subBadge: 'Systems Architecture',
      description:
        'System boundaries, functional specifications, API contracts, domain models, and interface state machines.',
    },
    {
      id: 'c-3',
      phase: 'PHASE 03 (PRESENT)',
      role: 'Product / AI PM',
      subBadge: 'Apex Ownership',
      description:
        'Bridging deep technical feasibility with pragmatic product-market fit. Designing bounded, high-reliability AI solutions.',
      isOpenToMeeting: true,
    },
  ];

  return (
    <section className="py-24 border-b border-[#E7E3D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
            SYSTEM ARCHITECTURE HERITAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292B2F] tracking-tight mt-1">
            Career Trajectory & Technical DNA
          </h2>
          <p className="text-base text-[#484A4F] mt-2 max-w-2xl">
            約 8 年扎實的資料與系統架構經驗，轉化為對複雜邊界高度敏感的產品洞察。
          </p>
        </div>

        {/* Horizontal Connected Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {phases.map((phase, idx) => (
            <div
              key={phase.id}
              className={`rounded-2xl p-7 flex flex-col justify-between space-y-4 border transition-all ${
                phase.isOpenToMeeting
                  ? 'bg-gradient-to-b from-[#FFFDF8] to-[#FAF4E2] border-2 border-[#DDB84F] shadow-xs'
                  : 'bg-[#FFFEF9] border-[#E7E3D9] hover:border-[#DDB84F]/60'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[#484A4F] uppercase font-bold tracking-wider">
                    {phase.phase}
                  </span>
                  {phase.isOpenToMeeting && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#DDB84F] text-[#292B2F] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#292B2F] animate-ping"></span>
                      Open to meeting
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#292B2F]">
                    {phase.role}
                  </h3>
                  <span className="inline-block text-xs font-mono-code text-[#DDB84F] font-semibold mt-0.5">
                    {phase.subBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#484A4F] leading-relaxed pt-2">
                  {phase.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E3D9]/60 flex items-center justify-between text-xs font-mono-code text-[#484A4F]">
                <span>Stage 0{idx + 1}</span>
                {idx < 2 ? (
                  <span className="text-[#DDB84F] flex items-center">
                    Evolution <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                ) : (
                  <span className="text-[#292B2F] font-bold">Current Focus</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
