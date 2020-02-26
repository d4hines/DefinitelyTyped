import { IRouterClient } from "../clients/IRouterClient";
/**
 * @introduction
 * <h2>Base Service</h2>
 *
 * The Base Service is available with any of Finsemble's advanced packages.
 *
 * Creates an instance of the Base Service which all service must inherit. Services are spawned from your <i>service.json</i> file and managed by a helper thread - the <b>Service Manager</b>.
 * Services communicate their status and receive status of other services through the Service Manager.
 * Services have an initial handshake with the Service Manager on load, and then either go online or wait for dependant services to come online.
 * Service initialization is completely asynchronous, which allows all services to load at the same time, as long as their dependencies have been met.
 * @constructor
*/
export declare class BaseService {
    customData: any;
    initialize: Function;
    listeners: {
        onShutdown?: Function[];
    };
    Logger: any;
    onBaseServiceReadyCB: null | Function;
    name: string;
    parentUuid: string;
    RouterClient: IRouterClient;
    setOnConnectionCompleteCB: null | Function;
    shutdownDependencies: FinsembleDependencyObject;
    start: Function;
    started: boolean;
    startupDependencies: FinsembleDependencyObject;
    status: ServiceState;
    constructor(params?: ServiceConstructorParams);
    /**
    * Waits for the dependencies. At the end of this function, it will trigger the child service's initialize function (or onBaseServiceReady).
    * @note This used to be BaseService.start
    * @private
    */
    waitForDependencies(): Promise<unknown>;
    /**
     * Transmits the serviceOnline message that the rest of the dependency manager objects system are listening for.
     */
    setOnline(): void;
    /**
     * Invokes a method passed in (or on) the object that inherits from the BaseService. In other words, the service instance will have its initialize function called, unless it's using old code, in which case we will have cached the callback earlier.
     */
    onDependenciesReady(): void;
    /**
     * Conduct operations when the base service becomes ready.
     *
     * @param {function} func Any function of code desired to execute when ready.
     */
    onBaseServiceReady(func: any): void;
    /**
     * Really only for shutdown right now. Simple array that gets looped through on shutdown.
     * @param {string} listenerType Any event identifier the service provides to operate with.
     * @param {function} callback The callback to be invoked after the method completes successfully.
     */
    addEventListener(listenerType: any, callback: any): void;
    /**
     * When the application sends out a shutdown message, this function is invoked. It iterates through any registered cleanup methods. When all of them have finished, it sends a response to the application saying that it's completed cleanup (`shutdownComplete`, below).
     * @private
    */
    onShutdown(cb: any): void;
    /**
     * When the application sends out a shutdown message, this function is invoked. It iterates through any registered cleanup methods. When all of them have finished, it sends a response to the application saying that it's completed cleanup (`shutdownComplete`, below).
     * @private
    */
    handleShutdown(err: any, message: any): void;
    /**
     * Fired when all cleanup methods have been finished.
     * @private
    */
    shutdownComplete(): void;
}
