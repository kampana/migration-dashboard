import * as simplegit from 'simple-git/promise';
import { StatusResult, PullResult } from 'simple-git/promise';
import { format, createLogger, transports } from 'winston';

const { combine, timestamp, label, printf } = format;
const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
    transports: [
        new transports.Console({
            format: combine(
                format.colorize(),
                label({ label: 'Main' }),
                timestamp(),
                myFormat)
            }),
        new transports.File({ 
            format: combine(
                label({ label: 'Main' }),
                timestamp(),
                myFormat),
            filename: 'combined.log' }
            )
    ]
});

logger.info("Init");


const git = simplegit('c:\\work\\pmain');
git.status().then((status: StatusResult) => {
    console.log(status);
})

async function pull() {
    let pullSummary: PullResult = null;
    try {
        pullSummary = await git.pull('origin', 'master');
        console.log("line here"); //TODO URI
    }
    catch (e) {
        logger.error("asdfsadf");
    }
}

pull();