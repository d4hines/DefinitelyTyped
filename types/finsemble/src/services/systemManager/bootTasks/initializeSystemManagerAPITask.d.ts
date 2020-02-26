/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
import { BootEngine } from "../bootEngine";
import { SystemLog } from "../systemLog";
/**
 * Boot task that intializes the handlers for System Manaager API (see common/systemManagerClient)
 * @private
 */
export declare class InitializeSystemManagerAPITask {
    systemLog: SystemLog;
    bootEngine: BootEngine;
    constructor(params: any);
    start(doneCallback: BootTaskCallbackInterface): void;
}
