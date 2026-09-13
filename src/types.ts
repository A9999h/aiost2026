export interface KanbanItem {
  id: string;
  code: string;
  title: string;
  machine: string;
  stage: 'to-process' | 'in-progress' | 'completed';
  operator?: string;
  progress?: number;
  timeEstimate?: string;
  notes?: string;
  verified?: boolean;
}

export interface MetricCardData {
  id: string;
  tag: string;
  value: string;
  label: string;
  detail: string;
}

export interface PrincipleItem {
  id: string;
  step: string;
  category: string;
  title: string;
  quote: string;
  description: string;
}

export interface CareerPhase {
  id: string;
  phase: string;
  role: string;
  subBadge: string;
  description: string;
  isOpenToMeeting?: boolean;
}
