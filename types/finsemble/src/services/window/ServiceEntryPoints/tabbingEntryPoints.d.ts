/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
export declare class TabbingEntry {
    stackedWindowManager: any;
    moduleReady: boolean;
    constructor(stackedWindowManager: any);
    initialize(done: any): Promise<void>;
    setReady(): void;
    shutdown(done: any): void;
    bindAllFunctions(): void;
    setupInterfaceListener(methodName: any, methodFunction: any): void;
    setupStackedWindowManagerListeners(): void;
}
