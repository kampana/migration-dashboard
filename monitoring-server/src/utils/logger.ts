import { createLogger, transports, format } from "winston";


export default class Logger {
    private logger: any;

    constructor(logLabel : string) {
        this.init(logLabel);
    }

    private init(logLabel : string) {
        const { combine, timestamp, label, printf } = format;
        const fileFormat = printf(info => {
            return `${info.timestamp} [${info.label}] ${info.level}: ${JSON.stringify(info.message)}`;
        });
        const consoleFormat = printf(info => {
            return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
        });

        this.logger = createLogger({
            transports: [
                new transports.Console({
                    format: combine(format.colorize({ all: true }), label({ label: logLabel }), timestamp(), consoleFormat)
                }),
                new transports.File({
                    format: combine(label({ label: logLabel }), timestamp(), fileFormat),
                    filename: 'combined.log'
                })
            ]
        });
    }

    info(message: any) : void {
        this.logger.info(message);
    }

    error(message: any): void {
        this.logger.error(message);
    }

}