/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootDependencyType, BootStage } from "../services/systemManager/_types";
export declare type StageWaitType = "stageEntered" | "stageCompleted";
/**
 * Singleton API to Finsemble System Manager
 */
declare class SystemManagerClient {
    /**
     * Publishes boot status for the service or component (or boot task) being started.  This method is used internally in FSBL and baseService and not directly called.
     * @param name the name of the service or component or module
     * @param type the type category ("services" or "components")
     * @param state the state ("completed" or "failed")
     *
     * @private
     */
    publishBootStatus(name: string, type: BootDependencyType, state: BootState): void;
    /**
     * Waits for a specific boot stage
     * @param stage the name of the service (e.g. "storageService")
     * @param when wait until either "stageEntered" or "stageCompleted"
     * @param= [callback]
     * @returns a promise
     *
     * @example
     *
     * 	await SystemManagerClient.waitForBootStage("authentication", "stageCompleted");
     *
     * 	SystemManagerClient.waitForBootStage("authentication", "stageCompleted", () => {
     *		RouterClient.publish(Constants.APPLICATION_STATE_CHANNEL, { state: "authenticated" });
     * 	});
     *
     */
    waitForBootStage(stage: BootStage, when: StageWaitType, callback?: Function): Promise<unknown>;
    /**
     * Waits for a specific service (or component or boot task) to be started
     * @param name the name of the service (e.g. "storageService")
     * @param= [callback]
     * @returns a promise
     *
     * @example
     *
     * 	await SystemManagerClient.waitForStartup("configService");
     *
     *	SystemManagerClient.waitForStartup("dataStoreService", () => {
     *		RouterClient.publish(Constants.APPLICATION_STATE_CHANNEL, { state: "configuring" });
     *	});
     *
     */
    waitForStartup(name: string, callback?: Function): Promise<unknown>;
    /**
     * Publishes a checkpoints status. This must be done for any checkpoint so the SystemManager will know if the checkpoint succeeded or not
     * @param parent the name of the service or component containing the checkpoint (as defined in config)
     * @param checkpointName tthe name of the checkpoint (as defined in config)
     * @param state the state for the checkpoint, either "completed" or "failed"
     *
     * @example
     *
     * 	SystemManagerClient.publishCheckpointState("workspaceService", "importedLegacyWorkspaces", "completed");
     *
     */
    publishCheckpointState(windowName: string, checkpointName: string, state: BootState): void;
    /**
     * Shows System Log window and bring its to front.
     */
    showSystemLog(): void;
    /**
     * Displays message on the system log
     * @param params gnenerally this is TBD until real system log is written
     * @param params.error if true then the log message is an error
     * @param params.notification if true then the log message is a notification
     * @param message the message string to log
     *
     * @example
     *
     * 	SystemManagerClient.systemLog({ error: true}, errorMsg);
     *  SystemManagerClient.systemLog({ notification: true }, "Notification: " + message);
     *
     */
    systemLog(params: any, logMessage: any): void;
}
declare const systemManagerClient: SystemManagerClient;
export default systemManagerClient;
