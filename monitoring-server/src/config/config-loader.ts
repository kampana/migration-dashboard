import { SearchPattern } from './../data-type/search-pattern-interface';
import * as configJson from './config.json';
import { Config as ConfigInterface } from './config-interface.js';
import { SearchCategory } from '../data-type/search-category-enum';
import { Git } from './git-interface';
import { ElasticSearch } from './elastic-search-inteface';

export class ConfigLoader {
    config: ConfigInterface;

    constructor() {
        this.config = this.convertJsonToConfigObject(); 
    }

    getSearchPatterns() : SearchPattern[] {
        return this.config.searchPatterns;
    }

    getGit() : Git {
        return this.config.git;
    }

    getElasticSearch() : ElasticSearch {
        return this.config.dataAccessLayer.elasticSearch;
    }

    private convertJsonToConfigObject() {
       
        let configJsonImported = (<any>configJson); // its impossible to convert straight to the ConfigInterface, must be through <any>
        let configInterace = (<ConfigInterface>configJsonImported);
        return this.convertSearchCategory(configInterace);
    }

    private convertSearchCategory(configInterace: ConfigInterface) {
        configInterace.searchPatterns = configInterace.searchPatterns.map(searchPattern => {
            let convertedSearchPattern: SearchPattern = {
                pattern: searchPattern.pattern,
                displayName: searchPattern.displayName,
                searchCategory: SearchCategory[searchPattern.searchCategory]
            };
            return convertedSearchPattern;
        });
        return configInterace;
    }
}