/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that loads system tray icon.  Can assume LauncherClient is ready when this task runs.  That task also handles shutdown, removing system tray icon.
 * @private
 */
export declare class LoadSystemTrayIconTask {
    finsembleConfig: any;
    start(doneCallback: BootTaskCallbackInterface): Promise<void>;
    /**
     * Remove System Tray Icon
     */
    private removeSystemTrayIcon;
    private handleShutdown;
}
