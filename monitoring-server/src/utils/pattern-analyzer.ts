import Logger from "./logger";
import { SearchPattern } from "../data-type/search-pattern-interface";
import { readFile } from "fs";
import { AnalyzePattern } from "../data-type/analyze-pattern-interface";

export class PatternAnalyzer {
 
    constructor(
        private logger: Logger
    ) {
        
    }
    
    async analyzePatterns(fileList: string[], patternsToSearch: SearchPattern[]): Promise<any> {
        let promise: Promise<{ any : AnalyzePattern}> = new Promise((resolve, reject) => {
            let analyzedPatterns : any = { };
            this.logger.info("Analyzing patterns");
            let codeFileList = fileList.filter(fileName => fileName.endsWith(".js") || fileName.endsWith(".ts"));
            let allReadPromises = codeFileList.map((file) => this.readFilePromise(file, this.findPatternInData, patternsToSearch, analyzedPatterns));
            Promise.all(allReadPromises).then(() => {
                this.logger.info("Analyzed patterns:");
                this.logger.info(analyzedPatterns);
                resolve(analyzedPatterns);
            })
        });
        return promise;
    }

    findPatternInData(fileData, patternsToSearch : SearchPattern[], analyzedPatterns) {
        patternsToSearch.forEach(patternToSearch => {
            let patternExists = fileData.includes(patternToSearch.pattern);
            if (patternExists) {
                if (analyzedPatterns[patternToSearch.displayName]) {
                    let existingAnalyzedPattern: AnalyzePattern = analyzedPatterns[patternToSearch.displayName];
                    existingAnalyzedPattern.numOfOccurrences++;
                } else {
                    let newAnalyzedPattern : AnalyzePattern =  { 
                        numOfOccurrences : 1,
                        searchCategory: patternToSearch.searchCategory
                    }
                    analyzedPatterns[patternToSearch.displayName] = newAnalyzedPattern;
                }
            }
        });
    }


    readFilePromise(fileName: string, callbackHandle, patternsToSearch: SearchPattern[], analyzedPatterns: {}): Promise<string> {
        let promise: Promise<string> = new Promise((resolve, reject) => {
            readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    callbackHandle(data, patternsToSearch, analyzedPatterns)
                    resolve();
                }
            });
        });
        return promise;
    }


}