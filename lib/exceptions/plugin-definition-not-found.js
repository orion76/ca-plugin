import { PluginExceptionBase } from './plugin-exception.base';
export class PluginDefinitionNotFoundException extends PluginExceptionBase {
    constructor(pluginType, pluginId) {
        const _message = 'Plugin definition not found';
        super(pluginType, pluginId, _message);
    }
}
//# sourceMappingURL=plugin-definition-not-found.js.map