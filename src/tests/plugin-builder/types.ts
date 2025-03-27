import { IPlugin, IPluginDefinition } from "../../plugin";


export interface IPluginTest extends IPlugin {

}



export interface IPluginDefinitionTest extends IPluginDefinition<IPluginTest>{ 
    propertyOne: boolean,
    propertyTwo: number,
    propertyThree: string,
}
