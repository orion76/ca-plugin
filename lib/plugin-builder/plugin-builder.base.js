export class PluginBuilderBase {
    constructor() {
        this.factory = (definition) => {
            return new definition.pluginClass(definition);
        };
    }
    build(definition) {
        let factory;
        if (typeof definition.pluginFactory === 'function') {
            factory = definition.pluginFactory;
        }
        else {
            if (!definition.pluginClass && this.defaultPluginClass) {
                definition.pluginClass = this.defaultPluginClass;
            }
            factory = this.factory;
        }
        if (typeof factory !== 'function') {
            throw new Error(`PluginBuilder. Plugin type: ${definition.type}. Plugin factory for plugin ID ${definition.id} (${definition.label}) is missint`);
        }
        return factory(definition);
    }
}
//# sourceMappingURL=plugin-builder.base.js.map