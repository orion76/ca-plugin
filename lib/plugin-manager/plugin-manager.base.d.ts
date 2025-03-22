import { IPluginDiscovery } from '../plugin-discovery/types';
import { IPluginManager } from './types';
import { IPlugin } from '../plugin/types';
import { IPluginBuilder } from '../plugin-builder/types';
export declare abstract class PluginManagerBase<P extends IPlugin> implements IPluginManager<P> {
    _instances: Map<string, IPlugin<any>>;
    abstract readonly pluginType: string;
    getDefinition(pluginId: string): P['definition'] | undefined;
    protected abstract readonly pluginDiscovery: IPluginDiscovery;
    protected abstract readonly pluginBuilder: IPluginBuilder;
    getDefinitions<P extends IPlugin = IPlugin>(): P['definition'][];
    /**
     *
     * @param pluginId
     */
    getInstance<P extends IPlugin = IPlugin>(pluginId: string): P;
}
