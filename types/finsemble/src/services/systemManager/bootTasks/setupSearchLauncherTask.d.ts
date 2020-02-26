/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootTaskCallbackInterface } from "../_types";
/**
 * Boot task that registers a component launcher as search provider with the search client. This way, people can search and we can return a list of components that they can spawn.
 * Can assume LauncherClient is ready when this task runs.
 * @param {*} cb
 * @private
 */
export declare class SetupSearchLauncherTask {
    componentArray: any;
    constructor();
    /**
     * Retrieves a list of components and put it in the correct format for searching.
     * @param {function} cb callback.
     * @returns array of refined components config
     * @private
     */
    private getRefinedComponentData;
    /**
     * Starts boot task for setting up search launcher
     * @param doneCallback
     */
    start(doneCallback: BootTaskCallbackInterface): Promise<void>;
    /**
     *Returns a list of installed components based off of a search string.
     *@param {object} params
     *@param {string} params.text The search text
     *
     */
    private searchComponents;
    /**
     * This is the callback when a component is clicked in the search results. They click, we spawn.
     * @param {*} params
     * @param {*} calledWindow
     */
    private searchActions;
}
