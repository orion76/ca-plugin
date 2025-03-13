export interface IType<T> {
	new(...args: any[]): T;
}

export interface IPluginDefinition {
	type: string;
	id: string;
	label: string;
	pluginClass?: IType<any>
}

export interface IPlugin<D extends IPluginDefinition = IPluginDefinition> {
	id: string;

	label: string;

	definition: D
}

export interface IPluginBuilder {
	build<P extends IPlugin = IPlugin>(definition: P['definition']): P;
}
