import { IPlugin, IPluginDefinition } from "../../src";

export interface IPluginTest extends IPlugin<IPluginData> {
definition:IPluginDefinitionTest
}

export interface IPluginData {
    propertyOne: boolean,
    propertyTwo: number,
    propertyThree: string,
}

export interface IPluginDefinitionTest extends IPluginDefinition<IPluginData,IPluginTest> { 

}
