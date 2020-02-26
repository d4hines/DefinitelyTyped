export declare class CreateSplinterAndInject {
    finsembleConfig: any;
    eventInterruptors: any;
    ALLOW_SPLINTERING: boolean;
    manifest: any;
    SplinterAgentPool: any;
    windowStore: any;
    stackedWindowManager: any;
    constructor(manifest: any, stackedWindowManager: any);
    initialize(callback?: Function): Promise<unknown>;
    windowServiceChannelName(channelTopic: any): string;
    bindAllFunctions(): void;
    shutdown(done: any): void;
    createWindow(params: any, callback?: Function): Promise<void>;
    getWindowIdentifier(params: any, callback: any): Promise<void>;
    injectTitleBar(params: any, callback: any): Promise<void>;
    doTitleBarInjection(data: any, cb: any): void;
    processConfig(): Promise<unknown>;
    createStores(): Promise<unknown>;
    doSpawn(windowDescriptor: any): Promise<{
        err: any;
        windowIdentifier: any;
    }>;
    spawnExternalWindow(windowDescriptor: any): Promise<{
        err: any;
        data: any;
    }>;
    spawnNativeWindow(windowDescriptor: any): Promise<{
        err: any;
        data: any;
    }>;
    spawnWebWindow(windowDescriptor: any): Promise<{
        err: any;
        data: any;
    }>;
    spawnWebApplication(componentConfig: any): Promise<{
        err: any;
        data: any;
    }>;
    compileWebApplicationDescriptor(componentConfig: any): any;
    spawnStackedWindow(componentConfig: any, cb?: Function): Promise<{
        err: any;
        data: any;
    }>;
    /**
     * The actual splinter method.
     * If a process is available and has room left for additional children, we request that the process fulfill the spawn request.
     * If there is no process available, we queue our spawn request. When the pool has created a new render process, we process the queue.
     */
    splinter(windowDescriptor: any): Promise<{
        err: any;
        data: any;
    }>;
    createSplinterAgentPool(): Promise<unknown>;
    doShutdown(): Promise<unknown>;
    shutdownSplinterAgentPool(done: any): void;
    injectMindControl(data: any, win: any): void;
}
