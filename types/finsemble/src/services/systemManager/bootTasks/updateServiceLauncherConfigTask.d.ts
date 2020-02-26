/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { ServiceLauncher } from "../serviceLauncher";
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that gets finsemble configs and passes them
 * down to ServiceLauncher.updateConfig. The purpose of this task
 * is to make sure ServiceLauncher has an up to date finsembleConfigs
 * which includes SecurityPolicies object.
 *
 * @private
 */
export declare class UpdateServiceLauncherConfigTask {
    serviceLauncher: ServiceLauncher;
    constructor(params: any);
    start(doneCallback: BootTaskCallbackInterface): Promise<void>;
}
