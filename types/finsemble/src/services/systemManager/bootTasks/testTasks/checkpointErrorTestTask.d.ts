import { BootTaskCallbackInterface } from "../../_types";
/**
 * Boot task for testing checkpoint errors.  Disabled in bootTasks config by default. See bootTasks config, which is part of this test case.
 *
 * This test should be ran after stage "microkernel" since publishCheckpointState depends on router.
 *
 * This test contains multiple checkpoint errors.
 *
 * @private
 */
export declare class CheckpointErrorTestTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
