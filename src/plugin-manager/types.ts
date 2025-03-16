import { IPlugin } from '../plugin/types';


export interface IPluginManager<P extends IPlugin = IPlugin> {
	getDefinition(pluginId: string): P['definition'] | undefined;

	getDefinitions(): P['definition'][];

	getInstance(pluginId: string): P
}

