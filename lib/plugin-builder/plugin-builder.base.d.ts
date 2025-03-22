import { IPlugin, IType, TPluginDefinition, TPluginFactory } from "../plugin/types";
import { IPluginBuilder } from "./types";
export declare abstract class PluginBuilderBase<P extends IPlugin> implements IPluginBuilder<P> {
    protected defaultPluginClass?: IType<P>;
    protected factory: TPluginFactory<P>;
    build(definition: TPluginDefinition<P>): P;
}
