import { PluginExceptionBase } from './plugin-exception.base';
export declare class PluginDefinitionNotFoundException extends PluginExceptionBase {
    constructor(pluginType: string, pluginId: string);
}
