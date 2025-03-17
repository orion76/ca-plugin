import { IPluginBuilder } from "../../src";
import { pluginDefinitionTest, pluginDefinitionTestWithPluginClass, pluginDefinitionTestWithPluginFactory } from "./data";
import { PluginBuilderTest } from "./plugin-builder.class";
import { PluginTestOne, PluginTestThree, PluginTestTwo } from "./plugin.class";

import { IPluginTest } from "./types";


describe('PluginBuilder', () => {
    let pluginBuilder: IPluginBuilder<IPluginTest>;
    beforeEach(() => {
        pluginBuilder = new PluginBuilderTest()
    })
    it('should created', () => {
        expect(pluginBuilder).toBeInstanceOf(PluginBuilderTest);
    });
    describe('method  "build(definition:IPluginDefinition)"  should return plugin instance', () => {
        it('plugin from  pluginClass', () => {
            const plugin = pluginBuilder.build(pluginDefinitionTestWithPluginClass)
            expect(plugin).toBeInstanceOf(PluginTestOne);
        });
        it('plugin from  pluginFactory', () => {
            const plugin = pluginBuilder.build(pluginDefinitionTestWithPluginFactory)
            expect(plugin).toBeInstanceOf(PluginTestTwo);
        });
        it('plugin from  defaultPluginClass', () => {
            const plugin = pluginBuilder.build(pluginDefinitionTest)
            expect(plugin).toBeInstanceOf(PluginTestThree);
        });
    });

});
