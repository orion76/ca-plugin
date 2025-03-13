import {PluginInstanceNotCreatedException} from '../exceptions/plugin-instance-not-created';
import {IPluginDiscovery} from '../discovery/types';
import {IPluginManager} from './types';
import {IPlugin, IPluginBuilder, IPluginDefinition} from '../plugin/types';


export abstract class PluginManagerBase<P extends IPlugin> implements IPluginManager<P> {
	_instances = new Map<string, IPlugin>();

	abstract get pluginType(): string

	protected _discovery!: IPluginDiscovery;
	protected _pluginBuilder!: IPluginBuilder;

	getDefinition(pluginId: string): P['definition'] | undefined {
		return this.discovery.getDefinition(pluginId, true);
	}

	get discovery(): IPluginDiscovery {
		return this._discovery;
	}

	get pluginBuilder(): IPluginBuilder {
		return this._pluginBuilder;
	}

	getDefinitions<P extends IPlugin = IPlugin>(): P['definition'][] {
		return this.discovery.getDefinitions();
	}

	/**
	 *
	 * @param pluginId
	 */
	getInstance<P extends IPlugin = IPlugin>(pluginId: string): P {

		if (!this._instances.has(pluginId)) {
			try {
				const definition = this.getDefinition(pluginId);
				if (!definition) {
					throw new Error(`Plugin definition for pluginId: "${pluginId}" not found.`);
				}
				this._instances.set(pluginId, this.pluginBuilder.build(definition));

			} catch (error: Error | unknown) {
				throw new PluginInstanceNotCreatedException(this.pluginType, pluginId, error)
			}
		}
		return this._instances.get(pluginId) as P;
	}

	setPluginBuilder(pluginBuilder: IPluginBuilder) {
		this._pluginBuilder = pluginBuilder;
	}

	setDiscovery(discovery: IPluginDiscovery) {
		this._discovery = discovery;
	}
}
