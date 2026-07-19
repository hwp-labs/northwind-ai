export interface AnalyticsDto {
  episodes?: {
    total?: number;
    designSession?: number;
    firesideChat?: number;
    caseStudy?: number;
    softwareEngineering?: number;
    machineLearning?: number;
  };
  guests?: {
    total?: number;
    male?: number;
    maleRate?: number;
    female?: number;
    femaleRate?: number;
    location?: Record<string, number>;
  };
  listeners?: {
    total?: number;
    average?: number;
    averageRate?: number;
  };
}
