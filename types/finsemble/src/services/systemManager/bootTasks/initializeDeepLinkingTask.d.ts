/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that intializes the handlers for System Manaager API (see common/systemManagerClient)
 * @private
 */
export declare class InitializeDeepLinkingTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
