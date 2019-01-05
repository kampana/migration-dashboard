import { FileLookup } from './file-lookup';
import * as simplegit from 'simple-git/promise';
import Logger from './logger';

export class Main {
    private logger: Logger;
    private fileLookup: FileLookup;
    private git: simplegit.SimpleGit;
    readonly gitPath = 'c:\\work\\pmain';
    readonly gitBranch = 'master';

    constructor() {
        this.logger = new Logger('Main');
        this.fileLookup = new FileLookup();
        this.git = simplegit(this.gitPath);
        /*git.status().then((status: StatusResult) => {
            logger.info(status);
        })*/
    }

    run() {
        this.logger.info("Init");
        this.checkJSfiles();
        this.pull();
    }

    async pull() {
        try {
            this.logger.info("Pulling from " + this.gitBranch);
            let pullSummary = await this.git.pull('origin', this.gitBranch);
            this.logger.info(pullSummary);
        }
        catch (e) {
            this.logger.error(e);
        }
    }

    checkJSfiles() {
        this.logger.info("Looking for JS files");
        const excludeDirNames = ["node_modules", "build", "libs"];
        const websitePath = this.gitPath + "//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@";
        let fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames);
        let jsFileList = fileList.filter(fileName => fileName.endsWith(".js"));
        this.logger.info("Found " + jsFileList.length + " JS files");
    }
}

let main = new Main();
main.run();