interface LogParams {
    leadingBlankLine?: boolean;
    indent?: boolean;
    doubleIndent?: boolean;
}
/**
 * System log, manages syslog window and control output to it
 */
export declare class SystemLog {
    onErrorMakeSystemManagerVisible: boolean;
    /**
     * Initializes system log and window
     * @param onErrorMakeSystemManagerVisible if true then will make syslog visible on error
     */
    initialize(onErrorMakeSystemManagerVisible: boolean): void;
    log(params: LogParams, message: string, other?: string): void;
    warn(params: LogParams, message: string, other?: any): void;
    error(params: LogParams, message: string, other?: any): void;
    notification(params: LogParams, message: string, other?: any): void;
    showSystemLog(): void;
    hideSystemLog(): void;
}
declare const systemLog: SystemLog;
export default systemLog;
