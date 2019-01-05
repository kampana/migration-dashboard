"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var FileLookup = (function () {
    function FileLookup() {
    }
    FileLookup.prototype.getFilesList = function (path, excludeDirNames) {
        var filelist = [];
        this.walkSync(path, filelist, excludeDirNames);
        return filelist;
    };
    FileLookup.prototype.walkSync = function (path, filelist, excludeDirNames) {
        var _this = this;
        var files = fs_1.readdirSync(path);
        filelist = filelist || [];
        files.forEach(function (file) {
            if (!excludeDirNames.includes(file)) {
                var currentPath = path + '/' + file;
                if (fs_1.statSync(currentPath).isDirectory()) {
                    filelist = _this.walkSync(currentPath + '/', filelist, excludeDirNames);
                }
                else {
                    filelist.push(currentPath);
                }
            }
        });
        return filelist;
    };
    ;
    return FileLookup;
}());
exports.FileLookup = FileLookup;
