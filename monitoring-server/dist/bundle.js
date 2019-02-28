/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data-model/search-patterns.ts":
/*!*******************************************!*\
  !*** ./src/data-model/search-patterns.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar search_category_enum_1 = __webpack_require__(/*! ../data-type/search-category-enum */ \"./src/data-type/search-category-enum.ts\");\r\nexports.searchPatterns = [\r\n    // Angular injectables\r\n    {\r\n        pattern: '$scope',\r\n        displayName: '$scope',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$timeout',\r\n        displayName: '$timeout',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$state',\r\n        displayName: '$state',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$stateParams',\r\n        displayName: '$stateParams',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$compile',\r\n        displayName: '$compile',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$window',\r\n        displayName: '$window',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    {\r\n        pattern: '$q',\r\n        displayName: '$q',\r\n        searchCategory: search_category_enum_1.SearchCategory.INJECTABLE\r\n    },\r\n    // Angular component types\r\n    {\r\n        pattern: '.controller(',\r\n        displayName: 'controller',\r\n        searchCategory: search_category_enum_1.SearchCategory.COMPONENT_TYPE\r\n    },\r\n    {\r\n        pattern: '.directive(',\r\n        displayName: 'directive',\r\n        searchCategory: search_category_enum_1.SearchCategory.COMPONENT_TYPE\r\n    },\r\n    {\r\n        pattern: '.service(',\r\n        displayName: 'service',\r\n        searchCategory: search_category_enum_1.SearchCategory.COMPONENT_TYPE\r\n    },\r\n    {\r\n        pattern: '.factory(',\r\n        displayName: 'factory',\r\n        searchCategory: search_category_enum_1.SearchCategory.COMPONENT_TYPE\r\n    },\r\n    {\r\n        pattern: '.constant(',\r\n        displayName: 'constant',\r\n        searchCategory: search_category_enum_1.SearchCategory.COMPONENT_TYPE\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/data-model/search-patterns.ts?");

/***/ }),

/***/ "./src/data-type/search-category-enum.ts":
/*!***********************************************!*\
  !*** ./src/data-type/search-category-enum.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SearchCategory;\r\n(function (SearchCategory) {\r\n    SearchCategory[\"COMPONENT_TYPE\"] = \"componentType\";\r\n    SearchCategory[\"INJECTABLE\"] = \"injectable\";\r\n})(SearchCategory = exports.SearchCategory || (exports.SearchCategory = {}));\r\n\n\n//# sourceURL=webpack:///./src/data-type/search-category-enum.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar file_analyzer_1 = __webpack_require__(/*! ./utils/file-analyzer */ \"./src/utils/file-analyzer.ts\");\r\nvar simplegit = __webpack_require__(/*! simple-git/promise */ \"simple-git/promise\");\r\nvar logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\r\n//TODO URI git hooks\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        this.gitPath = 'c:\\\\work\\\\pmain';\r\n        this.gitBranch = 'master';\r\n        this.git = simplegit(this.gitPath);\r\n        this.logger = new logger_1.default('Main');\r\n        this.fileAnalyzer = new file_analyzer_1.FileAnalyzer(this.logger, this.gitPath);\r\n        /*this.git.status().then((status: StatusResult) => {\r\n            this.logger.info(status);\r\n        })*/\r\n    }\r\n    Main.prototype.run = function () {\r\n        var _this = this;\r\n        this.logger.info(\"Init\");\r\n        this.fileAnalyzer.fileAnaylize();\r\n        this.logger.info(\"Sleeping until first interval\");\r\n        setInterval(function () {\r\n            _this.pull();\r\n            _this.fileAnalyzer.fileAnaylize();\r\n            _this.logger.info(\"Sleeping until next interval\");\r\n        }, 10 * 60 * 1000);\r\n        //}, 10 * 1000);\r\n    };\r\n    Main.prototype.pull = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var pullSummary, e_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        this.logger.info(\"Pulling from \" + this.gitBranch);\r\n                        return [4 /*yield*/, this.git.pull('origin', this.gitBranch)];\r\n                    case 1:\r\n                        pullSummary = _a.sent();\r\n                        this.logger.info(pullSummary);\r\n                        return [3 /*break*/, 3];\r\n                    case 2:\r\n                        e_1 = _a.sent();\r\n                        this.logger.error(\"Failed while trying to pull\\n\" + e_1);\r\n                        return [3 /*break*/, 3];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return Main;\r\n}());\r\nexports.Main = Main;\r\nvar main = new Main();\r\nmain.run();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/utils/data-access-layer.ts":
