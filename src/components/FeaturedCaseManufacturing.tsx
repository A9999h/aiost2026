import React, { useState } from 'react';
import {
  ArrowRight,
  Factory,
  Clock,
  User,
  Wrench,
  CheckCircle2,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { KanbanItem } from '../types';

export const FeaturedCaseManufacturing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'line-a' | 'line-b'>('line-a');
  const [selectedTask, setSelectedTask] = useState<KanbanItem | null>(null);

  // Initial tasks for the realistic shopfloor kanban
  const [tasks, setTasks] = useState<KanbanItem[]>([
    {
      id: 't-1',
      code: '#MO-8921',
      title: '精密鋁合金本體加工',
      machine: 'CNC-04',
      stage: 'to-process',
      timeEstimate: '3.5 hrs',
      notes: '圖面版號 Rev.C，需二次表面鈍化處理',
      verified: true,
    },
    {
      id: 't-2',
      code: '#MO-8924',
      title: '機件高精度削切',
      machine: 'LATHE-02',
      stage: 'to-process',
      timeEstimate: '1.2 hrs',
      notes: '公差要求 ±0.01mm，請使用專用量具',
      verified: true,
    },
    {
      id: 't-3',
      code: '#MO-8912',
      title: '車光高速連動螺桿總成',
      machine: '5-AXIS-01',
      stage: 'in-progress',
      operator: '志豪 (Shift Lead)',
      progress: 78,
      timeEstimate: '剩餘 45 分鐘',
      notes: '第一件首檢已於 09:30 通過 QC 檢驗',
      verified: true,
    },
    {
      id: 't-4',
      code: '#MO-8903',
      title: '治具成型模具修整',
      machine: 'CNC-01',
      stage: 'completed',
      operator: '建宏',
      progress: 100,
      timeEstimate: '已完工',
      notes: 'PASS | QA 檢驗合格，已送入待組裝庫存區',
      verified: true,
    },
    {
      id: 't-5',
      code: '#MO-8898',
      title: '不鏽鋼密封法蘭盤精磨',
      machine: 'GRIND-03',
      stage: 'completed',
      operator: '文祥',
      progress: 100,
      timeEstimate: '已完工',
      notes: '檢測報告已上傳，批號 #LOT-202609',
      verified: true,
    },
  ]);

  const toProcessList = tasks.filter((t) => t.stage === 'to-process');
  const inProgressList = tasks.filter((t) => t.stage === 'in-progress');
  const completedList = tasks.filter((t) => t.stage === 'completed');

  return (
    <section id="case-manufacturing" className="py-24 border-b border-[#E7E3D9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Case Eyebrow & Main Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono-code text-[#484A4F] uppercase tracking-wider font-semibold">
              FEATURED CASE · AI AS THE BUILDER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#292B2F] tracking-tight">
              Manufacturing Work Management
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E7B8] border border-[#DDB84F]/40 text-xs font-mono-code font-bold text-[#292B2F] shadow-2xs self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#292B2F] inline-block animate-pulse"></span>
            <span>Status: First customer deployment in progress</span>
          </div>
        </div>

        {/* The Epiphany Callout Box */}
        <div className="bg-[#FFFEF9] border-l-4 border-[#DDB84F] border-y border-r border-[#E7E3D9] p-6 sm:p-8 rounded-r-2xl mb-16 shadow-2xs">
          <p className="font-serif-quote italic text-xl sm:text-2xl text-[#292B2F] leading-snug">
            “We started with an AI-powered ERP. The right product didn't need AI at runtime.”
          </p>
        </div>

        {/* PHASE 01: BEFORE */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-code text-xs font-bold text-[#DDB84F]">PHASE 01</span>
            <span className="font-mono-code text-xs text-[#484A4F] uppercase tracking-wider">
              BEFORE — THE COMPLICATED ENTANGLEMENT
            </span>
            <div className="h-px bg-[#E7E3D9] flex-1"></div>
          </div>

          <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] p-8 sm:p-10 text-center space-y-8">
            <div className="text-xs font-mono-code text-[#484A4F] uppercase tracking-widest">
              The original idea
            </div>

            {/* Cluttered Tech Architecture Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <span className="px-3.5 py-2 rounded-lg bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#484A4F] line-through opacity-70">
                AI Agent
              </span>
              <span className="text-[#484A4F] text-xs font-mono-code">＋</span>
              <span className="px-3.5 py-2 rounded-lg bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#484A4F]">
                Legacy ERP
              </span>
              <span className="text-[#484A4F] text-xs font-mono-code">＋</span>
              <span className="px-3.5 py-2 rounded-lg bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#484A4F]">
                MES Complex
              </span>
              <span className="text-[#484A4F] text-xs font-mono-code">＋</span>
              <span className="px-3.5 py-2 rounded-lg bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#484A4F] line-through opacity-70">
                LINE Bot
              </span>
              <span className="text-[#484A4F] text-xs font-mono-code">＋</span>
              <span className="px-3.5 py-2 rounded-lg bg-[#F7F4EA] border border-[#E7E3D9] text-xs font-mono-code text-[#484A4F]">
                Machine IoT Data
              </span>
            </div>

            <div className="py-2">
              <span className="inline-block text-[#DDB84F] text-xl">↓</span>
            </div>

            {/* The Big Quote */}
            <div className="max-w-3xl mx-auto py-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292B2F] tracking-tight leading-tight">
                “But the users didn't want a smarter ERP.
                <br />
                <span className="text-[#DDB84F]">They wanted less ERP.</span>”
              </p>
            </div>
          </div>
        </div>

        {/* PHASE 02: WHAT I LEARNED */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-code text-xs font-bold text-[#DDB84F]">PHASE 02</span>
            <span className="font-mono-code text-xs text-[#484A4F] uppercase tracking-wider">
              WHAT I LEARNED — USER REALITY IN PRODUCTION
            </span>
            <div className="h-px bg-[#E7E3D9] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Role 1 */}
            <div className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-6 flex flex-col justify-between space-y-4 hover:border-[#DDB84F]/60 transition-colors">
              <div>
                <span className="text-[11px] font-mono-code text-[#484A4F] uppercase tracking-wider block mb-2">
                  ROLE: ERP USER
                </span>
                <p className="font-bold text-base text-[#292B2F]">
                  “Don't enter twice.”
                </p>
                <p className="text-xs text-[#484A4F] mt-2 leading-relaxed">
                  討厭重複在兩個系統中鍵入相同工單資料，需要零摩擦的一鍵匯入。
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E3D9]">
                <span className="text-xs font-mono-code text-[#DDB84F] font-bold flex items-center gap-1.5">
                  → Direct Import
                </span>
              </div>
            </div>

            {/* Role 2 */}
            <div className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-6 flex flex-col justify-between space-y-4 hover:border-[#DDB84F]/60 transition-colors">
              <div>
                <span className="text-[11px] font-mono-code text-[#484A4F] uppercase tracking-wider block mb-2">
                  ROLE: FACTORY MANAGER
                </span>
                <p className="font-bold text-base text-[#292B2F]">
                  “Plan without typing.”
                </p>
                <p className="text-xs text-[#484A4F] mt-2 leading-relaxed">
                  排程時間寶貴，不需要繁雜打字，只需拖拉派工與直覺調整工位順序。
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E3D9]">
                <span className="text-xs font-mono-code text-[#DDB84F] font-bold flex items-center gap-1.5">
                  → Schedule & Assign
                </span>
              </div>
            </div>

            {/* Role 3 */}
            <div className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-6 flex flex-col justify-between space-y-4 hover:border-[#DDB84F]/60 transition-colors">
              <div>
                <span className="text-[11px] font-mono-code text-[#484A4F] uppercase tracking-wider block mb-2">
                  ROLE: OPERATOR
                </span>
                <p className="font-bold text-base text-[#292B2F]">
                  “Don't make me type.”
                </p>
                <p className="text-xs text-[#484A4F] mt-2 leading-relaxed">
                  在機台前雙手戴著手套，只想點擊大按鈕、輸入良品與不良數字就收工。
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E3D9]">
                <span className="text-xs font-mono-code text-[#DDB84F] font-bold flex items-center gap-1.5">
                  → Touch & Numbers
                </span>
              </div>
            </div>

            {/* Role 4 */}
            <div className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-6 flex flex-col justify-between space-y-4 hover:border-[#DDB84F]/60 transition-colors">
              <div>
                <span className="text-[11px] font-mono-code text-[#484A4F] uppercase tracking-wider block mb-2">
                  ROLE: OWNER
                </span>
                <p className="font-bold text-base text-[#292B2F]">
                  “Tell me what's happening.”
                </p>
                <p className="text-xs text-[#484A4F] mt-2 leading-relaxed">
                  不在廠區也能即時知道各線生產稼動狀態與瓶頸，不需等待下班彙整報表。
                </p>
              </div>
              <div className="pt-3 border-t border-[#E7E3D9]">
                <span className="text-xs font-mono-code text-[#DDB84F] font-bold flex items-center gap-1.5">
                  → Real-time Visibility
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 03: WHAT WE BUILT — REAL KANBAN SYSTEM INTERFACE */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-xs font-bold text-[#DDB84F]">PHASE 03</span>
            <span className="font-mono-code text-xs text-[#484A4F] uppercase tracking-wider">
              WHAT WE BUILT — 現場工作看板 (JINBAO KANBAN)
            </span>
            <div className="h-px bg-[#E7E3D9] flex-1"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-code bg-[#FFFEF9] border border-[#E7E3D9] px-2.5 py-1 rounded text-[#292B2F]">
                核心原則：做什麼、誰做、哪台設備做
              </span>
            </div>
            <div className="text-xs font-mono-code text-[#484A4F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
              <span>Synchronized: 12s ago</span>
            </div>
          </div>

          {/* Interactive Kanban Frame */}
          <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] shadow-sm overflow-hidden">
            {/* Top Toolbar */}
            <div className="bg-[#292B2F] text-[#FFFEF9] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#DDB84F]" />
                  <span className="font-mono-code font-bold text-xs tracking-wider">
                    CNC MACHINING LINE A
                  </span>
                </div>
                <span className="text-[#484A4F]">|</span>
                <span className="font-mono-code text-xs text-[#E7E3D9]">
                  SHIFT: DAY 01 (08:00 - 17:00)
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono-code">
                <span className="bg-[#3A3E47] px-2.5 py-1 rounded text-[#E7E3D9]">
                  稼動中機台: 4/4
                </span>
                <span className="bg-[#DDB84F] text-[#292B2F] px-2.5 py-1 rounded font-bold">
                  今日達成率: 92%
                </span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FAF8F2]">
              {/* Column 1: 待加工 */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E3D9]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DDB84F]"></span>
                    <span className="font-bold text-sm text-[#292B2F]">待加工 (To Process)</span>
                  </div>
                  <span className="text-[11px] font-mono-code bg-[#FFFEF9] border border-[#E7E3D9] px-2 py-0.5 rounded text-[#484A4F]">
                    COUNT: {toProcessList.length.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-3">
                  {toProcessList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedTask(item)}
                      className="bg-[#FFFEF9] rounded-xl border border-[#E7E3D9] p-4 hover:border-[#DDB84F] transition-all hover:shadow-xs cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono-code font-bold text-[#292B2F]">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-mono-code bg-[#F7F4EA] border border-[#E7E3D9] px-2 py-0.5 rounded text-[#484A4F]">
                          {item.machine}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#292B2F] mb-2 group-hover:text-[#DDB84F] transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-[#484A4F] pt-2 border-t border-[#E7E3D9]/60 font-mono-code">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.timeEstimate}
                        </span>
                        <span className="text-[10px] text-[#484A4F] group-hover:translate-x-0.5 transition-transform flex items-center">
                          Detail <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: 加工中 */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E3D9]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="font-bold text-sm text-[#292B2F]">加工中 (In Progress)</span>
                  </div>
                  <span className="text-[11px] font-mono-code bg-[#FFFEF9] border border-[#E7E3D9] px-2 py-0.5 rounded text-[#484A4F]">
                    ACTIVE: {inProgressList.length.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-3">
                  {inProgressList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedTask(item)}
                      className="bg-[#FFFEF9] rounded-xl border-2 border-[#DDB84F] p-4 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono-code font-bold text-[#292B2F]">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-mono-code bg-[#F3E7B8] text-[#292B2F] font-bold px-2 py-0.5 rounded">
                          {item.machine}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#292B2F] mb-3">
                        {item.title}
                      </h4>

                      {/* Progress bar */}
                      <div className="space-y-1 mb-3">
                        <div className="flex justify-between text-xs font-mono-code">
                          <span className="text-[#484A4F]">進度</span>
                          <span className="font-bold text-[#292B2F]">{item.progress}% 完工</span>
                        </div>
                        <div className="w-full bg-[#E7E3D9] h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#DDB84F] h-full rounded-full transition-all duration-500"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#484A4F] pt-2 border-t border-[#E7E3D9]/60 font-mono-code">
                        <span className="flex items-center gap-1 font-medium text-[#292B2F]">
                          <User className="w-3 h-3 text-[#DDB84F]" />
                          {item.operator}
                        </span>
                        <span>{item.timeEstimate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: 完工 */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E3D9]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="font-bold text-sm text-[#292B2F]">完工 (Completed)</span>
                  </div>
                  <span className="text-[11px] font-mono-code bg-[#FFFEF9] border border-[#E7E3D9] px-2 py-0.5 rounded text-[#484A4F]">
                    TODAY: 14
                  </span>
                </div>

                <div className="space-y-3">
                  {completedList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedTask(item)}
                      className="bg-[#FFFEF9]/80 rounded-xl border border-[#E7E3D9] p-4 hover:border-[#DDB84F] transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono-code font-bold text-[#484A4F]">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-mono-code bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                          PASS | QA 合格
                        </span>
                      </div>
                      <h4 className="font-medium text-sm text-[#484A4F] mb-2 line-through decoration-[#484A4F]/40">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-[#484A4F] pt-2 border-t border-[#E7E3D9]/60 font-mono-code">
                        <span className="flex items-center gap-1 text-emerald-700">
                          <CheckCircle2 className="w-3 h-3" />
                          已入庫
                        </span>
                        <span>{item.operator}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Task modal popover if clicked */}
          {selectedTask && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
              <div className="bg-[#FFFEF9] rounded-2xl border border-[#E7E3D9] max-w-md w-full p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#E7E3D9] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code font-bold text-sm text-[#DDB84F]">
                      {selectedTask.code}
                    </span>
                    <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-[#F7F4EA] text-[#484A4F]">
                      {selectedTask.machine}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTask(null)}
                    className="text-[#484A4F] hover:text-[#292B2F] font-mono-code text-sm px-2 py-1 rounded cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#292B2F]">
                    {selectedTask.title}
                  </h3>
                  <p className="text-xs text-[#484A4F] mt-1 font-mono-code">
                    工單狀態: {selectedTask.stage.toUpperCase()}
                  </p>
                </div>

                <div className="bg-[#F7F4EA] rounded-xl p-3.5 border border-[#E7E3D9] text-xs space-y-1.5">
                  <div className="font-bold text-[#292B2F]">製程備註與指引：</div>
                  <p className="text-[#484A4F] leading-relaxed">{selectedTask.notes}</p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedTask(null)}
                    className="px-4 py-2 rounded-xl bg-[#DDB84F] text-[#292B2F] font-medium text-xs cursor-pointer hover:bg-[#D0AA3F]"
                  >
                    關閉工單細節
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
