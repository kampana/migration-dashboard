import { AnalyzePattern } from './../data-type/analyze-pattern-interface';
import { Client } from 'elasticsearch';
import Logger from './logger';
import { IterationStatistics } from '../data-type/iteration-statistics-interface';


export class DataAccessLayer {
    private client: Client;

    constructor(
        private logger: Logger
    ) {
        this.client = new Client({
            host: 'http://elsearchtlv02:9200',
            log: 'error'
        });
    }

    diff(arr1 : any[], arr2 : any[]) {
        return arr1.filter(function(i) {return arr2.indexOf(i) < 0;});
    }

    async update(previousIteration : IterationStatistics, currentIteration : IterationStatistics, analyzedPatterns: { any : AnalyzePattern} ) {
        let indexableResult = this.convertPatternsBySearchCategory(analyzedPatterns);
        try {
            await this.client.index({
                index: 'migration-dashboard',
                type: 'js',
                body: {
                    numberOfJsFiles: currentIteration.jsFiles.length,
                    jsFilesRemoved: this.getFilesRemoved(previousIteration, currentIteration),
                    jsFilesAdded: this.getFilesAdded(previousIteration, currentIteration),
                    timestamp: new Date(),
                    analyzeResult: indexableResult
                }
            });
        } catch(e) {
            this.logger.error(e);
        }
        this.logger.info("Elastic Search indexed");
    }

    private convertPatternsBySearchCategory(analyzedPatterns: { any: AnalyzePattern; }) {
        let indexableResult = {};
        Object.entries(analyzedPatterns).map(analyzedValue => {
            if (!indexableResult[analyzedValue[1].searchCategory]) {
                indexableResult[analyzedValue[1].searchCategory] = [];
            }
            indexableResult[analyzedValue[1].searchCategory].push({
                [analyzedValue[0]]: analyzedValue[1].numOfOccurrences
            });
        });
        return indexableResult;
    }

    private getFilesAdded(previousIteration: IterationStatistics, currentIteration: IterationStatistics): any[] {
        return previousIteration.jsFiles.length !== 0 ? this.diff(currentIteration.jsFiles, previousIteration.jsFiles) : undefined;
    }

    private getFilesRemoved(previousIteration: IterationStatistics, currentIteration: IterationStatistics): any[] {
        return previousIteration.jsFiles.length !== 0 ? this.diff(previousIteration.jsFiles, currentIteration.jsFiles) : undefined;
    }
}