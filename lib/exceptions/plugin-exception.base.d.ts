export declare class PluginExceptionBase extends Error {
    private _pluginType;
    private _pluginId;
    constructor(_pluginType: string, _pluginId: string, message: string);
    get pluginType(): string;
    get pluginId(): string;
}
