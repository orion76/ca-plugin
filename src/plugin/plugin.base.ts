import { IPluginDefinition, IPlugin } from "./types";



export abstract class PluginBase<D extends unknown> implements IPlugin {

	abstract get definition(): IPluginDefinition<D> ;

	get id() {
		return this.definition.id;
	}

	get label(): string {
		return this.definition.label;
	}
}
