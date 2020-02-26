import SplinterAgentPool from "../window/Splintering/SplinterAgentPool";
/**
 * Launcher services in various config-driven forms
 */
export declare class ServiceLauncher {
    runningServices: object;
    finUUID: object;
    manifest: any;
    workerTop: number;
    workerLeft: number;
    webWorkers: object;
    FinsembleUUID: object;
    shutdownManager: any;
    finsembleConfig: any;
    constructor(params: any);
    /**
     * Invoked by boot task "updateServiceLauncherConfigTask".
     * Updates this.finsembleConfigs to make sure we have
     * SecurityPolicies in finsembleConfig object to be used later on in
     * this.composeWorkerConfig to get security policy and permissions.
     * @param configs Finsemble configs
     */
    updateConfig(configs: Record<string, any>): void;
    updateManifest(manifest: any): void;
    /**
     * Returns the config for the given service. This is used only for *core* services: router, config, dataStore, logger.
     * Core services are those that come up before the config system is initialized.
     *
     * This function will combine configs from requiredServices, services, and servicesConfig entries.
     * @param {string} serviceName The name of the service
     * @returns {any} The config entry for the service or an empty object if the configuration isn't found.
     */
    getServiceConfig(serviceName: any): any;
    /**
     * Creates a service, either as a script, window or process.
     */
    /**
     * Creates service
     * @param worker
     * @param {SplinterAgentPool=} splinterAgentPool is optional for when the service should be splintered (after config is available)
     * @returns
     */
    createService(worker: any, splinterAgentPool?: SplinterAgentPool): void;
    /**
     * Helper function to search through the config for a list of path,entry tuples and merge them all together.
     * Use this when you need a series of configs to override one another but with the results merged together.
     *
     * @param {array} arr Array of path,entry tuples
     * @returns {any} Returns a config object, or an empty object if no config is found.
     */
    private mergeConfig;
    private launchServiceAsScript;
    private launchServiceAsThread;
    private launchServiceAsWindow;
    private launchServiceAsProcess;
    private composeWorkerConfig;
    /**
     * When the worker is created, this function is invoked. From here, we establish communication with the service, and set up event handlers.
     * @param {*} finWindow
     */
    private onServiceCreated;
    private onServiceCreationError;
}
