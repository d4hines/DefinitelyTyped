/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
import { ShutdownManager } from "../shutDownManager";
/**
 * Boot task that sets up the "Finsemble" wildcard pubsub for use throughout Finsemble.
 * @private
 */
export declare class CheckForScheduledRestartTask {
    shutdownManager: ShutdownManager;
    dialogManager: any;
    constructor(params: any);
    start(doneCallback: BootTaskCallbackInterface): void;
    /**
     * Checks config for a scheduledRestart property. If it isn't falsy, it will be an object of format:
     * {
     * hour: 16,
     * minute:30,
     * dialogTimeout:10000
     * }
     * If it exists, we set a timeout that will fire at that time.
     */
    private checkForScheduledRestart;
}
