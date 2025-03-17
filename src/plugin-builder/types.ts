import { IPlugin, TPluginDefinition } from "src/plugin/types";


export interface IPluginBuilder<P extends IPlugin = IPlugin> {
	build(definition: TPluginDefinition<P>): P;
}