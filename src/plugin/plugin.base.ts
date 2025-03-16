import { IPluginDefinition, IPlugin } from "./types";



export abstract class PluginBase<D extends IPluginDefinition> implements IPlugin {

	abstract get definition(): D ;

	get id() {
		return this.definition.id;
	}

	get label(): string {
		return this.definition.label;
	}
}
