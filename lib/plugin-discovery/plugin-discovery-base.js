export class PluginDiscoveryBase {
    getDefinition(pluginId, exceptionOnInvalid) {
        const definition = this.definitions.find((definition) => definition.id === pluginId);
        if (exceptionOnInvalid && !definition) {
            throw new Error(`Plugin definition not found. ID:${pluginId}`);
        }
        return definition;
    }
    getDefinitions() {
        return this.definitions;
    }
    hasDefinition(pluginId) {
        return Boolean(this.getDefinition(pluginId, false));
    }
}
//# sourceMappingURL=plugin-discovery-base.js.map