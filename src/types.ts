export type Language = 'en' | 'zh';

export interface PaintingStep {
  id: string;
  stepNumber: number;
  title: {
    en: string;
    zh: string;
  };
  phase: {
    en: string;
    zh: string;
  };
  summary: {
    en: string;
    zh: string;
  };
  goal: {
    en: string;
    zh: string;
  };
  materialsNeeded: {
    en: string[];
    zh: string[];
  };
  ratioFormula?: {
    en: string;
    zh: string;
  };
  dryingTime: {
    en: string;
    zh: string;
  };
  instructions: {
    en: string[];
    zh: string[];
  };
  expertTip: {
    en: string;
    zh: string;
  };
  beginnerTrap: {
    en: string;
    zh: string;
  };
}

export type BrushShapeId = 
  | 'filbert'
  | 'flat'
  | 'bright'
  | 'round'
  | 'fan'
  | 'mop'
  | 'rigger'
  | 'knife';

export interface BrushItem {
  id: BrushShapeId;
  name: {
    en: string;
    zh: string;
  };
  alias: {
    en: string;
    zh: string;
  };
  iconShape: string;
  bestFor: {
    en: string;
    zh: string;
  };
  characteristics: {
    en: string;
    zh: string;
  };
  recommendedSize: {
    en: string;
    zh: string;
  };
  inStarterKit: boolean;
  strokeDescription: {
    en: string;
    zh: string;
  };
  proTips: {
    en: string[];
    zh: string[];
  };
}

export interface BristleMaterial {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  stiffness: {
    en: string;
    zh: string;
  };
  bestPaintViscosity: {
    en: string;
    zh: string;
  };
  durability: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
}
