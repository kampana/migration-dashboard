"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var Logger = (function () {
    function Logger(logLabel) {
        this.init(logLabel);
    }
    Logger.prototype.init = function (logLabel) {
        var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, label = winston_1.format.label, printf = winston_1.format.printf;
        var fileFormat = printf(function (info) {
            return info.timestamp + " [" + info.label + "] " + info.level + ": " + JSON.stringify(info.message);
        });
        var consoleFormat = printf(function (info) {
            return info.timestamp + " [" + info.label + "] " + info.level + ": " + info.message;
        });
        this.logger = winston_1.createLogger({
            transports: [
                new winston_1.transports.Console({
                    format: combine(winston_1.format.colorize({ all: true }), label({ label: logLabel }), timestamp(), consoleFormat)
                }),
                new winston_1.transports.File({
                    format: combine(label({ label: logLabel }), timestamp(), fileFormat),
                    filename: 'combined.log'
                })
            ]
        });
    };
    Logger.prototype.info = function (message) {
        this.logger.info(message);
    };
    Logger.prototype.error = function (message) {
        this.logger.error(message);
    };
    return Logger;
}());
exports.default = Logger;
