/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that waits until system is authenticated
 * @private
 */
export declare class WaitForAuthenticatedTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
