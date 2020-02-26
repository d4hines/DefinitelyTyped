/// <reference types="node" />
import { EventEmitter } from "events";
import { WindowEventManager } from "../../../common/window/WindowEventManager";
import { FinsembleEvent } from "../../../common/window/FinsembleEvent";
declare global {
    interface Window {
        _FSBLCache: any;
    }
}
export declare type componentMutateParams = {
    /** Field to save. */
    field?: string;
    /** Fields to save. */
    fields?: {
        field: string;
    }[];
    /** Key to store the data under. */
    key?: string;
    /** Whether the data is componentState or windowState. */
    stateVar?: "componentState" | "windowState";
    /** Topic that the data is stored under. */
    topic?: string;
    /** Value to save. */
    value?: any;
};
export declare class BaseWindow extends EventEmitter {
    Group: any;
    componentState: any;
    wrapState: WrapState;
    name: string;
    windowOptions: any;
    bounds: object;
    wrapStateChangeSubscription: any;
    WINDOWSTATE: any;
    parentWindow: any;
    windowKey: string;
    componentKey: string;
    TITLE_CHANGED_CHANNEL: string;
    TITLE_CHANGED_SUBSCRIPTION: any;
    windowState: number;
    identifier: WindowIdentifier;
    windowName: string;
    type: string;
    windowType: string;
    setWindowType: string;
    types: any;
    removeListeners?: Function;
    parentSubscribeID: any;
    eventManager: WindowEventManager;
    eventlistenerHandlerMap: object;
    guid: "string";
    dockedPosition: number;
    enableWindowsAeroSnap: boolean;
    finishedMove: boolean;
    isMaximizing: boolean;
    constructor(params: {
        [x: string]: any;
        setWindowType: string | number;
        windowType: string;
        windowName: string;
    });
    static WINDOWSTATE: {
        NORMAL: number;
        MINIMIZED: number;
        /** Fields to save. */
        MAXIMIZED: number;
        HIDDEN: number;
    };
    windowServiceChannelName(channelTopic: string): string;
    eventChannelName(channelTopic: string): string;
    listenForBoundsSet(): void;
    listenForBoundsChanging(): void;
    getWindowStore(cb: Function): any;
    _startMove(): void;
    _stopMove(): void;
    doConstruction(params: {
        [x: string]: any;
        setWindowType: string | number;
        windowType: string;
        windowName: string;
    }): any;
    static registerType(name: string, type: typeof import("../WindowAbstractions/WebWindowWrapper").default): void;
    /**
     * This is used to bind all functions only in BaseWindow and not in the child wrappers to the wrappers. Without this binding, the value of "this" in the functions is wrong.
     * @param {} obj
     */
    static bindFunctions(obj: BaseWindow): void;
    setupListeners(name: string): void;
    onTitleChanged(error: any, response: {
        data: string;
    }): void;
    /**
     * Async wrap. Given a name/windowName, it will query the launcher for information required to wrap the window. Then it will return an object that can be operated on. Also this creates a cache of all wrapped windows for performance. Our clients wrap the same window often and this was causing excessive messaging to the store and degrading performance.
     * @param {*} params Need only name in most cases. For service and other cases where the window is not part of what the launcher considers active windows, name and uuid are required
     * @param {*} cb
     */
    static wrap: typeof BaseWindow.getInstance;
    static getInstance(params: any, cb?: Function): any;
    static _createWrap(params: {
        retrievedIdentifier: any;
        windowIdentifier: any;
        name: string | number;
        setWindowType: any;
    }): any;
    static _windowReady: (windowName: string) => Promise<unknown>;
    static _getRemoveWrapChannel(name: string): string;
    handleWrapRemoveRequest(): void;
    cleanupRouter(): void;
    handleWrapStateChange: (error: any, response: {
        data: {
            state: any;
        };
    }) => void;
    onReady(callback: {
        (...args: any[]): void;
        (): void;
    }): void;
    handleBoundsSet(error: any, response: {
        data: {
            bounds: any;
        };
    }): void;
    handleBoundsChanging(_err: any, response: {
        data: any;
    }): void;
    handleWindowHidden(_err: any, response: {
        data: any;
    }): void;
    handleWindowShown(_err: any, response: {
        data: any;
    }): void;
    handleWindowBTF(_err: any, response: {
        data: any;
    }): void;
    handleWindowMax(_err: any, response: {
        data: any;
    }): void;
    handleWindowMin(_err: any, response: {
        data: any;
    }): void;
    handleWindowRestore(_err: any, response: {
        data: any;
    }): void;
    handleWindowStartMove(_err: any, response: {
        data: any;
    }): void;
    handleWindowStopMove(_err: any, response: {
        data: any;
    }): void;
    handleWindowDisabledFrameBoundsChanged(_err: any, response: {
        data: any;
    }): void;
    handleWindowStateChange(_err: any, response: {
        data: number;
    }): void;
    /**
     * @param {string} methodName method name (e.g. "minimize", "maximize")
     * @param {object} params
     * @param {function=} callback
     * @memberof FinsembleWindow
     * @private
     */
    queryWindowService(methodName: string, params: any, callback?: Function): void;
    _eventHandled(interceptor: FinsembleEvent, guid: string, canceled?: boolean): void;
    addEventListener(eventName: WindowEventName, handler: Function): void;
    removeEventListener(eventName: WindowEventName, handler: Function): void;
    /**
     *Register a window with docking. Use this if you don't want to use the full initialization function
     *
     * @param {Object} params - can be anything that is passed to docking for window registration. @todo This should be removed soon
     * @param {Function} cb
     * @memberof FSBLWindow
     */
    registerWithDocking(params: any, cb: {
        (): void;
        (err: string | CallbackError | Error, response?: any): void;
    }): void;
    /**
     *Unregister a window with docking
     *
     * @memberof FSBLWindow
     */
    unRegisterWithDocking(): void;
    /**
     *This is if we want to handle the full register/ready state inside of the window
     register with docking
     send the message to launcher saying that component is ready
     *
     * @memberof FSBLWindow
     */
    initializeWindow(params: any): void;
    wrapReady(): void;
    _minimize(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _maximize(params: {
        notifyDocking?: boolean;
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _restore(params: {
        checkMaximize?: boolean;
        checkMinimize?: boolean;
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _blur(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _focus(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _bringToFront(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _isShowing(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _setBounds(params: {
        bounds?: any;
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _getBounds(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb: {
        (err: any, response: any): void;
        (err: any, relativeBounds: any): Promise<void>;
        (arg0: any, arg1: any): void;
        (arg0: any, arg1: {
            shouldContinue: boolean;
        }): void;
    }): void;
    _getBoundsFromSystem(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb: {
        (err: any, response: any): void;
        (arg0: any, arg1: any): void;
        (arg0: any, arg1: {
            shouldContinue: boolean;
        }): void;
    }): void;
    _updateOptions(params: {
        alwaysOnTop?: boolean;
        dontFireEvents?: boolean;
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _hide(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _show(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    /**
     * Close
     * @param params
     * @param params.fromSystem Bool. If true, event bubbled up because of an alt+f4, task manager, etc. Something closed the window that wasn't Finsemble.
     * @param cb
     */
    _close(params: {
        fromSystem?: any;
        removeFromWorkspace?: any;
        stackedWindowIdentifier?: any;
        invokedByParent?: any;
        ignoreParent?: any;
        windowIdentifier?: any;
        noDocking?: any;
    }, cb?: Function): void;
    _alwaysOnTop(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    /**
     * Returns the alwaysOnTop state for the window.
     * @param params This parameter is ignored.
     * @param cb A callback accepting two arguments: an error object (which is always `null` for this method), and a boolean value representing the alwaysOnTop state.
     */
    _isAlwaysOnTop(params?: {}, cb?: Function): boolean;
    _setOpacity(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _saveWindowOptions(params: {
        invokedByParent?: any;
        windowIdentifier?: any;
    }, cb?: Function): void;
    _getOptions(_params: any, cb?: Function): any;
    /**
     * Invoked to indicate an operation (e.g. dragging out of tab region) has started. This signals the Docking service to start tracking the mouse location and invoking tiling behavior as needed. Typically inherited (base function only).
     * @param {object} params for future use
     *
     * @example
     *	// dragging tab example using tracking and group
     * 	BaseWindow.startTabTileMonitoring();
     *	// if dragging tab is in a group, then remove it given tracking results will decide what to do with the window
     * 	BaseWindow.Group.getGroupID(this.identifier, function (err, tileGroupId) {
     * 		if (!err) { // if no error then must be in a tile group
     *			self.Group.removeWindow(this.identifier);
     *		}
     *	});
     */
    startTabTileMonitoring(params: any): void;
    /**
     * Invoked by client originating a dragStart that it has has ended. Typically inherited (base function only).
     * @param {object} params for future use
         * @param {function=} callback option callback that support overriding default behavior
     *
     * 	BaseWindow.stopTabTileMonitoring(params, function(err, results, defaultTabTileAction) {
     * 		// . . . custom code goes here . . .
     *		defaultTabTileAction(results); // now take default action or call your own function instead
     * 	});
     *
     */
    stopTabTileMonitoring(params: any, callback: (arg0: string | CallbackError | Error, arg1: any, arg2: any) => void): void;
    /**
     * Defines default TabTile action for stopTabTileMonitoring.  May be overwritten by client -- see example in stopTabTileMonitoring. Typically inherited (base function only).
     *
     * @param {any} stopTabTileResults
     * @memberof BaseWindow
     *
     * @private
     */
    defaultTabTileAction(stopTabTileResults: {
        stoppedLocation: any;
        tileGroupId: any;
        dropCoordinates: any;
        droppedOnWindowIdentifier: any;
    }): void;
    mergeBounds(bounds: {
        top: number;
        left: number;
        width: number;
        height: number;
    }): void;
    startMove(params: {
        windowIdentifier?: any;
    }): void;
    stopMove(params: {
        windowIdentifier?: any;
    }): void;
    /**
     * Given a field, this function retrieves component or window state. If no params are given you get the full state
     * @param {object} params
     * @param {string} params.stateVar A string containing "componentState" or "windowState"
     * @param {string} params.field field
     * @param {array} params.fields fields
     * @param {string} params.key The storage key for the window.
     * @param {function} cb Callback
     * @private
     * */
    getFSBLState(params: {
        stateVar: "componentState" | "windowState";
        field?: string;
        fields?: string[];
        key: string;
    }, cb: StandardCallback): Promise<void>;
    /**
     * Given params, will return the component state. Either the params to search for, or the entire state.
     *
     * @param {object} params
     * @param {string} params.field field
     * @param {array} params.fields fields
     * @param {function} cb Callback
     */
    getComponentState(params: {
        stateVar?: "componentState" | "windowState";
        field?: string;
        fields?: any;
        key?: string;
    }, cb: StandardCallback<string | CallbackError | Error, any>): Promise<void>;
    /**
     * Given params, will return the window state. Either the params to search for, or the entire state.
     *
     * @param {object} params
     * @param {string} params.field field
     *  @param {array} params.fields fields
     * @param {function} cb Callback
     */
    getWindowState(params: any, cb: any): Promise<void>;
    /**
     * Given params, will set the component state. Any fields included will be added to the state
     *
     * @param {object} params
     * @param {string} params.field field
     *  @param {array} params.fields fields
     * @param {function} cb Callback
     */
    setComponentState(params: {
        fields?: any;
    }, cb?: Function): void;
    /**
     * Removes one or more specified attributes from a component state in storage
     * for this window.
     *
     * In addition to the name of the window, params should include either a `field`
     * property as a string or a `fields` property as an array of strings.
     *
     * @param {object} params
     * @param {string} [params.field] field
     * @param {array} [params.fields] fields
     * @param {function} cb Callback
     */
    removeComponentState(params?: componentMutateParams, cb?: StandardCallback): void;
    /**
     * Given params, will set the window state. Any fields included will be added to the state
     *
     * @param {object} params
     * @param {string} params.field field
     *  @param {array} params.fields fields
     * @param {function} cb Callback
     */
    setWindowState(params: {
        fields?: any;
    }, cb: any): void;
    saveWindowState(state: number): void;
    saveCompleteWindowState(state: any, cb?: any): any;
    deleteCompleteWindowState(cb: StandardCallback<string | CallbackError | Error, any>): void;
    /**
     * Given a field, this function sets and persists app state.
     * @param {object} params
     * @param {string} [params.field] field
     * @param {array} [params.fields] fields
     * @param {function=} cb Callback
     * */
    setFSBLState(params: {
        fields?: any;
        key?: any;
        stateVar?: any;
        topic?: any;
        field?: any;
        value?: any;
    }, cb: Function): void;
    /**
     * Removes one or more specified attributes from either component or window state in storage.
     *
     * In addition to the name of the window, params should include either a `field`
     * property as a string or a `fields` property as an array of strings.
     *
     * @param {object} params
     * @param {string} [params.field] field
     * @param {array} [params.fields] fields
     * @param {function=} cb Callback
     * */
    removeFSBLState(params: componentMutateParams, cb?: StandardCallback): void;
    /**
     *Cancels startTabTileMonitoring. Example use is a user "excapes" out of a drag operation.
     *
     * @param {object} params for future use
     * @memberof BaseWindow
     */
    cancelTabTileMonitoring(params: any): void;
    /**
     * Return the parent window's wrapper (e.g. StackedWindow).
     *
     */
    getParent(): any;
    /**
     * Sets the parent window (e.g. stackedWindow) and emits "setParent" event to window listeners.
     *
     * @param {object} stackedWindowIdentifier identifer of window to set as parent (e.g. stackedWindowIdentifier).
     *
     */
    setParent(windowIdentifier: {
        windowName: any;
    }, cb?: Function): void;
    /**
     * Clears the parent reference and emits "clearParent" event to window listeners. Used only internally.
     *
     * @private
     *
     */
    clearParent(): void;
    setTitle(title: any): void;
    close(params: {}, callback: Function): void;
    _animate(params: any, cb: (arg0: string, arg1: {
        shouldContinue: boolean;
    }) => void): void;
}
