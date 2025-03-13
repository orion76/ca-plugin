import {IPlugin, IPluginBuilder} from '../plugin/types';
import {IPluginDiscovery} from '../discovery/types';


export interface IPluginManager<P extends IPlugin = IPlugin> {
	getDefinition(pluginId: string): P['definition'] | undefined;

	getDefinitions(): P['definition'][];

	getInstance(pluginId: string): P

	setPluginBuilder(pluginBuilder: IPluginBuilder): void;

	setDiscovery(discovery: IPluginDiscovery): void;

	pluginBuilder: IPluginBuilder;

	discovery: IPluginDiscovery;
}

