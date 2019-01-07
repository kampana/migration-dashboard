"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_lookup_1 = require("./file-lookup");
var simplegit = require("simple-git/promise");
var logger_1 = require("./logger");
var fs_1 = require("fs");
var analyze_pattern_1 = require("./analyze-pattern");
//TODO URI git hooks
var Main = (function () {
    function Main() {
        this.gitPath = 'c:\\work\\pmain';
        this.gitBranch = 'master';
        this.logger = new logger_1.default('Main');
        this.fileLookup = new file_lookup_1.FileLookup();
        this.git = simplegit(this.gitPath);
        /*this.git.status().then((status: StatusResult) => {
            this.logger.info(status);
        })*/
    }
    Main.prototype.run = function () {
        var _this = this;
        this.logger.info("Init");
        this.fileAnaylize();
        this.logger.info("Sleeping until first interval");
        setInterval(function () {
            _this.pull();
            _this.fileAnaylize();
            _this.logger.info("Sleeping until next interval");
        }, 10 * 60 * 1000);
    };
    Main.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullSummary, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.info("Pulling from " + this.gitBranch);
                        return [4 /*yield*/, this.git.pull('origin', this.gitBranch)];
                    case 1:
                        pullSummary = _a.sent();
                        this.logger.info(pullSummary);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.logger.error("Failed while trying to pull\n" + e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.fileAnaylize = function () {
        this.logger.info("Analyzing files");
        var excludeDirNames = ["node_modules", "build", "libs"];
        var patternsToSearch = ["$scope", "$timeout", "$state", "$stateParams", "$compile", "$window", "$q"];
        var websitePath = this.gitPath + "//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@";
        var fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames); //TODO URI can be analyzed with dynamic programming 
        this.analyzeJSfiles(fileList);
        this.analyzePatterns(fileList, patternsToSearch);
    };
    Main.prototype.readFilePromise = function (fileName, callbackHandle, patternsToSearch, analyzedPatterns) {
        var promise = new Promise(function (resolve, reject) {
            fs_1.readFile(fileName, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    callbackHandle(data, patternsToSearch, analyzedPatterns);
                    resolve();
                }
            });
        });
        return promise;
    };
    Main.prototype.readFilesPromise = function (fileList) {
    };
    Main.prototype.findPatternInDataData = function (fileData, patternsToSearch, analyzedPatterns) {
        patternsToSearch.forEach(function (patternToSearch) {
            var patternExists = fileData.includes(patternToSearch);
            if (patternExists) {
                if (analyzedPatterns[patternToSearch]) {
                    var existingAnalyzedPattern = analyzedPatterns[patternToSearch];
                    existingAnalyzedPattern.numOfOccurrences++;
                }
                else {
                    var newAnalyzedPattern = new analyze_pattern_1.AnalyzePattern();
                    newAnalyzedPattern.numOfOccurrences = 1;
                    analyzedPatterns[patternToSearch] = newAnalyzedPattern;
                }
            }
        });
    };
    Main.prototype.analyzePatterns = function (fileList, patternsToSearch) {
        var _this = this;
        var analyzedPatterns = {};
        this.logger.info("Analyzing patterns");
        var codeFileList = fileList.filter(function (fileName) { return fileName.endsWith(".js") || fileName.endsWith(".ts"); });
        var allReadPromises = codeFileList.map(function (file) { return _this.readFilePromise(file, _this.findPatternInDataData, patternsToSearch, analyzedPatterns); });
        Promise.all(allReadPromises).then(function () {
            _this.logger.info("Analyzed patterns:");
            _this.logger.info(analyzedPatterns);
        });
    };
    Main.prototype.analyzeJSfiles = function (fileList) {
        var jsFileList = fileList.filter(function (fileName) { return fileName.endsWith(".js"); });
        this.logger.info("Found " + jsFileList.length + " JS files");
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.run();
