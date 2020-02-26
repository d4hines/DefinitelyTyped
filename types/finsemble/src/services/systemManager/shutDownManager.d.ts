/**
 * Manages an orderly shutdown of Finsemble
 */
declare class Shutdown {
    finUUID: object;
    quitType: string;
    /**
     * Number of services loaded on startup.
     */
    servicesLoaded: any[];
    /**
     * Number of services that have responded to the shutdownRequest.
     */
    servicesResponded: any[];
    /**
     * Which services will need to compelete some kind of cleanup.
     */
    waitFor: any[];
    createdApps: any[];
    splinterAgentPool: any;
    finsembleConfig: any;
    constructor(params: any);
    /**
     * Dynamically sets splinter agent pool during boot
     * @param splinterAgentPool
     */
    setSplinterAgentPool(splinterAgentPool: any): void;
    /**
     * Will check to see if all services have:
     * 1. responded to the shutdownRequest, and
     * 2. If they needed to cleanup, whether they've finished.
     *
     * If everyone is nice and tidy, the app quits or restarts.
     */
    attemptQuit(): void;
    forceRestart(): void;
    closeAllApplications(cb: any): void;
    shutdownFinsemble(): void;
    /**
     * When FSBL transmits on the `Application.shutdown` channel, we receive it here. From here, we ask all services to go ahead and compelte any cleanup that they need to take care of.
     */
    transmitShutdownRequest(): void;
    /**
     * When FSBL transmits on the `Application.shutdown` channel, we receive it here. From here, we ask all services to go ahead and compelte any cleanup that they need to take care of.
     */
    transmitRestartRequest(err: any, response: any): void;
}
export declare class ShutdownManager {
    shutdown: Shutdown;
    manifest: object;
    finsembleConfig: any;
    restartg: object;
    shutdownList: object[];
    constructor(params: any);
    /**
     * Dynamically sets splinter agent pool during boot
     * @param splinterAgentPool
     */
    setSplinterAgentPool(splinterAgentPool: any): void;
    addAppToShutdownList(app: any): void;
    setupShutdownListeners(activeServices: string[]): void;
    restart(err: any, response: any): void;
}
export {};
