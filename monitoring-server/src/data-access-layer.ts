import { Client } from 'elasticsearch';
import Logger from './logger';


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

    async update(jsFiles : string[], analyzedPatterns: {}) {
        try {
            await this.client.index({
                index: 'migration-dashboard',
                type: 'js',
                body: {
                    numberOfJsFiles: jsFiles.length,
                    analyzedPatterns: analyzedPatterns,
                    timestamp: new Date()
                }
            });
        } catch(e) {
            this.logger.error(e);
        }
        this.logger.info("Elastic Search indexed");
    }
}