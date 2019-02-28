import { SearchCategory } from "./search-category-enum";

export interface SearchPattern {
    pattern: string
    displayName: string,
    searchCategory: SearchCategory
}