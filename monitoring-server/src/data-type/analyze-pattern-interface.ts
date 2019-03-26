import { SearchCategory } from "./search-category-enum";

export interface AnalyzePattern {
    occurrences: Occurences,
    searchCategory: SearchCategory
}

export interface Occurences {
    current: number;
    previous: number;
    addedInFile: string;
    removedFromFile: string;
}
