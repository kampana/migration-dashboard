import { Config } from './config/config-interface';
import { FileAnalyzer } from './utils/file-analyzer';
import * as simplegit from 'simple-git/promise';
import Logger from './utils/logger';
import { ConfigLoader } from './config/config-loader';

//TODO URI git hooks
export class Main {
    private logger: Logger;
    private git: simplegit.SimpleGit;
    private fileAnalyzer: FileAnalyzer;
    private configLoader: ConfigLoader;

    constructor() {
        this.configLoader = new ConfigLoader();
        this.git = simplegit(this.configLoader.getGit().path);
        this.logger = new Logger('Main');
        this.fileAnalyzer = new FileAnalyzer(this.logger, this.configLoader);
        /*this.git.status().then((status: StatusResult) => {
            this.logger.info(status);
        })*/
    }

    run() {
        this.logger.info("Init");
        this.fileAnalyzer.fileAnaylize();
        this.logger.info("Sleeping until first interval")
        setInterval(() => {
            this.pull();
            this.fileAnalyzer.fileAnaylize();
            this.logger.info("Sleeping until next interval")
        //}, 10 * 60 * 1000);
        }, 10 * 1000);
    }

    async pull() {
        try {
            let gitBranch = this.configLoader.getGit().branch;
            this.logger.info("Pulling from " + gitBranch);
            let pullSummary = await this.git.pull('origin', gitBranch);
            this.logger.info(pullSummary);
        }
        catch (e) {
            this.logger.error("Failed while trying to pull\n" + e);
        }
    }

}

let main = new Main();
main.run();

