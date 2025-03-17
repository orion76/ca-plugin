export interface IType<T> extends Function {
	new(...args: any[]): T;
}

export interface IPluginDefinition<Data extends any = any, P extends IPlugin<Data> = IPlugin> {
	type: string;
	id: string;
	label: string;
	pluginClass?: IType<P>;
	pluginFactory?: TPluginFactory<P>;
	disabled?: boolean;
	data?: Data
}

export interface IPlugin<Data extends any = any> {
	id: string;
	label: string;
	definition: IPluginDefinition<Data>
}



export type TPluginDefinition<P extends IPlugin> = P['definition'];

export type TPluginFactory<P extends IPlugin> = (definition: TPluginDefinition<P>) => P;