import { IterationStatistics } from "../data-type/iteration-statistics-interface";
import { AnalyzePattern } from "../data-type/analyze-pattern-interface";

export interface DataAccessLayer {

    update(previousIteration : IterationStatistics, currentIteration : IterationStatistics, analyzedPatterns: { any : AnalyzePattern}) : void; 
}