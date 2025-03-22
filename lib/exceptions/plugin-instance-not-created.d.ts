import { PluginExceptionBase } from './plugin-exception.base';
export declare class PluginInstanceNotCreatedException extends PluginExceptionBase {
    constructor(pluginType: string, pluginId: string, reason: unknown);
}
