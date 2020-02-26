/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootStage, BootConfigElement, BootTaskCallbackInterface } from "./_types";
import { BootCheckpointEngine } from "./bootCheckpointEngine";
import { BootDependencyGraph } from "./bootDependencyGraph";
import { ServiceLauncher } from "./serviceLauncher";
import SplinterAgentPool from "../window/Splintering/SplinterAgentPool";
import { ShutdownManager } from "./shutDownManager";
/**
 * The boot engine brings up Finsemble in an orderly way considering dependencies, all based on the "bootConfig" defined in tasks, services, and components.
 *
 * Side Note: For explanation of TypeScript's mapped types in index signatures, seach for "mapped types" in https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html.
 */
export declare class BootEngine {
    startServiceTimeout: number;
    startComponentTimeout: number;
    startTaskTimeout: number;
    currentStage: BootStage;
    dependencyGraphs: {
        [property in BootStage]?: BootDependencyGraph;
    };
    bootConfigs: {
        [property in BootStage]?: BootConfigElement[];
    };
    cumulativePreviousBootConfig: BootConfigElement[];
    stageResolver: Function;
    stageRejecter: Function;
    startTimers: {
        [property in string]?: any;
    };
    registeredTasks: {
        [property in string]?: Function;
    };
    manifest: any;
    finsembleConfig: any;
    serviceLauncher: ServiceLauncher;
    processStatusCounter: number;
    splinterAgentPool: SplinterAgentPool;
    shutdownManager: ShutdownManager;
    processingTerminiated: boolean;
    activeServices: string[];
    checkpointEngines: {
        [property in string]: BootCheckpointEngine;
    };
    /**
     * Creates an instance of boot engine.
     * @param finsembleConfig
     */
    constructor(manifest: any, serviceLauncher: ServiceLauncher, shutdownManager: ShutdownManager);
    /**
     * Displays bootEngine's diagnostic data
     */
    helpData(): void;
    /**
     * Registers one boot task with the bootEngine. All tasks dependencies must have corresponding task registrations. In other words, the only way
     * the bootEngine knows about a startup task is if it's been registered.
     * @param taskName
     * @param taskFunction
     */
    registerBootTask(taskName: string, taskFunction: Function): void;
    /**
     * Initializes splinter agent pool task used to create services. Typically bootTasks are independent and defined in bootTasks,
     * but this one is coupled to bootEngine so defined locally so can make use of object variables.
     *
     * @param doneCallback
     */
    initializeSplinterAgentPoolTask(doneCallback: BootTaskCallbackInterface): void;
    /**
     * Runs boot engine serially though each of the boot stages.  Status and diagnotics will go to the System Log.
     */
    run(): Promise<void>;
    /**
     * Programatically start a service
     * @param serviceName name of service to start (must have corresponding config in finsemble.services)
     */
    startService(serviceName: string): void;
    /**
     * Outputs diagnotics to SystemLog. Contains very specific formatting that will change when real SystemLog is available.
     * @param err
     */
    private logDiagnostics;
    /**
     * Outputs checkpoint diagnotics to SystemLog.  Contains very specific formatting that will change when real SystemLog is available.
     * @param err
     */
    private checkpointLogDiagnostics;
    /**
     * Finds config element and returns its value (or null if not found)
     * @param name
     * @returns
     */
    private findConfigElement;
    /**
     * Outputs all dependency graphs to console -- this is purely for diagnostics
     * @param dependencyGraphs map of graphs by stage
     */
    private outputDependencyGraphs;
    /**
     * Cleanup this stage's outstanding timers -- outstanding timers are only left if premature exit of stage on error
     */
    private cleanupStagesOutStandingTimers;
    /**
     * Returns an initialized boot config element, based on config data and documented defaults.
     *
     * Data validation is also done here, with errors sent to system log. This function ensures boot config elements used elsewhere always contain valid values (unless error generated here).
     *
     * @param currentStage the current bootstage (e.g. kernel)
     * @param name the dependency name (e.g. service name)
     * @param type the dependency type (e.g. "services") -- only needed to set default values
     * @param config the corrsponding bootParms config data (e.g. finsemble.services.workspaceService.bootParams)
     * @returns initialized boot-config element for one dependency
     */
    private getBootConfigElement;
    /**
     * Adds to the cumulativeBootConfig array the boot-config elements for a given type within the specified stage (e.g. services within the kernal stage).
     * @param currentStage current stage of booting
     * @param type the dependency type (e.g. services) -- this is only need to set default values
     * @param dependencyConfigs all the config data for given type (e.g. finsemble.tasks, finsemble.services)
     * @param bootConfig the array to push the boot-config elements to for given stage and type
     */
    private getBootConfigByType;
    /**
     * Pulls together all the boot-config elements for one stage, including boot-config elements for tasks, services, and components
     * @param stage the boot stage
     * @param finsembleConfig current finsembleConfig (may be updated between stages)
     * @returns the cumulative array of all the boot-config elements for the specified stage
     */
    private getBootConfig;
    /**
     * Based on the depenency graph, asynchronously run through the boot sequence for one stage.  Will not stop until graphStage is "finished".
     * The state of started dependencies will trigger new dependencies to be ready and started until finished.
     *
     * Here's the general flow:
     * 1) a new dependeny graph is created and any initial errors and ready-to-start dependencies are handled
     * 2) as starting dependencies (e.g. service or boot task) communicate back, genericHandlerForStateChange is triggered
     * 3) setBootDependencyState is then called to update the dependeny state in the dependency graph
     * 4) as states in the dependeny tree's are changed to "completed", other dependencies become ready to start (see readyToStartList),
     * 	  then those dependencies are started (which then triggers other state changes and so on)
     * 5) when the stage's dependency tree is finished (either because everything is started or an error occurred), then the stage is complete
     *
     * @param stage the boot stage to run
     * @returns Promise, which will be resolved or rejected in processWhatIsReady
     */
    private runBootStage;
    /**
     * Housekeeping function to setup boot pub sub for each router-based dependency
     */
    private setupDependencyBootStatusPubSubs;
    /**
     * Housekeeping function to setup boot pub sub for each router-based dependency
     */
    private subscribeToDependencyBootStatus;
    /**
     * Handles one dependency state change
     * @param dependencyName
     * @param type
     * @param state
     */
    private handleOneDependencyStateChange;
    /**
     * Generic handler for state changes of dependencies
     * @param dependencyName
     * @param state
     */
    private genericHandlerForStateChange;
    /**
     * Handles task callback response
     * @param taskName
     * @param state
     */
    private handleTaskResponse;
    /**
     * Handles error timeout for a started dependency (i.e. no response was received)
     * @param dependencyName
     */
    private handleStartTimeout;
    /**
     * Starts dependency that's a boot task
     * @param readyItem info for boot task to start
     */
    private startBootTaskDependency;
    /**
     * Starts dependency that's a service
     * @param readyItem info for service to start
     */
    private startServiceDependeny;
    /**
     * Starts dependency that's a component
     * @param readyItem info for component to start
     */
    private startComponentDependeny;
    /**
     * Starts a ready dependency -- one that moved to the "readyToStart" state in the dependency tree when all of its dependencies became ready.
     * If ready dependency has checkpoints, then also startup corresponding checkpoint engine for those checkpoints
     * @param listItem list of ready dependencies to start
     */
    private startReadyItem;
    /**
     * Sets state in dependency tree for a list of dependencies.  Note changing these states affects the status of the dependency tree
     * @param readyList
     * @param newState
     */
    private setStateForList;
    /**
     * Process the ready list (i.e. what's ready to start) -- the ready list is always returned in the status of the dependeny tree
     * @param readyList the ready list of what to start
     */
    private processReadyList;
    /**
     * Process the dependency tree, which typically means getting its latest status then starting all the depenencies that are ready.
     * However, if the status indicates the graph is finished (typically meaning everything has started) then accept this stage's promise -- the stage is complete.
     * Or if the status indicates an error occurred, then reject this stages promise (ending this stage)
     * @param graph the current stages dependency graph
     */
    private processWhatIsReady;
}
