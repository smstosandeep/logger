
/**
 * Sandeep Sirohi: Logger.
 */
export class Logger {
    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }

    static error(msg: string) {
        console.log(`%c ${msg}`, 'color: red');
    }

    static warn(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }
}