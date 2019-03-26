import { AnalyzePattern } from "./analyze-pattern-interface";

export interface IterationStatistics {
    jsFiles: string[];
    analyzedPatterns :  { any : AnalyzePattern};
}