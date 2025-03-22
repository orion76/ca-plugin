import { IPluginDiscovery } from './types';
import { IPluginDefinition } from '../plugin/types';
export declare abstract class PluginDiscoveryBase implements IPluginDiscovery {
    protected abstract definitions: IPluginDefinition[];
    getDefinition(pluginId: string, exceptionOnInvalid: boolean): IPluginDefinition | undefined;
    getDefinitions(): IPluginDefinition[];
    hasDefinition(pluginId: string): boolean;
}
