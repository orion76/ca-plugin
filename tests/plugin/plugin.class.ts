import {IPluginDefinition, PluginBase} from '../../src';

export class PluginTest extends PluginBase<IPluginDefinition> {
	constructor(private _definition: IPluginDefinition) {
		super();
	}

	get definition() {
		return this._definition;
	}
}
