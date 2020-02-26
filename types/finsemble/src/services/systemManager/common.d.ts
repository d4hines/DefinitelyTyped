/**
 * Kills old applications -- used at the beginning of start
 * @param finUUID
 * @returns
 */
export declare function killOldApplications(finUUID: any): Promise<unknown>;
/**
 * Function to return the name of a startup status channel, given the window name
 * @param name
 * @returns
 */
export declare function statusChannel(name: any): string;
/**
 * Function to return the name of a checkpoint status channel, given the parent name (e.g. service name, component name) and the checkpoint name
 * @param parentName
 * @param checkpointName
 * @returns
 */
export declare function checkpointChannel(parentName: any, checkpointName: any): string;
