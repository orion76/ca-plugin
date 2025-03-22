import { IPluginDefinition, IPlugin } from "./types";
export declare abstract class PluginBase<D extends unknown> implements IPlugin {
    abstract get definition(): IPluginDefinition<D>;
    get id(): string;
    get label(): string;
}
