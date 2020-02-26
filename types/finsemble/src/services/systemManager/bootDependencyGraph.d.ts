/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { BootDependencyState, BootConfigElement, BootReadyItem } from "./_types";
/**
 * The status of the dependeny graph -- return by getCurrentStatus()
 */
export declare class DGGraphStatus {
    graphState: DGGraphState;
    graph: DGGraph;
    readyToStartList: BootReadyItem[];
    errorDiag: DGDiagnostics;
    bootConfig: BootConfigElement[];
    constructor(graphState: any, bootConfig: any, readyToStartList: any, errorDiag: any);
}
/**
 * Diagnotic value set when an error occurres in the dependency tree.
 */
export declare class DGDiagnostics {
    description: string;
    errorData: string[];
    constructor(description?: string, path?: any[]);
}
declare type DGGraphState = "notFinished" | "finished" | "error";
/**
 * Defines one node in the graph.
 */
declare class DGNode {
    name: string;
    currentState: BootDependencyState;
    dependencies: string[];
    stopOnFailure: boolean;
    customFailureMessage: string;
    constructor(name: string, dependencies: any, autoStart: boolean, stopOnFailure: boolean, customFailureMessage: string);
}
/**
 * Defines a set of nodes that as a whole make up the graph.
 */
declare class DGGraph {
    nodes: {
        [property in string]: DGNode;
    };
}
/**
 *  An instance of a dependency graph drives both the BootEngine and BootCheckpointEngine instances, determinating which dependencies are ready to start.
 */
export declare class BootDependencyGraph {
    context: string;
    graph: DGGraph;
    graphState: DGGraphState;
    bootConfig: BootConfigElement[];
    allPreviousBootConfig: BootConfigElement[];
    readyToStartList: BootReadyItem[];
    errorDiag: DGDiagnostics;
    /**
     * Creates an instance of dependency graph. Validates the graph is valid up front.
     * @param stage the current stage
     * @param bootConfig the boot config for this stage
     * @param allPreviousBootConfig the boot config for all previous stages
     */
    constructor(context: string, bootConfig: BootConfigElement[], allPreviousBootConfig?: BootConfigElement[]);
    /**
     * Used by the boot engine to update the state of one node in the dependency tree (this potentially affects what becomes ready)
     * @param dependencyName
     * @param state
     */
    setBootDependencyState(dependencyName: string, state: BootDependencyState): void;
    /**
     * Gets the current status of the dependeny tree
     * @returns status
     */
    getCurrentStatus(): DGGraphStatus;
    /**
     * Builds the graph from config (i.e. a set of boot-config elements)
     * @param bootConfig
     * @returns graph
     */
    private buildGraph;
    /**
     * Depth-first recursive function starting with a single node and following dependencies to see if circular.  Keeps track of the previous path both to identify cicular dependencies and
     * to provide diagnostics of exactly where the problem is.
     * @param dependencyPathTaken the dependency-tree path so far taken -- this array is modified for each recursive "loop"
     * @param nodeName the current node (which will be added to the path)
     * @returns true if circular path
     */
    private testOneNodeForCircularPath;
    /**
     * Checks all nodes for circular dependencies. Note an error is thrown if a circular dependency is found.
     *
     * NOTE: throws an error when cicular dependency
     *
     * @param graph the graph of all nodes
     */
    private checkNodesForCircularDependencies;
    /**
     * Checks if dependency is within a list of boot config elements
     * @param bootConfig
     * @returns true if dependeny is in list
     */
    private checkForKnownDependency;
    /**
     * Checks all nodes for valid dependencies. Note an error is thrown if an invalid/unknown dependency is found.
     *
     * NOTE: throws an error when invalid dependency
     *
     * @param bootConfig
     * @param graph
     */
    private checkNodesForValidDependencies;
    /**
     * Internally sets a node's state, based on the state of all its direct dependencies
     * @param node the node whose state is set
     * @returns returns true if the value of the node's state changed
     */
    private setNewNodeState;
    /**
     * Scans all of the nodes in the graph to get an updated ready-to-start list
     * @param graph
     * @returns updated ready-to-start list
     */
    private getNewReadyList;
    /**
     * Gets the overall state of the graph, by examining the states of all the nodes in the graph.
     * @param graph the graph
     * @returns the graph state
     */
    private getNewGraphState;
    /**
     * Iteratively walks the graph, updating node states (from their latest dependeny states). Continues until the graph is in a steady-state (i.e. no changes occurred in the last complete iteration).
     * If graph is already in an error state don't process it (don't want error noise, given can assume the root error has already been identified).
     *
     * This function update the following:
     * 		1) node states throughout the graph;
     * 		2) the this.graphState value;
     *		3) the contents of this.readytoStartList
     * @param graph
     */
    private iterativelySetAllGraphStates;
}
export {};
