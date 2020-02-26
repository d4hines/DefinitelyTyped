/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that registers hotkeys based on config settings
 * @private
 */
export declare class RegisterHotkeysTask {
    start(doneCallback: BootTaskCallbackInterface): Promise<void>;
}