/*!****************************************!*\
  !*** ./src/utils/data-access-layer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar elasticsearch_1 = __webpack_require__(/*! elasticsearch */ \"elasticsearch\");\r\nvar DataAccessLayer = /** @class */ (function () {\r\n    function DataAccessLayer(logger) {\r\n        this.logger = logger;\r\n        this.client = new elasticsearch_1.Client({\r\n            host: 'http://elsearchtlv02:9200',\r\n            log: 'error'\r\n        });\r\n    }\r\n    DataAccessLayer.prototype.diff = function (arr1, arr2) {\r\n        return arr1.filter(function (i) { return arr2.indexOf(i) < 0; });\r\n    };\r\n    DataAccessLayer.prototype.update = function (previousIteration, currentIteration, analyzedPatterns) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var indexableResult, e_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        indexableResult = this.convertPatternsBySearchCategory(analyzedPatterns);\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        _a.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, this.client.index({\r\n                                index: 'migration-dashboard',\r\n                                type: 'js',\r\n                                body: {\r\n                                    numberOfJsFiles: currentIteration.jsFiles.length,\r\n                                    jsFilesRemoved: this.getFilesRemoved(previousIteration, currentIteration),\r\n                                    jsFilesAdded: this.getFilesAdded(previousIteration, currentIteration),\r\n                                    timestamp: new Date(),\r\n                                    analyzeResult: indexableResult\r\n                                }\r\n                            })];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        e_1 = _a.sent();\r\n                        this.logger.error(e_1);\r\n                        return [3 /*break*/, 4];\r\n                    case 4:\r\n                        this.logger.info(\"Elastic Search indexed\");\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    DataAccessLayer.prototype.convertPatternsBySearchCategory = function (analyzedPatterns) {\r\n        var indexableResult = {};\r\n        Object.entries(analyzedPatterns).map(function (analyzedValue) {\r\n            var _a;\r\n            if (!indexableResult[analyzedValue[1].searchCategory]) {\r\n                indexableResult[analyzedValue[1].searchCategory] = [];\r\n            }\r\n            indexableResult[analyzedValue[1].searchCategory].push((_a = {},\r\n                _a[analyzedValue[0]] = analyzedValue[1].numOfOccurrences,\r\n                _a));\r\n        });\r\n        return indexableResult;\r\n    };\r\n    DataAccessLayer.prototype.getFilesAdded = function (previousIteration, currentIteration) {\r\n        return previousIteration.jsFiles.length !== 0 ? this.diff(currentIteration.jsFiles, previousIteration.jsFiles) : undefined;\r\n    };\r\n    DataAccessLayer.prototype.getFilesRemoved = function (previousIteration, currentIteration) {\r\n        return previousIteration.jsFiles.length !== 0 ? this.diff(previousIteration.jsFiles, currentIteration.jsFiles) : undefined;\r\n    };\r\n    return DataAccessLayer;\r\n}());\r\nexports.DataAccessLayer = DataAccessLayer;\r\n\n\n//# sourceURL=webpack:///./src/utils/data-access-layer.ts?");

/***/ }),

