import { IPluginDefinition } from "../../plugin/types";
import { PluginBase } from "../../plugin/plugin.base";


export class PluginTest extends PluginBase {
	constructor(private _definition: IPluginDefinition) {
		super();
	}

	get definition() {
		return this._definition;
	}
}
