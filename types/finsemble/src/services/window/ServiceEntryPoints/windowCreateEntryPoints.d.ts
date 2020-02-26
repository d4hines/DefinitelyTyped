import { Launcher } from "../Launcher/launcher";
export declare class WindowCreateEntry {
    finsembleConfig: any;
    manifest: any;
    launcher: Launcher;
    moduleReady: boolean;
    constructor(manifest: any, launcher: any);
    initialize(done: any): void;
    setReady(): void;
    windowServiceChannelName(channelTopic: any): string;
    bindAllFunctions(): void;
    shutdown(done: any): void;
    definePubicInterface_Window(): void;
    getWindowIdentifier(queryError: any, queryMessage: any): Promise<void>;
    injectTitleBar(queryError: any, queryMessage: any): Promise<void>;
}
