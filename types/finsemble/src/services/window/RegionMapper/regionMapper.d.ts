import { Interface_Window } from "../ServiceEntryPoints/Interface_Window";
import { RegionHandler } from "./InterfaceRegionMapper";
declare class BaseRegionHandler implements RegionHandler {
    enableRegion(): Promise<unknown>;
    triggerAt(): boolean;
    stop(): void;
    exit(): void;
}
declare class RegionMouseTracker implements Interface_Window.RegionTracking {
    enableRegion(): Promise<unknown>;
    startTracking(): Promise<unknown>;
    stopTracking(): Promise<unknown>;
}
declare class TabbingRegionHandler extends BaseRegionHandler implements Interface_Window.Tabbing, RegionHandler {
    enableRegion(): Promise<unknown>;
    disableRegion(): Promise<unknown>;
    setActiveTab(): Promise<unknown>;
    reorderTabs(): Promise<unknown>;
    getDataStore(): Promise<unknown>;
    triggerAt(): boolean;
    stop(): void;
    exit(): void;
}
declare class DesktopRegionHandler extends BaseRegionHandler implements RegionHandler {
    enableRegion(): Promise<unknown>;
    triggerAt(): boolean;
    stop(): void;
    exit(): void;
}
declare class TilingRegionHandler extends BaseRegionHandler implements RegionHandler {
    enableRegion(): Promise<unknown>;
    triggerAt(): boolean;
    stop(): void;
    exit(): void;
}
declare class RegionMapper implements Interface_Window.RegionMapper {
    regionMouseTracker: RegionMouseTracker;
    desktopRegionHandler: DesktopRegionHandler;
    tilingRegionHandler: TilingRegionHandler;
    tabbingRegionHandler: TabbingRegionHandler;
}
declare const regionMapper: RegionMapper;
export { regionMapper };
