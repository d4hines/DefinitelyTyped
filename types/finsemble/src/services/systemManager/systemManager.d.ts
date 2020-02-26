/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootEngine } from "./bootEngine";
import { ServiceLauncher } from "./serviceLauncher";
import { ShutdownManager } from "./shutDownManager";
declare global {
    interface Window {
        systemManager: SystemManager;
        bootEngine: BootEngine;
        helpData: Function;
    }
}
/**
 * The system manger boots Finsemble and hosts system-wide resources including the system log.
 * The system manager's URL is identified in the manifest -- it always starts first, then the
 * bootEngine starts the other services and components.
 */
export declare class SystemManager {
    onErrorMakeSystemManagerVisible: boolean;
    bootEngine: BootEngine;
    finUUID: object;
    manifest: any;
    serviceLauncher: ServiceLauncher;
    shutdownManager: ShutdownManager;
    routerClient: any;
    logger: any;
    constructor(params: any);
    /**
     * Initializes the system manager
     */
    private initialize;
    /**
     * Display error messages if required finsemble config is not available. If any of these config values are missing then Finsemble will not start correctly.
     * @param manifest the initial boot manifest
     */
    private confirmConfigAndReport;
    /**
     * help function to display on console the key diagnostic data
     */
    helpData(): string;
    /**
     * Creates Boot Engine and runs it to bring on Finsemble.
     */
    boot(): Promise<void>;
    /**
     * Registers all the boot tasks before running bootEngine
     * @param bootEngine
     * @param manifest
     * @param serviceLauncher
     */
    private registerBootTasks;
}
