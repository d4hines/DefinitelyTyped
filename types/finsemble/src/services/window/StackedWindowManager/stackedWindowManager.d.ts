/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { StackedWindowManagement } from "./Interface.StackedWindowManager";
declare type MoveParams = {
    stackedWindowIdentifier: {
        windowName: string | number;
    };
    windowIdentifier: {
        windowName: string | number;
    };
};
declare class StackedWindowManager implements StackedWindowManagement {
    params: any;
    childWindow: any;
    storeCache: any;
    stackedWindowListeners: any;
    stackedWindowWrappers: any;
    eventHandlerFunction: any;
    childNameToSID: any;
    childEventsToHandle: any;
    globalStore: any;
    addReadyTimeout: any;
    constructor(params: {});
    initialize(finsembleConfig: any, callback?: Function): void;
    bindAllFunctions(): void;
    listenForWorkspaceChanges(): void;
    /**
     * Saves in the global store the data from the storeCache for the specified stacked window
     *
     * @param {any} stackedWindowIdentifier
     * @param {any} closing
     * @memberof StackedWindowManager
     * @private
     */
    saveStore(stackedWindowIdentifier: {
        windowName: any;
        name?: any;
        windowType?: string;
    }, params?: any, cb?: Function): Promise<unknown>;
    /**
     * Return true if the specified window in specified stack is showing
     *
     * @param {any} params
     * @returns
     * @memberof StackedWindowManager
     * @private
     */
    isShowing(params: {
        stackedWindowIdentifier: any;
        windowIdentifier: any;
    }): boolean;
    /**
     * Return true if the specified window name is in the specified stack
     *
     * @param {any} params
     * @returns
     * @memberof StackedWindowManager
     * @private
     */
    ifWindowInStack(params: {
        thisStackRecord: any;
        windowName: any;
    }): boolean;
    /**
     * Return true if the params indication the wrap operation was invoked directly on the window, as opposed to directly on the childWindow
     *
     * @param {any} params
     * @returns
     * @memberof StackedWindowManager
     * @private
     */
    operatingDirectlyOnStackedWindow(params: {
        stackedWindowIdentifier: any;
        windowIdentifier?: any;
    }): boolean;
    eventChannelName(stackedWindowName: string, channelTopic: string): string;
    setupInterfaceListener(methodName: string, methodFunction: any): void;
    setupStackedWindowServiceListeners(): void;
    visibleChildEventHandler(stackedWindowName: any, stackWrap: any, eventObject: any): Promise<void>;
    addChildEventListener(stackedWindowName: string | number, childName: any, childWrapper: {
        addEventListener: (arg0: any, arg1: (eventObject: any) => void) => void;
    }): void;
    removeChildEventListener(stackedWindowName: string | number, childName: any, childWrapper: {
        removeEventListener: (arg0: any, arg1: any) => void;
    }): void;
    groupWindowsContainedInStacked(groupWindows: any, childWindows: any): boolean;
    joinGroups(groups: [], stackedWindowIdentifier: {
        windowName: string | number;
    }): void;
    getGroups(windowIdentifier: {
        name: any;
    }): Promise<any>;
    /**
     * Creates a new StackedWindow, returning its stackWindowIdentifier in the callback. Optionally initializes stack with a set of child windows.
     *
     * Invoked by Launcher Service when spawning a stacked window (e.g. LauncherClient.spawn()). TODO: this all changed. Update
     *
     * @param {object} params Parameters
     * @param {array=} params.windowIdentifiers array of windowIdentifiers to add to stack on creation.
     * @param {boolean=} params.new if true then stacked window being defined for first time with no persistent state
     * @param {function=} callback function(err, stackedWindowIdentifier)
     * @memberof StackedWindowManager
     * @private
     */
    createStackedWindow(params: any, callback?: Function): Promise<void>;
    /**
     * Adds window as a child to a stacked window.  Adds to the top of the stack, or if specified to a specific location in the stack;
     *
     * @param {object=} params Parameters
     * @param {object} params.stackedWindowIdentifier stacked window to operate on stacked window to operate on
     * @param {object} params.windowIdentifier window to add
     * @param {number=} params.position the location in the stack to push the window.  Location 0 is the bottom of the stack. Defaults to the top of stack.
     * @param {boolean=} params.noSave if true then don't save the store after updating it (will be saved by caller)
     * @param {boolean=} params.ignorePreviousState if true then ignore the previous state of the window being added (with in another stack and registered with docking handled elsewhere)
     * @param {boolean=} params.noVisibility if true don't automatically set visibility when first window added to the stack (needed for ordered startup)
     * @param {function=} callback function(err)
     * @memberof StackedWindowManager
     * @private
     */
    addWindow(params: {
        stackedWindowIdentifier?: any;
        windowIdentifier: any;
        noSave: any;
        position?: any;
        noRemove?: any;
        inheritGroups?: any;
        newStack?: any;
    }, callback?: Function): any;
    /**
     * This will make a stack always on top if any child is always on top.
     */
    makeStackAlwaysOnTopIfNeeded(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
    }): Promise<void>;
    triggerEvent(params: {
        windowIdentifier: {
            windowName: any;
        };
        event: any;
    }, cb: () => void): void;
    /**
     * Closes and deletes a stacked window. If specified (see params) then children will be closed; otherwise children will be signals they are removed from the stacked window.
     *
     * @param {object} params Parameters
     * @param {object} params.stackedWindowIdentifier stacked window to operate on
     * @param {object=} params.closeChildren if true then also close all children
     * @param {object=} params.removeFromWorkspace if then remove stacked window and child windows from the workspace
     * @param {boolean=} params.waitChildClose if true then wait for child wrapper to close before returned (needed for cleanly switching workspaces)
     * @param {boolean=} params.noDocking if true then do not register removed window with docking (the workspace is unaffected)
     * @param {any} callback
     * @memberof StackedWindowManager
     */
    closeStackedWindow(params: {
        stackedWindowIdentifier: any;
        removeFromWorkspace?: any;
        closeChildren?: any;
        waitChildClose?: any;
        fromSystem?: any;
    }, callback?: Function): Promise<unknown>;
    /**
     * Removes a child window from a stacked window.  If removed window was visible, then the bottom child window (position 0) in stack will be made visible.
     *
     * @param {object} params Parameters
     * @param {object} params.stackedWindowIdentifier stacked window to operate on
     * @param {object} params.windowIdentifier window to remove
     * @param {boolean=} params.noDocking if true then do not register removed window with docking (the workspace is unaffected)
     * @param {boolean=} params.noVisible if true then do not make window visible when removing it
     * @param {boolean=} params.waitChildClose if true then wait for child wrapper to close before returned (needed for cleanly switching workspaces)
     * @param {boolean=false} params.closeWindow
     * @param {boolean=false} params.noCloseStack  if true don't close the stack window when only one child
     * @param {function=} callback function(err)
     * @memberof StackedWindowManager
     * @returns promise
     * @private
     */
    removeWindow(params: any, callback?: Function): Promise<unknown>;
    /**
     * Removes a window from the stack then closes it.  If removed window was visible, then the bottom child window (position 0) in stack will be made visible.
     *
     * @param {object} params Parameters
    .* @param {object} params.stackedWindowIdentifier stacked window to operate on
     * @param {object} params.windowIdentifier window to delete
     * @param {function=} callback function(err)
     * @memberof StackedWindowManager
     * @private
     */
    deleteWindow(params: any, callback?: Function): Promise<{
        err: any;
    }>;
    /**
     * Sets the visible window within the stack.  The previously visible window in stack will be automatically hidden.
     *
     * @param {object} params Parameters
     * @param {object} params.stackedWindowIdentifier stacked window to operate on
     * @param {object} params.windowIdentifier
     * @param {object} params.force if force is true then reset visible even if it is already marked as visible in store (this is for startup)
     * @todo the force param needs to handle the code below around previouslyVisibleWindow. In that case, the previouslyVisible window may exist, but the listeners may not have been added yet.
     * @param {function=} callback function(err)
     * @memberof StackedWindowManager
     * @private
     */
    setVisibleWindow(params: {
        stackedWindowIdentifier: any;
        windowIdentifier?: any;
        noSave?: any;
    }, callback?: Function): void;
    hideInactiveChildren(thisStackRecord: {
        childWindowIdentifiers: {
            forEach: (arg0: (identifier: any) => void) => void;
        };
        visibleWindowIdentifier: {
            windowName: any;
        };
    }): void;
    /**
     * Reorders the stack, but odes not affect visibility
     *
     * @param {object} params Parameters
     * @param {object} params.stackedWindowIdentifier stacked window to operate on
     * @param {array} params.windowIdentifiers array of windowIdentifiers which provides the new order
     * @param {function=} callback function(err)
     * @memberof StackedWindowManager
     * @private
     */
    reorder(params: {
        stackedWindowIdentifier: any;
        windowIdentifiers: any;
    }, callback?: Function): void;
    minimize(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): any;
    maximize(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: any;
        };
        invokedByParent: boolean;
    }, callback?: Function): any;
    restore(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
        checkMinimize: boolean;
    }, callback?: Function): void;
    focus(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): any;
    bringToFront(params: any, callback?: Function): any;
    saveWindowStateToStore(params: {
        stackedWindowIdentifier: any;
    }, callback?: Function): void;
    mergeBounds(stackRecord: {
        bounds: {
            left: any;
            right: any;
            width: any;
            top: any;
            bottom: any;
            height: any;
        };
    }, bounds: {
        right: number;
        left: number;
        width: number;
        top: number;
        height: number;
    }): void;
    setBounds(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        bounds: any;
        invokedByParent: boolean;
    }, callback?: Function): void;
    getBoundsFromSystem(params: any, callback?: Function): any;
    getBounds(params: any, callback?: Function): any;
    updateOptions(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): void;
    hide(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): any;
    show(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): any;
    close(params: any, callback?: Function): void;
    /**
     * set Stack to be always on top. Makes all children of the stack always on top and triggers the alwaysOnTop event for the stack
     */
    setAlwaysOnTop(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier?: {
            windowName: string | number;
        };
        invokedByParent?: boolean;
        alwaysOnTop: boolean;
    }, callback?: Function): Promise<unknown>;
    setOpacity(params: {
        stackedWindowIdentifier: {
            windowName: string | number;
        };
        windowIdentifier: {
            windowName: string | number;
        };
        invokedByParent: boolean;
    }, callback?: Function): void;
    saveWindowOptions(params: {
        closing: any;
    }, stackedWindow: {
        [x: string]: any;
        identifier?: any;
        saveCompleteWindowState?: any;
    }, maincallback?: Function): any;
    /**
     * Register a window with docking. It transmits a message to the LauncherService, which registers it as a dockable window.
     *
     * @param {object} params Parameters
     * @param {string} params.windowIdentifier the window to register (may be stacked window or child window)
     * @private
     */
    registerWithDockingManager(params: {
        windowIdentifier: any;
        windowType?: any;
    }, cb?: Function): Promise<unknown>;
    /**
     * Unregister a window with docking.
     *
     * @param {object} params Parameters
     * @param {boolean} params.removeFromWorkspace true to remove from workspace
     * @param {string} params.windowIdentifier window to unregister
     * @private
     */
    deregisterWithDockingManager(params: {
        windowIdentifier: any;
        removeFromWorkspace?: any;
    }): void;
    startMove(params: MoveParams, callback?: Function): void;
    stopMove(params: MoveParams, callback?: Function): void;
}
declare const serviceInstance: StackedWindowManager;
export default serviceInstance;