/***/ "./src/utils/file-analyzer.ts":
/*!************************************!*\
  !*** ./src/utils/file-analyzer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar file_lookup_1 = __webpack_require__(/*! ./file-lookup */ \"./src/utils/file-lookup.ts\");\r\nvar pattern_analyzer_1 = __webpack_require__(/*! ./pattern-analyzer */ \"./src/utils/pattern-analyzer.ts\");\r\nvar data_access_layer_1 = __webpack_require__(/*! ./data-access-layer */ \"./src/utils/data-access-layer.ts\");\r\nvar search_patterns_1 = __webpack_require__(/*! ../data-model/search-patterns */ \"./src/data-model/search-patterns.ts\");\r\nvar FileAnalyzer = /** @class */ (function () {\r\n    function FileAnalyzer(logger, gitPath) {\r\n        this.logger = logger;\r\n        this.gitPath = gitPath;\r\n        this.currentIteration = { jsFiles: [] };\r\n        this.previousIteration = { jsFiles: [] };\r\n        this.fileLookup = new file_lookup_1.FileLookup();\r\n        this.analyzer = new pattern_analyzer_1.PatternAnalyzer(this.logger);\r\n        this.dataAccessLayer = new data_access_layer_1.DataAccessLayer(this.logger);\r\n    }\r\n    FileAnalyzer.prototype.fileAnaylize = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var excludeDirNames, websitePath, fileList, analyzedPatterns;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        this.logger.info(\"Analyzing files\");\r\n                        excludeDirNames = [\"node_modules\", \"build\", \"libs\"];\r\n                        websitePath = this.gitPath + \"//panayax//projects//as-web-site//src//main//webapp//app//@fingerprint@\";\r\n                        fileList = this.fileLookup.getFilesList(websitePath, excludeDirNames);\r\n                        this.currentIteration.jsFiles = this.analyzeJSfiles(fileList);\r\n                        return [4 /*yield*/, this.analyzer.analyzePatterns(fileList, search_patterns_1.searchPatterns)];\r\n                    case 1:\r\n                        analyzedPatterns = _a.sent();\r\n                        this.dataAccessLayer.update(this.previousIteration, this.currentIteration, analyzedPatterns);\r\n                        this.cloneCurrentToPreviousIteration();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    FileAnalyzer.prototype.analyzeJSfiles = function (fileList) {\r\n        var jsFileList = fileList.filter(function (fileName) { return fileName.endsWith(\".js\"); });\r\n        this.logger.info(\"Found \" + jsFileList.length + \" JS files\");\r\n        return jsFileList;\r\n    };\r\n    FileAnalyzer.prototype.cloneCurrentToPreviousIteration = function () {\r\n        this.previousIteration.jsFiles = this.currentIteration.jsFiles;\r\n    };\r\n    return FileAnalyzer;\r\n}());\r\nexports.FileAnalyzer = FileAnalyzer;\r\n\n\n//# sourceURL=webpack:///./src/utils/file-analyzer.ts?");

/***/ }),

/***/ "./src/utils/file-lookup.ts":
/*!**********************************!*\
  !*** ./src/utils/file-lookup.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nvar FileLookup = /** @class */ (function () {\r\n    function FileLookup() {\r\n    }\r\n    FileLookup.prototype.getFilesList = function (path, excludeDirNames) {\r\n        var filelist = [];\r\n        this.walkSync(path, filelist, excludeDirNames);\r\n        return filelist;\r\n    };\r\n    FileLookup.prototype.walkSync = function (path, filelist, excludeDirNames) {\r\n        var _this = this;\r\n        var files = fs_1.readdirSync(path);\r\n        filelist = filelist || [];\r\n        files.forEach(function (file) {\r\n            if (!excludeDirNames.includes(file)) {\r\n                var currentPath = path + '/' + file;\r\n                if (fs_1.statSync(currentPath).isDirectory()) {\r\n                    filelist = _this.walkSync(currentPath + '/', filelist, excludeDirNames);\r\n                }\r\n                else {\r\n                    filelist.push(currentPath);\r\n                }\r\n            }\r\n        });\r\n        return filelist;\r\n    };\r\n    ;\r\n    return FileLookup;\r\n}());\r\nexports.FileLookup = FileLookup;\r\n\n\n//# sourceURL=webpack:///./src/utils/file-lookup.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar winston_1 = __webpack_require__(/*! winston */ \"winston\");\r\nvar Logger = /** @class */ (function () {\r\n    function Logger(logLabel) {\r\n        this.init(logLabel);\r\n    }\r\n    Logger.prototype.init = function (logLabel) {\r\n        var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, label = winston_1.format.label, printf = winston_1.format.printf;\r\n        var fileFormat = printf(function (info) {\r\n            return info.timestamp + \" [\" + info.label + \"] \" + info.level + \": \" + JSON.stringify(info.message);\r\n        });\r\n        var consoleFormat = printf(function (info) {\r\n            return info.timestamp + \" [\" + info.label + \"] \" + info.level + \": \" + info.message;\r\n        });\r\n        this.logger = winston_1.createLogger({\r\n            transports: [\r\n                new winston_1.transports.Console({\r\n                    format: combine(winston_1.format.colorize({ all: true }), label({ label: logLabel }), timestamp(), consoleFormat)\r\n                }),\r\n                new winston_1.transports.File({\r\n                    format: combine(label({ label: logLabel }), timestamp(), fileFormat),\r\n                    filename: 'combined.log'\r\n                })\r\n            ]\r\n        });\r\n    };\r\n    Logger.prototype.info = function (message) {\r\n        this.logger.info(message);\r\n    };\r\n    Logger.prototype.error = function (message) {\r\n        this.logger.error(message);\r\n    };\r\n    return Logger;\r\n}());\r\nexports.default = Logger;\r\n\n\n//# sourceURL=webpack:///./src/utils/logger.ts?");

