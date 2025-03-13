import {IPluginDiscovery} from './types';
import {IPluginDefinition} from '../plugin/types';


export abstract class DiscoveryBase implements IPluginDiscovery {

	protected _definitions: IPluginDefinition[] = [];

	getDefinition(pluginId: string, exceptionOnInvalid: boolean): IPluginDefinition | undefined {
		const definition = this._definitions.find((definition) => definition.id === pluginId);
		if (exceptionOnInvalid && !definition) {
			throw new Error(`Plugin definition not found. ID:${pluginId}`);
		}
		return definition;
	}

	getDefinitions(): IPluginDefinition[] {
		return this._definitions;
	}

	hasDefinition(pluginId: string): boolean {
		return Boolean(this.getDefinition(pluginId, false));
	}
}
