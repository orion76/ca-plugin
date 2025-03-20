import { IPlugin, IType, TPluginDefinition, TPluginFactory } from "../plugin/types";
import { IPluginBuilder } from "./types";
import { Type } from "@angular/core";


export abstract class PluginBuilderBase<P extends IPlugin> implements IPluginBuilder<P> {

	protected defaultPluginClass?: IType<P>;
	protected factory: TPluginFactory<P> = (definition: TPluginDefinition<P>) => {
		return new (definition.pluginClass as Type<P>)(definition);
	};

	build(definition: TPluginDefinition<P>): P {
		let factory: TPluginFactory<P>;

		if (typeof definition.pluginFactory === 'function') {
			factory = definition.pluginFactory as unknown as TPluginFactory<P>;
		} else {

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
