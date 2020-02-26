import { BootTaskCallbackInterface } from "../../_types";
/**
 * Boot task for testing "failed" callback.  Disabled in bootTasks config by default.
 *
 * Here the boot task callback returns a "failed" response.
 *
 * @private
 */
export declare class ForceErrorTestTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