/***/ }),

/***/ "./src/utils/pattern-analyzer.ts":
/*!***************************************!*\
  !*** ./src/utils/pattern-analyzer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nvar PatternAnalyzer = /** @class */ (function () {\r\n    function PatternAnalyzer(logger) {\r\n        this.logger = logger;\r\n    }\r\n    PatternAnalyzer.prototype.analyzePatterns = function (fileList, patternsToSearch) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var promise;\r\n            var _this = this;\r\n            return __generator(this, function (_a) {\r\n                promise = new Promise(function (resolve, reject) {\r\n                    var analyzedPatterns = {};\r\n                    _this.logger.info(\"Analyzing patterns\");\r\n                    var codeFileList = fileList.filter(function (fileName) { return fileName.endsWith(\".js\") || fileName.endsWith(\".ts\"); });\r\n                    var allReadPromises = codeFileList.map(function (file) { return _this.readFilePromise(file, _this.findPatternInData, patternsToSearch, analyzedPatterns); });\r\n                    Promise.all(allReadPromises).then(function () {\r\n                        _this.logger.info(\"Analyzed patterns:\");\r\n                        _this.logger.info(analyzedPatterns);\r\n                        resolve(analyzedPatterns);\r\n                    });\r\n                });\r\n                return [2 /*return*/, promise];\r\n            });\r\n        });\r\n    };\r\n    PatternAnalyzer.prototype.findPatternInData = function (fileData, patternsToSearch, analyzedPatterns) {\r\n        patternsToSearch.forEach(function (patternToSearch) {\r\n            var patternExists = fileData.includes(patternToSearch.pattern);\r\n            if (patternExists) {\r\n                if (analyzedPatterns[patternToSearch.displayName]) {\r\n                    var existingAnalyzedPattern = analyzedPatterns[patternToSearch.displayName];\r\n                    existingAnalyzedPattern.numOfOccurrences++;\r\n                }\r\n                else {\r\n                    var newAnalyzedPattern = {\r\n                        numOfOccurrences: 1,\r\n                        searchCategory: patternToSearch.searchCategory\r\n                    };\r\n                    analyzedPatterns[patternToSearch.displayName] = newAnalyzedPattern;\r\n                }\r\n            }\r\n        });\r\n    };\r\n    PatternAnalyzer.prototype.readFilePromise = function (fileName, callbackHandle, patternsToSearch, analyzedPatterns) {\r\n        var promise = new Promise(function (resolve, reject) {\r\n            fs_1.readFile(fileName, 'utf8', function (err, data) {\r\n                if (err) {\r\n                    reject(err);\r\n                }\r\n                else {\r\n                    callbackHandle(data, patternsToSearch, analyzedPatterns);\r\n                    resolve();\r\n                }\r\n            });\r\n        });\r\n        return promise;\r\n    };\r\n    return PatternAnalyzer;\r\n}());\r\nexports.PatternAnalyzer = PatternAnalyzer;\r\n\n\n//# sourceURL=webpack:///./src/utils/pattern-analyzer.ts?");

/***/ }),

/***/ "elasticsearch":
/*!********************************!*\
  !*** external "elasticsearch" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"elasticsearch\");\n\n//# sourceURL=webpack:///external_%22elasticsearch%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "simple-git/promise":
/*!*************************************!*\
  !*** external "simple-git/promise" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"simple-git/promise\");\n\n//# sourceURL=webpack:///external_%22simple-git/promise%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });