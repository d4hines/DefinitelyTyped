import { ObjectPool } from "./ObjectPool";
declare class WindowPool extends ObjectPool {
    iterator(): Generator<any, void, unknown>;
}
export { WindowPool };
