
export interface ComparisonData {
  method: string;
  time: number;
  cost: number;
  freedom: number;
}

export interface ConcernSolution {
  concern: string;
  solution: string;
  icon: string;
}

export interface SafetyCheck {
  title: string;
  items: string[];
}
