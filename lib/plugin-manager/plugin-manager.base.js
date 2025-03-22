import { PluginInstanceNotCreatedException } from '../exceptions/plugin-instance-not-created';
export class PluginManagerBase {
    constructor() {
        this._instances = new Map();
    }
    getDefinition(pluginId) {
        return this.pluginDiscovery.getDefinition(pluginId, true);
    }
    getDefinitions() {
        return this.pluginDiscovery.getDefinitions();
    }
    /**
     *
     * @param pluginId
     */
    getInstance(pluginId) {
        if (!this._instances.has(pluginId)) {
            try {
                const definition = this.getDefinition(pluginId);
                if (!definition) {
                    throw new Error(`Plugin definition for pluginId: "${pluginId}" not found.`);
                }
                this._instances.set(pluginId, this.pluginBuilder.build(definition));
            }
            catch (error) {
                throw new PluginInstanceNotCreatedException(this.pluginType, pluginId, error);
            }
        }
        return this._instances.get(pluginId);
    }
}
//# sourceMappingURL=plugin-manager.base.js.map