import React, { useState } from 'react';
import { X, Printer, Download, Check, Copy, ExternalLink } from 'lucide-react';
import { SharkLogo } from './SharkLogo';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `Shao (ARCH // APEX) - Product Manager & Systems Thinker
Email: shaoci.jheng208@gmail.com
Specialization: Problem Framing, System Architecture (SA/SD), Bounded AI Systems
Experience: ~8 years data analytics & engineering, product owner of 3 specialized AI implementations.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#E7E3D9] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DDB84F]">
              <SharkLogo size="100%" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#292B2F]">
                Executive Curriculum Vitae
              </h3>
              <p className="text-xs font-mono-code text-[#484A4F]">
                Product Manager · Systems Thinker
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg hover:bg-[#F7F4EA] text-[#484A4F] text-xs font-mono-code flex items-center gap-1 border border-[#E7E3D9] cursor-pointer"
              title="Copy Summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] text-xs font-mono-code flex items-center gap-1 cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#F7F4EA] text-[#484A4F] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6 text-sm text-[#484A4F] leading-relaxed">
          {/* Identity & Contacts */}
          <div className="bg-[#F7F4EA] p-4 rounded-xl border border-[#E7E3D9] space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-lg text-[#292B2F]">
                SHAO // APEX
              </span>
              <span className="text-xs font-mono-code text-[#292B2F] bg-[#F3E7B8] px-2 py-0.5 rounded font-bold">
                Available for PM & Strategy roles
              </span>
            </div>
            <div className="text-xs font-mono-code text-[#484A4F] flex flex-wrap gap-4 pt-1">
              <span>Email: shaoci.jheng208@gmail.com</span>
              <span>Location: Taipei, Taiwan</span>
              <span>Focus: Enterprise Systems, Industrial IoT & Bounded AI</span>
            </div>
          </div>

          {/* Core Value Proposition */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#292B2F] font-bold mb-2">
              Core Value Proposition
            </h4>
            <p>
              具備 SA/SD 與約 8 年資料應用經驗的產品經理。擅長從模糊業務場景中梳理本質問題，將真實需求轉化為可落地、具備精準邊界的系統架構，並運用 AI 工具鏈加速端到端交付。
            </p>
          </div>

          {/* Shipped Product Milestones */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#292B2F] font-bold mb-2">
              Shipped Product Decisions & Impact
            </h4>
            <div className="space-y-3">
              <div className="border-l-2 border-[#DDB84F] pl-3">
                <div className="font-bold text-[#292B2F]">
                  01. Manufacturing Work Management (現場工作看板)
                </div>
                <div className="text-xs text-[#484A4F]">
                  Reframe: 原本規劃複雜 AI ERP/MES 整合，經現場訪談後重構為「零負擔」觸控看板。目前已進入首家製造業客戶實際落地交付階段。
                </div>
              </div>

              <div className="border-l-2 border-[#DDB84F] pl-3">
                <div className="font-bold text-[#292B2F]">
                  02. Enterprise Text2SQL (嚴格領域限定 AI 產品)
                </div>
                <div className="text-xs text-[#484A4F]">
                  Reliability: 透過限制知識領域與明確邊界防禦幻覺，完成 5 大領域約 75 個 Benchmark 評估案例，達成 100% 確定性拒絕非授權查詢。
                </div>
              </div>

              <div className="border-l-2 border-[#DDB84F] pl-3">
                <div className="font-bold text-[#292B2F]">
                  03. Weekly Industry Intelligence (工作流 AI 萃取管線)
                </div>
                <div className="text-xs text-[#484A4F]">
                  Viability: 鎖定 7 天滾動窗口與白名單來源，將每週高昂的人工分析時間大幅縮短為 10 分鐘自動化可審計摘要，獲得 20+ 家媒體與展覽報導。
                </div>
              </div>
            </div>
          </div>

          {/* Technical DNA */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#292B2F] font-bold mb-2">
              Technical Heritage & Methods
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#F7F4EA] p-3 rounded-lg border border-[#E7E3D9]">
                <div className="font-bold text-[#292B2F] mb-1">Architecture & Data</div>
                <div>SQL Modeling, Schema Design, Data Pipelines, API Contracts, State Machines.</div>
              </div>
              <div className="bg-[#F7F4EA] p-3 rounded-lg border border-[#E7E3D9]">
                <div className="font-bold text-[#292B2F] mb-1">Product Leadership</div>
                <div>Problem Framing, User Research, Boundary Definition, Cross-functional Bridge.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2 border-t border-[#E7E3D9]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] font-medium text-xs cursor-pointer"
          >
            關閉預覽 (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
