export declare type BootDependencyType = "bootTasks" | "services" | "components" | "checkpoints";
export declare type BootStage = "microkernel" | "kernel" | "authentication" | "preuser" | "earlyuser" | "user";
export declare type BootDependencyState = "uninitialized" | "disabled" | "blockedByDisabled" | "failed" | "blockedByFailure" | "waitingOnDependencies" | "readyToStart" | "starting" | "completed";
export declare const ALL_BOOT_STAGES: BootStage[];
/**
 * Boot config element used to build a node in a dependency tree
 */
export declare class BootConfigElement {
    name: string;
    type: BootDependencyType;
    stage: BootStage;
    dependencies: string[];
    stopOnFailure: boolean;
    autoStart: boolean;
    customFailureMessage: string;
    timeout: number;
    originalConfig: any;
    checkpointsIncluded: boolean;
    checkpointConfig: any;
    postStartupCompletion: boolean;
}
/**
 * Represents a ready node (i.e. all that's need to start the corresponding task/service/component)
 */
export declare class BootReadyItem {
    name: string;
    type: BootDependencyType;
    config: BootConfigElement;
    constructor(name: any, type: any, config: any);
}
/**
 * Boot task callback interface
 */
export interface BootTaskCallbackInterface {
    (taskName: string, type: BootDependencyType, state: BootDependencyState): void;
}
