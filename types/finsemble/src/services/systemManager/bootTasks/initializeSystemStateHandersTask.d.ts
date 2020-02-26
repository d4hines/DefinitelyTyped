/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that intializes the system state handlers (formerly in service manager).
 * @private
 */
export declare class InitializeSystemStateHandersTask {
    ServiceStates: object;
    start(doneCallback: BootTaskCallbackInterface): void;
    /**
     * Handler for messages coming in from individual services. It receives the message and pushes out the data to the rest of the system. Used by dependencymanager.
     */
    private handleServiceStateChange;
}
