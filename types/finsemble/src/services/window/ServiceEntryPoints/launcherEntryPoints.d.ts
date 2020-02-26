export declare class LauncherEntry {
    manifest: any;
    launcher: any;
    moduleReady: boolean;
    constructor(manifest: any, launcher: any);
    initialize(done: any): Promise<void>;
    setReady(): void;
    bindAllFunctions(): void;
    shutdown(done: any): void;
    definePubicInterface(): void;
}
