export interface IType<T> extends Function {
	new(...args: any[]): T;
}

export interface IPluginDefinition<P extends IPlugin = IPlugin> {
	type: string;
	id: string;
	label: string;
	pluginClass?: IType<P>;
	disabled?: boolean;
}

export interface IPlugin {
	id: string;
	label: string;
	definition: IPluginDefinition
}

export type TPluginDefinition<P extends IPlugin> = P['definition'];

export type TPluginFactory<P extends IPlugin> = (definition: TPluginDefinition<P>, ...vars: any[]) => P;

