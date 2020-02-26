declare namespace FSBL {
    let clickedMailTo: boolean;
    const FinsembleWindow: typeof import("./common/window/FinsembleWindow").FinsembleWindow;
    const System: typeof import("./common/system").System;
    function setWindowName(name: string): void;
    const SystemMangerClient: typeof import("./common/systemManagerClient").default;
    const Utils: any;
    const Validate: any;
    const UserNotification: any;
    namespace Clients {
        const RouterClient: typeof import("./clients/routerClientInstance").default;
        const AuthenticationClient: typeof import("./clients/authenticationClient").default;
        const WindowClient: typeof import("./clients/windowClient").default;
        const DistributedStoreClient: typeof import("./clients/distributedStoreClient").default;
        const LauncherClient: typeof import("./clients/launcherClient").default;
        const DragAndDropClient: typeof import("./clients/dragAndDropClient").default;
        const LinkerClient: typeof import("./clients/linkerClient").default;
        const StorageClient: typeof import("./clients/storageClient").default;
        const WorkspaceClient: typeof import("./clients/workspaceClient").default;
        const DialogManager: typeof import("./clients/dialogManagerClient").default;
        const ConfigClient: typeof import("./clients/configClient").default;
        const BaseClient: typeof import("./clients/baseClient").default;
        const HotkeyClient: typeof import("./clients/hotkeysClient").default;
        const SearchClient: typeof import("./clients/searchClient").default;
        const Logger: typeof import("./clients/logger").default;
    }
    let displayStartupTimeoutError: boolean;
    type FSBLInfo = {
        FSBLVersion: string;
        gitHash: string;
    };
    function getFSBLInfo(cb: (result: FSBLInfo) => void): Promise<FSBLInfo>;
    function addClient(name: string, client: any): void;
    function useClients(clientList: string[]): void;
    function useAllClients(): void;
    let isInitialized: boolean;
    let isinitialized: boolean;
    function initialize(cb: () => void): void;
    function setFSBLOnline(): void;
    const listeners: Record<"onready" | "online", () => void>;
    function onShutdown(cb: () => void): void;
    function handleShutdown(): void;
    function shutdownComplete(): void;
    function listenForShutdown(): void;
    function shutdownApplication(): void;
    function restartApplication(): void;
    function windowClose(): void;
}
