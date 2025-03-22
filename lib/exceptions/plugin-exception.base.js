export class PluginExceptionBase extends Error {
    constructor(_pluginType, _pluginId, message) {
        super(message);
        this._pluginType = _pluginType;
        this._pluginId = _pluginId;
    }
    get pluginType() {
        return this._pluginType;
    }
    get pluginId() {
        return this._pluginId;
    }
}
//# sourceMappingURL=plugin-exception.base.js.map