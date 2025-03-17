import { IPlugin, IType, TPluginDefinition, TPluginFactory } from "src/plugin/types";
import { IPluginBuilder } from "./types";



export abstract class PluginBuilderBase<P extends IPlugin> implements IPluginBuilder<P> {

	protected defaultPluginClass?: IType<P>;


	build(definition: TPluginDefinition<P>): P {
		let factory: TPluginFactory<P>;
		if (definition.pluginClass) {
			const pluginClass = definition.pluginClass as IType<P>;
			factory = (_definition: TPluginDefinition<P>) => new pluginClass(_definition);
		} else if (definition.pluginFactory) {

			factory = definition.pluginFactory as unknown as TPluginFactory<P>;

		} else {
			const defaultClass = this.defaultPluginClass as IType<P>
			factory = (_definition: TPluginDefinition<P>) => new defaultClass(_definition);
		}

		if (typeof factory !== 'function') {
			throw new Error(`PluginBuilder. Plugin type: ${definition.type}. Plugin factory for plugin ID ${definition.id} (${definition.label}) is missint`);
		}

		return factory(definition);
	}


	private _buildFromPluginClass(pluginClass: IType<P>) {

	}

}
