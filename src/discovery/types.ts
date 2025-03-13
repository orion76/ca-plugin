import {IPluginDefinition} from '../plugin/types';

export interface IPluginDiscovery {

	getDefinition(pluginId: string, exceptionOnInvalid?: boolean): IPluginDefinition | undefined;

	getDefinitions(): IPluginDefinition[];

	hasDefinition(pluginId: string): boolean;
}
