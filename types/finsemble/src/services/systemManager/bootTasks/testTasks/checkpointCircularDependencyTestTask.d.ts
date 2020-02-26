import { BootTaskCallbackInterface } from "../../_types";
/**
 * Boot task for testing checkpoint errors.  Disabled in bootTasks config by default.
 *
 * This test should be ran after stage "microkernel" since publishCheckpointState depends on router.
 *
 * See bootTasks config, which has a circular dependency on these checkpoints.
 *
 * @private
 */
export declare class CheckpointCircularDependencyTestTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
