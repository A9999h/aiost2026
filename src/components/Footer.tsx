import React from 'react';
import { SharkLogo } from './SharkLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#F7F4EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#DDB84F]/40">
            <SharkLogo size="100%" />
          </div>
          <div className="text-xs font-mono-code text-[#484A4F]">
            <span className="font-bold text-[#292B2F]">ARCH // APEX</span>
            <span className="mx-2 text-[#E7E3D9]">·</span>
            <span>Built with AI. Reviewed by a human. 🦈</span>
            <span className="mx-2 text-[#E7E3D9]">·</span>
            <span>© 2026 Systems & Products</span>
          </div>
        </div>

        {/* Right Side Editorial Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-[#484A4F]">
          <a href="#work" className="hover:text-[#292B2F] transition-colors">
            Architecture Spec
          </a>
          <a href="#thinking" className="hover:text-[#292B2F] transition-colors">
            Decision Framework
          </a>
          <a href="#about" className="hover:text-[#292B2F] transition-colors">
            Source Manifest
          </a>
          <span className="text-[#DDB84F] font-semibold">Datashark PM</span>
        </div>
      </div>
    </footer>
  );
};
