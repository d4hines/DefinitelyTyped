declare global {
    interface Window {
        _FSBLCache: any;
    }
}
declare class FinsembleWindowManagement {
    constructor();
    windowServiceChannelName(channelTopic: any): string;
    bindFunctions(): void;
    createWindow(params: any, callback?: Function): Promise<unknown>;
}
declare const _default: FinsembleWindowManagement;
export default _default;
