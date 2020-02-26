declare class SystemWindow {
    constructor(params: any, cb: any, errCb?: any);
    static get getCurrent(): any;
    static get wrap(): any;
}
declare class Application {
    constructor(params: any, cb: any, errCb?: any);
    static get getCurrent(): any;
    static get wrap(): any;
}
declare class SystemNotification {
    constructor(params: any);
}
export declare class System {
    static get Application(): typeof Application;
    static get Window(): typeof SystemWindow;
    static get Notification(): typeof SystemNotification;
    static getMousePosition(cb: any): void;
    static getMonitorInfo(cb: any): void;
    static get container(): any;
    static get fin(): any;
    static get ready(): any;
    static get getHostSpecs(): any;
    static get InterApplicationBus(): any;
    static get launchExternalProcess(): any;
    static get terminateExternalProcess(): any;
    static get getAllApplications(): any;
    static get exit(): any;
    static get clearCache(): any;
    static get showDeveloperTools(): any;
    static get getRuntimeInfo(): any;
    static get addEventListener(): any;
    static get getVersion(): any;
    static get openUrlWithBrowser(): any;
    static get getAllWindows(): any;
    static get getProcessList(): any;
    static FinsembleReady(cb: any): any;
    /**
     * Performs handshake with FEA to indicate the primary application started successfully
     */
    static startupApplicationHandshake(): void;
    static closeApplication(app: any, cb?: Function): Promise<unknown>;
    static isElectron(): boolean;
}
export {};
