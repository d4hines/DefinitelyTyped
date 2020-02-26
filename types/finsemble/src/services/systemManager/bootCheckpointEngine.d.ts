/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootStage, BootDependencyState } from "./_types";
import { BootDependencyGraph, DGGraphStatus, DGDiagnostics } from "./bootDependencyGraph";
/**
 * The data returned by BootCheckpointEngine.getResults().
 */
export declare class BootCheckpointResults {
    okay: boolean;
    errorDiag: DGDiagnostics;
    constructor(okay: any, errorDiag?: DGDiagnostics);
}
/**
 * The checkpoint engine manages checkpoints for one startup dependency (a boot task, service, or component).
 * Checkspoints are "informational only" -- their purpose is to help diagnose startup problems.
 *
 * When a startup dependency is completed in the bootEngine, the bootengine invokes getResults() for the corresponding checkpointEngine --
 * these checkpoint results are used to report the ovrtsll checkpoint status, with any errors written to the SystemLog. Note, a dependency will only be assigned
 * a checkpoint engine if there are checkpoints defined for it in the boot config.
 *
 * Checkpoints provide more accurate diagnostic data if there's a startup failure.  For example, if startup fails before independent checkpoints A, B, and C
 * are reached, then all three checkpoints will report failures.  However by using checkpoint dependencies, if B depends on A, and C depends on B,
 * then only checkpoint A will be active and report any failure, helping to more precisely pinpoint where the problem occurred without having
 * detailed knownledge of the code.
 *
 * Note the structure of the BootCheckpointEngine is roughly the same as the structure of the BootEngine.
 *
 */
export declare class BootCheckpointEngine {
    parentName: string;
    currentStage: BootStage;
    dependencyGraph: BootDependencyGraph;
    checkpointTimers: {
        [property in string]?: any;
    };
    originalConfig: any;
    checkpointConfig: any;
    processStatusCounter: number;
    activeServices: string[];
    currentStatus: DGGraphStatus;
    defaultTimeoutInterval: number;
    /**
     * Creates an instance of boot checkpoint engine.
     * @param parentName parent's name for diagnostics (e.g. service name for which the checkpoints are defined)
     * @param stage current boot stage for diagnostics
     * @param defaultTimeoutInterval the default timeout value for the checkpoint if timeout value not defined in checkpoints config
     * @param originalConfig the checkpoint config from the parent's bootConfig.checkpoints
     */
    constructor(parentName: string, stage: BootStage, defaultTimeoutInterval: number, originalConfig: any);
    /**
     * Gets results of this checkpoint engine.  Called when the parent dependency is finished, either because it successfully started or had an error
     * @param parentState the current state of the parent so will know whether to log certain checkpoint errors
     * @returns overall checkpoint results -- note if a checkpoint has postStartupCompletion option set, then it might report to SystemLog after getResults is called
     */
    getResults(parentState: BootDependencyState): BootCheckpointResults;
    /**
     * Finds config element and returns its value (or null if not found)
     * @param name of checkpoint
     * @returns
     */
    private findConfigElement;
    /**
     * Runs checkpoint engine.  Status and diagnotics will go to the System Log.
     *
     * Starting a checkpoint when its ready simply means making the checkpoint active, which primarily means waiting for a dependency to
     * signal that the checkpoint was reached (i.e. successful), or timing out if not reached.
     *
     * Here's the general flow:
     * 1) a new dependeny graph (for checkpoints) is created and any initial errors and ready-to-start checkpoints are handled
     * 2) as checkpoints/dependencies communicate back, genericHandlerForStateChange is triggered
     * 3) setBootDependencyState is then called for the checkpoint to update its state in the dependency graph
     * 4) as checkpoint states in the dependeny tree's are changed to completed, other checkpoints become ready to start (see readyToStartList),
     * 	  then those checkpoints are started (which then triggers other state changes and so on)
     * 5) when the dependency graph is finished (either because all checkpoints are successful/started or an error occurred), then the graph's stage is marked "finished"
     *
     */
    private run;
    /**
     * Cleanup outstanding checkpoint timers -- outstanding timers are only left if premature error is thrown
     */
    private cleanupStagesOutStandingTimers;
    /**
     * Returns an initialized boot config element for a checkpoint (the returned values are based on config data and documented defaults).
     * Data validation is also done here.
     *
     * Note the format of config elements are the same for both bootEngine dependencies and checkpoint dependencies -- both pass in config elements to corresponding dependeny graph
     *
     * @param name the checkpoint name
     * @param originalCheckpointConfig the config data for one checkpoint (e.g. finsemble.services.workspaceService.bootParams.checkpoints.getEssentialConfig)
     * @returns initialized boot-config element for one checkpoint
     */
    private getCheckpoingConfigElement;
    /**
     * Returns an array checkpoint config elements -- one for each checkpoint
     * @param checkpointConfig the config data for all the checkpoints (e.g. finsemble.services.workspaceService.bootParams.checkpoints)
     * @returns array of checkpoint conig elements
     */
    private getCheckpointConfig;
    /**
     * Subscribes to checkpoint status
     * @param parentName parent name (e.g. service name)
     * @param checkpointName checkpoint name
     */
    private subscribeToCheckpointStatus;
    /**
     * Generic handler for state changes of dependencies
     * @param checkpointName a checkpoint name
     * @param state state of the checkpoint (e.g. "completed", "failed")
     * @param [params] optional control parameters
     * @param params.timedOut if true the state value is due to a timeout (used for more accurate logging)
     */
    private genericHandlerForStateChange;
    /**
     * Handles error timeout for a started checkpoint (i.e. no response was received)
     * @param checkpointName the checkpoint that timed out
     */
    private handleStartTimeout;
    /**
     * Starts a checkpoint handler
     * @param listItem contains info on checkpoint to start
     */
    private startReadyCheckpoint;
    /**
     * Sets state in dependency tree for a list of dependencies.  Note changing these states affects the status of the dependency tree
     * @param readyList list of checkpoints
     * @param newState new state to set the checkpoint to
     */
    private setStateForList;
    /**
     * Process the ready list (i.e. what's ready to start) -- the ready list is always returned in the status of the dependeny tree
     * @param readyList a ready list of checkpoints to start
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
