export enum DiagramType {
  MindMap = 'MindMap',
  Architecture = 'Architecture',
  Workflow = 'Workflow',
  Timeline = 'Timeline',
  UML = 'UML',
  TechStack = 'TechStack',
  ProblemSolution = 'ProblemSolution'
}

export interface TimelineItem {
  id: string;
  task: string;
  start: string;
  end: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
}

export interface NodeData {
  id: string;
  label: string;
  type: 'root' | 'main' | 'sub' | 'process' | 'database' | 'actor';
  x: number;
  y: number;
  width?: number;
  height?: number;
  description?: string;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}