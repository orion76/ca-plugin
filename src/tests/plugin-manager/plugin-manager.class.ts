

import { IPluginBuilder } from "../../plugin-builder";
import { IPluginDiscovery } from "../../plugin-discovery/types";
import { PluginManagerBase } from "../../plugin-manager";
import { IPlugin } from "../../plugin/types";
import { PluginBuilderTest } from "../plugin-builder/plugin-builder.class";

import { PluginDiscoveryTest } from "../plugin-discovery/plugin-discovery.class";


interface IPluginTest extends IPlugin {

}
const TEST_PLUGIN_TYPE = 'TEST_PLUGIN_TYPE';

export class PluginManagerTest extends PluginManagerBase<IPluginTest> {
    pluginType = TEST_PLUGIN_TYPE;
    protected readonly pluginDiscovery: IPluginDiscovery = new PluginDiscoveryTest();
    protected readonly pluginBuilder: IPluginBuilder = new PluginBuilderTest()
}