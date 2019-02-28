import { FileAnalyzer } from './utils/file-analyzer';
import * as simplegit from 'simple-git/promise';
import Logger from './utils/logger';

//TODO URI git hooks
export class Main {
    private logger: Logger;
    private git: simplegit.SimpleGit;
    readonly gitPath = 'c:\\work\\pmain';
    readonly gitBranch = 'master';
    private fileAnalyzer: FileAnalyzer;

    constructor() {
        this.git = simplegit(this.gitPath);
        this.logger = new Logger('Main');
        this.fileAnalyzer = new FileAnalyzer(this.logger, this.gitPath);
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
        }, 10 * 60 * 1000);
        //}, 10 * 1000);
    }

    async pull() {
        try {
            this.logger.info("Pulling from " + this.gitBranch);
            let pullSummary = await this.git.pull('origin', this.gitBranch);
            this.logger.info(pullSummary);
        }
        catch (e) {
            this.logger.error("Failed while trying to pull\n" + e);
        }
    }

}

let main = new Main();
main.run();

