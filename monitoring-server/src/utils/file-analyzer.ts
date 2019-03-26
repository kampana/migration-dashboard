import { AnalyzePattern } from './../data-type/analyze-pattern-interface';
import { ConfigLoader } from './../config/config-loader';
import Logger from "./logger";
import { FileLookup } from "./file-lookup";
import { PatternAnalyzer } from "./pattern-analyzer";
import { IterationStatistics } from "../data-type/iteration-statistics-interface";
import { ElasticSearch } from "../data-access-layer/elastic-search";

export class FileAnalyzer {
    private fileLookup: FileLookup;
    private analyzer: PatternAnalyzer;
    private currentIteration: IterationStatistics =
        {
            jsFiles: [],
            analyzedPatterns: undefined
        };
    private previousIteration: IterationStatistics = {
        jsFiles: [],
        analyzedPatterns: undefined
    };
    private dataAccessLayer: ElasticSearch;
    private previousAnalyzedPatterns: { any: AnalyzePattern };


    constructor(
        private logger: Logger,
        private configLoader: ConfigLoader
    ) {
        this.fileLookup = new FileLookup();
        this.analyzer = new PatternAnalyzer(this.logger);
        this.dataAccessLayer = new ElasticSearch(this.logger, this.configLoader);
    }

    public async fileAnaylize() {
        this.logger.info("Analyzing files");
        const excludeDirNames = ["node_modules", "build", "libs"];
        const websitePath = this.configLoader.getGit().path + "//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@";
        let fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames);//TODO URI can be analyzed with dynamic programming 
        this.currentIteration.jsFiles = this.analyzeJSfiles(fileList);
        let analyzedPatterns = await this.analyzer.analyzePatterns(fileList, this.configLoader.getSearchPatterns());
        this.currentIteration.analyzedPatterns = analyzedPatterns;
        this.dataAccessLayer.update(this.previousIteration, this.currentIteration);
        this.cloneCurrentToPreviousIteration();
    }

    private analyzeJSfiles(fileList: string[]): string[] {
        let jsFileList = fileList.filter(fileName => fileName.endsWith(".js"));
        this.logger.info("Found " + jsFileList.length + " JS files");
        return jsFileList;
    }

    private cloneCurrentToPreviousIteration() {
        this.previousIteration.jsFiles = this.currentIteration.jsFiles;
        this.previousIteration.analyzedPatterns = this.currentIteration.analyzedPatterns;
    }

}