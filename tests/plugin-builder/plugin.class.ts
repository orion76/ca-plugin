import { IPlugin, IPluginDefinition, PluginBase } from "../../src";
import { IPluginData, IPluginDefinitionTest, IPluginTest } from "./types";

export class PluginTestOne extends PluginBase<IPluginData> implements IPluginTest {
    constructor(protected _definition: IPluginDefinitionTest) {
        super();
    }

    get definition(): IPluginDefinitionTest {
        return this._definition;
    }
} 

export class PluginTestTwo extends PluginBase<IPluginData> implements IPluginTest {
    constructor(protected _definition: IPluginDefinitionTest) {
        super();
    }

    get definition(): IPluginDefinitionTest {
        return this._definition;
    }
} 

export class PluginTestThree extends PluginBase<IPluginData> implements IPluginTest {
    constructor(protected _definition: IPluginDefinitionTest) {
        super();
    }

    get definition(): IPluginDefinitionTest {
        return this._definition;
    }
} 