import React, { useState } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { SharkLogo } from './SharkLogo';

interface HeaderProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EA]/92 backdrop-blur-md border-b border-[#E7E3D9] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Go to homepage">
          <div className="w-9 h-9 rounded-full overflow-hidden shadow-xs border border-[#DDB84F]/40 transition-transform group-hover:scale-105">
            <SharkLogo size="100%" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono-code font-bold text-sm tracking-wider text-[#292B2F]">
                ARCH // APEX
              </span>
              <span className="text-[10px] uppercase font-mono-code px-1.5 py-0.5 rounded bg-[#F3E7B8] text-[#292B2F] font-semibold">
                PM
              </span>
            </div>
            <span className="text-xs text-[#484A4F] font-medium tracking-tight">
              Product Manager · Systems Thinker
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#484A4F]">
          <a
            href="#work"
            className="hover:text-[#292B2F] transition-colors hover:underline underline-offset-4"
          >
            Work
          </a>
          <a
            href="#thinking"
            className="hover:text-[#292B2F] transition-colors hover:underline underline-offset-4"
          >
            Thinking
          </a>
          <a
            href="#about"
            className="hover:text-[#292B2F] transition-colors hover:underline underline-offset-4"
          >
            About
          </a>
          <button
            onClick={onOpenContactModal}
            className="hover:text-[#292B2F] transition-colors hover:underline underline-offset-4 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] font-medium text-sm transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenCvModal}
            className="sm:hidden flex items-center p-2 rounded-lg bg-[#DDB84F] text-[#292B2F] text-xs font-medium"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#292B2F] hover:bg-[#E7E3D9]/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7E3D9] bg-[#FFFEF9] px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#292B2F]">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DDB84F] transition-colors"
            >
              Work & Cases
            </a>
            <a
              href="#thinking"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DDB84F] transition-colors"
            >
              Product Thinking
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DDB84F] transition-colors"
            >
              About Me
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="text-left py-1 hover:text-[#DDB84F] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
          <div className="pt-3 border-t border-[#E7E3D9]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#DDB84F] text-[#292B2F] font-semibold text-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
