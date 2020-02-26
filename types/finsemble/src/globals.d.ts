declare let chrome: any;
declare type WindowIdentifier = {
    /**
     * The name of the physical HTML window, or a reference to a native window that was launched with Assimilation service
     */
    windowName: string;
    /**
     * The type of component
     */
    componentType?: string;
    /**
     * Optional uuid of a particular application process
     */
    uuid?: string;
    windowType?: string;
};
declare type WINDOWSTATE = {
    NORMAL: 0;
    MINIMIZED: 1;
    MAXIMIZED: 2;
    HIDDEN: 3;
};
declare type ApplicationState = {
    state: "undefined" | "initializing" | "authenticating" | "authenticated" | "configuring" | "ready" | "closing";
};
declare type ApplicationStateChange = {
    data: ApplicationState;
};
declare type ServiceState = "initializing" | "ready" | "closing" | "closed";
declare type ServiceStateChange = {
    data: ServiceState;
};
declare type FinsembleDependencyObject = {
    services?: string[];
    clients?: string[];
};
declare type ServiceConstructorParams = {
    startupDependencies: FinsembleDependencyObject;
    shutdownDependencies: FinsembleDependencyObject;
    addOFWrapper: boolean;
    name: string;
};
declare type WrapState = "created" | "initializing" | "ready" | "reloading" | "closing" | "closed";
declare type WindowEventName = "blurred" | "bounds-change-start" | "startedMoving" | "bounds-changing" | "bounds-change-request" | "bounds-change-end" | "stoppedMoving" | "broughtToFront" | "clicked" | "close-requested" | "closed" | "close-complete" | "created" | "focused" | "hide-requested" | "hidden" | "maximize-requested" | "maximized" | "minimize-requested" | "minimized" | "parent-set" | "parent-unset" | "ready" | "restore-requested" | "restored" | "show-requested" | "shown" | "title-changed" | "wrap-state-changed";
/**
 * Basic window event thrown by finsemble window. This type is for all non-bounds/wrap-state event changes.
 */
declare interface WindowEvent {
    eventName: WindowEventName;
    name: string;
}
declare type BoundsChangeType = 0 | 1 | 2;
/**
 * This type will be for any bounds-change event. Other window events use the WindowEvent type.
 * @interface BoundsChangeEvent
 */
declare interface BoundsChangeEvent {
    eventName: WindowEventName;
    name: string;
    changeType: BoundsChangeType;
    top: number;
    left: number;
    width: number;
    height: number;
    right?: number;
    bottom?: number;
    uuid?: string;
    x?: number;
    y?: number;
    mousePosition?: {
        x: number;
        y: number;
    };
    timestamp?: number;
}
declare type WindowBounds = {
    top: number;
    left: number;
    width: number;
    height: number;
    right?: number;
    bottom?: number;
};
declare type Params = Record<string, any>;
declare type PromiseResult = {
    err: any;
    data: any;
};
declare type CallbackError = {
    message: string;
    code: string;
};
/**
 * The callback to be invoked if the method fails.
 */
declare type StandardCallback<E = CallbackError | Error | string | null, R = any> = (err: E, response?: R) => void;
declare type BootState = "uninitialized" | "failed" | "starting" | "completed";
declare type BootStateNotification = {
    name: string;
    state: BootState;
};
