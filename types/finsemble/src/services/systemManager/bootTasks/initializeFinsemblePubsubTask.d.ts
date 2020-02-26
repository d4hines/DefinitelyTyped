/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that sets up the "Finsemble" wildcard pubsub for use throughout Finsemble.
 * @private
 */
export declare class InitializeFinsemblePubsubTask {
    start(doneCallback: BootTaskCallbackInterface): void;
}
