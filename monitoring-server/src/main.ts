import * as simplegit from 'simple-git/promise';
import Logger from './logger';
import { readFile } from 'fs';
import { DataAccessLayer } from './data-access-layer';
import { FileLookup } from './file-lookup';
import { AnalyzePattern } from './data-model/analyze-pattern';
import { IterationStatistics } from './data-model/iteration-statistics';

//TODO URI git hooks
export class Main {
    private logger: Logger;
    private dataAccessLayer: DataAccessLayer;
    private fileLookup: FileLookup;
    private git: simplegit.SimpleGit;
    readonly gitPath = 'c:\\work\\pmain';
    readonly gitBranch = 'master';
    private currentIteration : IterationStatistics = { jsFiles : [] };
    private previousIteration : IterationStatistics  = { jsFiles : [] };;

    constructor() {
        this.logger = new Logger('Main');
        this.fileLookup = new FileLookup();
        this.dataAccessLayer = new DataAccessLayer(this.logger);
        this.git = simplegit(this.gitPath);
        /*this.git.status().then((status: StatusResult) => {
            this.logger.info(status);
        })*/
    }

    run() {
        this.logger.info("Init");
        this.fileAnaylize();
        this.logger.info("Sleeping until first interval")
        setInterval(() => {
            this.pull();
            this.fileAnaylize();
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

    async fileAnaylize() {
        this.logger.info("Analyzing files");
        const excludeDirNames = ["node_modules", "build", "libs"];
        const patternsToSearch = ["$scope", "$timeout", "$state", "$stateParams", "$compile", "$window", "$q"];
        const websitePath = this.gitPath + "//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@";
        let fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames);//TODO URI can be analyzed with dynamic programming 
        this.currentIteration.jsFiles = this.analyzeJSfiles(fileList);
        let analyzedPatterns = await this.analyzePatterns(fileList, patternsToSearch);
        this.dataAccessLayer.update(this.previousIteration, this.currentIteration, analyzedPatterns);
        this.cloneCurrentToPreviousIteration();
    }

    private cloneCurrentToPreviousIteration() {
        this.previousIteration.jsFiles = this.currentIteration.jsFiles;
    }

    readFilePromise(fileName: string, callbackHandle, patternsToSearch: string[], analyzedPatterns: {}): Promise<string> {
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

    findPatternInDataData(fileData, patternsToSearch, analyzedPatterns) {
        patternsToSearch.forEach(patternToSearch => {
            let patternExists = fileData.includes(patternToSearch);
            if (patternExists) {
                if (analyzedPatterns[patternToSearch]) {
                    let existingAnalyzedPattern: AnalyzePattern = analyzedPatterns[patternToSearch];
                    existingAnalyzedPattern.numOfOccurrences++;
                } else {
                    let newAnalyzedPattern = new AnalyzePattern();
                    newAnalyzedPattern.numOfOccurrences = 1;
                    analyzedPatterns[patternToSearch] = newAnalyzedPattern;
                }
            }
        });
    }

    async analyzePatterns(fileList: string[], patternsToSearch: string[]): Promise<{}> {
        let promise: Promise<{}> = new Promise((resolve, reject) => {
            let analyzedPatterns = {};
            this.logger.info("Analyzing patterns");
            let codeFileList = fileList.filter(fileName => fileName.endsWith(".js") || fileName.endsWith(".ts"));
            let allReadPromises = codeFileList.map((file) => this.readFilePromise(file, this.findPatternInDataData, patternsToSearch, analyzedPatterns));
            Promise.all(allReadPromises).then(() => {
                this.logger.info("Analyzed patterns:");
                this.logger.info(analyzedPatterns);
                resolve(analyzedPatterns);
            })
        });
        return promise;
    }

    analyzeJSfiles(fileList: string[]): string[] {
        let jsFileList = fileList.filter(fileName => fileName.endsWith(".js"));
        this.logger.info("Found " + jsFileList.length + " JS files");
        return jsFileList;
    }

}

let main = new Main();
main.run();

