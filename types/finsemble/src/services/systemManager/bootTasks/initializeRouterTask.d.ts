/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
import { ServiceLauncher } from "../serviceLauncher";
/**
 * Boot task that intializes the router service.  Waits for RouterClient to be ready.
 * @private
 */
export declare class InitializeRouterTask {
    finsembleConfig: object;
    serviceLauncher: ServiceLauncher;
    constructor(params: any);
    start(doneCallback: BootTaskCallbackInterface): void;
}
