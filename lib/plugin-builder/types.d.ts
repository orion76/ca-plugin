import { IPlugin, TPluginDefinition } from "../plugin/types";
export interface IPluginBuilder<P extends IPlugin = IPlugin> {
    build(definition: TPluginDefinition<P>): P;
}
