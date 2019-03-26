import { Occurences } from './../data-type/analyze-pattern-interface';
import { ConfigLoader } from './../config/config-loader';
import { AnalyzePattern } from '../data-type/analyze-pattern-interface';
import { Client } from 'elasticsearch';
import Logger from '../utils/logger';
import { IterationStatistics } from '../data-type/iteration-statistics-interface';
import { DataAccessLayer } from './data-access-layer-interface';


export class ElasticSearch implements DataAccessLayer {
    private client: Client;

    constructor(
        private logger: Logger,
        private configLoader: ConfigLoader
    ) {
        this.client = new Client({
            host: this.configLoader.getElasticSearch().host,
            log: 'error'
        });
    }

    diff(arr1 : any[], arr2 : any[]) {
        return arr1.filter(function(i) {return arr2.indexOf(i) < 0;});
    }

    async update(previousIteration : IterationStatistics, currentIteration : IterationStatistics)  {
        if (previousIteration.analyzedPatterns) {
            console.log("previous")
            console.log(previousIteration.analyzedPatterns['$scope'].occurrences);
        }
        console.log("current")
        console.log(currentIteration.analyzedPatterns['$scope'].occurrences);
        let indexableResult = this.convertPatternsBySearchCategory(currentIteration.analyzedPatterns);
        try {
            await this.client.index({
                index: this.configLoader.getElasticSearch().index,
                type: this.configLoader.getElasticSearch().type,
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
        Object.entries(analyzedPatterns).forEach(analyzedValue => {
            if (!indexableResult[analyzedValue[1].searchCategory]) {
                indexableResult[analyzedValue[1].searchCategory] = [];
            }
            indexableResult[analyzedValue[1].searchCategory].push({
                [analyzedValue[0]]: analyzedValue[1].occurrences
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