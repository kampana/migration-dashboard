import { FileLookup } from './file-lookup';
import * as simplegit from 'simple-git/promise';
import Logger from './logger';
import { readFile, readFileSync } from 'fs';
import { AnalyzePattern } from './analyze-pattern';
//TODO URI git hooks
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
        this.fileAnaylize();
        this.pull();
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

    fileAnaylize() {
        this.logger.info("Analyzing files");
        const excludeDirNames = ["node_modules", "build", "libs"];
        const patternsToSearch = ["$scope"];
        const websitePath = this.gitPath + "//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@";
        let fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames);//TODO URI can be analyzed with dynamic programming 
        this.analyzeJSfiles(fileList);
        this.analyzePatterns(fileList, patternsToSearch);
    }

    readFilePromise(fileName : string) : Promise<string> {
        let promise : Promise<string> = new Promise((resolve, reject) => {
            readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return promise;
    }

    readFilesPromise(fileList: string[]) {
        
    }

    analyzePatterns(fileList: string[], patternsToSearch : string[]) {
        let analyzedPatterns = {};
        this.logger.info("Analyzing injections");
        let codeFileList = fileList.filter(fileName => fileName.endsWith(".js") || fileName.endsWith(".ts"));
        let mitzi = codeFileList.map((file) => this.readFilePromise(file));
        Promise.all(mitzi).then( a=> {
            console.log("aaaaaaaaa",a);
        })
        console.log("finished!");
        /*codeFileList.forEach(async fileName => {
            try {
                let fileData = await this.readFilePromise(fileName);
                patternsToSearch.forEach( patternToSearch => {
                    let patternExists = fileData.includes(patternToSearch);
                    if (patternExists) {
                        if (analyzedPatterns[patternToSearch]) {
                            let existingAnalyzedPattern : AnalyzePattern = analyzedPatterns[patternToSearch];
                            existingAnalyzedPattern.numOfOccurrences++;
                        } else {
                            let newAnalyzedPattern = new AnalyzePattern();
                            newAnalyzedPattern.numOfOccurrences = 1;
                            analyzedPatterns[patternToSearch] = newAnalyzedPattern;
                        }
                    }
                });
            } catch (error) {
                this.logger.error("Error while reading from " + fileName + " Error:\n" + error)
            }
            console.log("finished", analyzedPatterns);
        });*/
        console.log(analyzedPatterns);
    }

    private analyzeJSfiles(fileList: string[]) : void {
        let jsFileList = fileList.filter(fileName => fileName.endsWith(".js"));
        this.logger.info("Found " + jsFileList.length + " JS files");
    }

}

let main = new Main();
main.run();

