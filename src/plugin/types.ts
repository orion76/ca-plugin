export interface IType<T> {
	new(...args: unknown[]): T;
}

export interface IPluginDefinition<D extends unknown = unknown> {
	type: string;
	id: string;
	label: string;
	pluginClass?: IType<unknown>;
	disabled?: boolean;
	data?: D
}



export interface IPlugin<D extends unknown = unknown> {
	id: string;

	label: string;

	definition: IPluginDefinition<D>
}
type TPluginDefinition<D extends IPluginDefinition<P>, P extends IPlugin<D>> = D
export type TPlugin<P extends IPlugin<D> = IPlugin<D>, D extends IPluginDefinition<P> = IPluginDefinition<P>> = P
export interface IPluginBuilder<P extends TPlugin = TPlugin> {
	build(definition: P['definition']): P;
}
