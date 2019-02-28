import { Client } from 'elasticsearch';
import Logger from './logger';
import { IterationStatistics } from './data-type/iteration-statistics-interface';


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

    async update(previousIteration : IterationStatistics, currentIteration : IterationStatistics, analyzedPatterns: {}) {
        try {
            await this.client.index({
                index: 'migration-dashboard',
                type: 'js',
                body: {
                    numberOfJsFiles: currentIteration.jsFiles.length,
                    jsFilesRemoved: this.getFilesRemoved(previousIteration, currentIteration),
                    jsFilesAdded: this.getFilesAdded(previousIteration, currentIteration),
                    analyzedPatterns: analyzedPatterns,
                    timestamp: new Date()
                }
            });
        } catch(e) {
            this.logger.error(e);
        }
        this.logger.info("Elastic Search indexed");
    }

    private getFilesAdded(previousIteration: IterationStatistics, currentIteration: IterationStatistics): any[] {
        return previousIteration.jsFiles.length !== 0 ? this.diff(currentIteration.jsFiles, previousIteration.jsFiles) : undefined;
    }

    private getFilesRemoved(previousIteration: IterationStatistics, currentIteration: IterationStatistics): any[] {
        return previousIteration.jsFiles.length !== 0 ? this.diff(previousIteration.jsFiles, currentIteration.jsFiles) : undefined;
    }
}