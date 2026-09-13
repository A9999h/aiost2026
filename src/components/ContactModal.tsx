import React, { useState } from 'react';
import { X, Send, Mail, CheckCircle2, Copy } from 'lucide-react';
import { SharkLogo } from './SharkLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with prepopulated body
    const subject = encodeURIComponent(`Product & System Inquiry from ${name || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hello Shao,\n\nMy Name: ${name}\nMy Email: ${email}\n\nProject / Problem Description:\n${message}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:shaoci.jheng208@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleCopyDirectEmail = () => {
    navigator.clipboard.writeText('shaoci.jheng208@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E7E3D9] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DDB84F]">
              <SharkLogo size="100%" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#292B2F]">
                Let's Talk Product & Systems
              </h3>
              <p className="text-xs font-mono-code text-[#484A4F]">
                Direct Line: shaoci.jheng208@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#F7F4EA] text-[#484A4F] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F3E7B8] text-[#292B2F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-[#292B2F]">訊息草稿已開啟</h4>
            <p className="text-xs text-[#484A4F] max-w-sm mx-auto leading-relaxed">
              系統已為您調用預設郵件客戶端發送至 <span className="font-mono-code font-bold">shaoci.jheng208@gmail.com</span>。若無彈出，可直接點擊下方按鈕複製信箱。
            </p>
            <div className="pt-2">
              <button
                onClick={handleCopyDirectEmail}
                className="px-4 py-2 rounded-xl bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#292B2F] hover:bg-[#E7E3D9] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedEmail ? '已複製信箱！' : '複製 shaoci.jheng208@gmail.com'}</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-mono-code text-[#484A4F] uppercase tracking-wider mb-1 font-semibold">
                Your Name / 稱呼
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如：Alex Chen / 某科技創辦人"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EA] border border-[#E7E3D9] text-[#292B2F] placeholder-[#484A4F]/50 focus:outline-none focus:border-[#DDB84F]"
              />
            </div>

            <div>
              <label className="block font-mono-code text-[#484A4F] uppercase tracking-wider mb-1 font-semibold">
                Your Email / 聯絡信箱
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EA] border border-[#E7E3D9] text-[#292B2F] placeholder-[#484A4F]/50 focus:outline-none focus:border-[#DDB84F]"
              />
            </div>

            <div>
              <label className="block font-mono-code text-[#484A4F] uppercase tracking-wider mb-1 font-semibold">
                Problem or Opportunity / 想探討的問題或合作
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="簡述目前遇到的系統難題、AI 邊界定義需求，或是團隊的 PM 合作機會..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EA] border border-[#E7E3D9] text-[#292B2F] placeholder-[#484A4F]/50 focus:outline-none focus:border-[#DDB84F]"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E7E3D9]">
              <button
                type="button"
                onClick={handleCopyDirectEmail}
                className="text-xs font-mono-code text-[#484A4F] hover:text-[#292B2F] flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedEmail ? '已複製信箱！' : '複製信箱地址'}</span>
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#DDB84F] hover:bg-[#D0AA3F] text-[#292B2F] font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>發送訊息 / Send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
