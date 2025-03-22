import { PluginExceptionBase } from './plugin-exception.base';
export class PluginInstanceNotCreatedException extends PluginExceptionBase {
    constructor(pluginType, pluginId, reason) {
        const _message = `Plugin instance not created. Reason: ${String(reason)}`;
        super(pluginType, pluginId, _message);
    }
}
//# sourceMappingURL=plugin-instance-not-created.js.map