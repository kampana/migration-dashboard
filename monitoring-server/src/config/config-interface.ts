import { SearchPattern } from '../data-type/search-pattern-interface';
import { Git } from './git-interface';
import { ElasticSearch } from './elastic-search-inteface';

export interface Config {
    git: Git;
    dataAccessLayer : {
        elasticSearch: ElasticSearch
    }
    searchPatterns: SearchPattern[];
}