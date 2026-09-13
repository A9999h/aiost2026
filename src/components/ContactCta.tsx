import React from 'react';
import { Mail, Linkedin, Download, ArrowUpRight } from 'lucide-react';

interface ContactCtaProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenCvModal, onOpenContactModal }) => {
  return (
    <section id="contact" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div>
          <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold block mb-3">
            LET'S BUILD DELIBERATE SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292B2F] tracking-tight">
            Have a messy problem?
            <br />
            <span className="text-[#DDB84F]">Let's make it clear.</span>
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[#484A4F] max-w-2xl mx-auto leading-relaxed">
          無論是複雜的企業資料架構、AI 產品邊界定位，或是全新系統的原型打造與落地驗證，歡迎隨時交流。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] font-semibold text-sm sm:text-base transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>聯絡交流 / Send an Enquiry</span>
          </button>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFEF9] hover:bg-[#F3E7B8]/40 border border-[#E7E3D9] text-[#292B2F] font-medium text-sm sm:text-base transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-[#484A4F]" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#484A4F]" />
          </a>

          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFEF9] hover:bg-[#F3E7B8]/40 border border-[#E7E3D9] text-[#292B2F] font-medium text-sm sm:text-base transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#484A4F]" />
            <span>下載履歷 (Download CV)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
