import { BootTaskCallbackInterface } from "../../_types";
/**
 * Boot task for testing checkpoint errors.  Disabled in task config by default.
 *
 * This test should be ran after stage "microkernel" since publishCheckpointState depends on router.
 *
 * See bootTasks config, which includes an "unknown" checkpoint dependency.
 *
 * @private
 */
export declare class CheckpointBadDependencyTestTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
