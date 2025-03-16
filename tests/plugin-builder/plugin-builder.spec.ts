import { IPluginTest, PluginBuilderTest } from "./plugin-builder.class";



describe('PluginBuilder', () => {
    let pluginBuilder: PluginBuilderTest<IPluginTest>;
    beforeEach(() => {
        pluginBuilder = new PluginBuilderTest()
    })
    it('should created', () => {
        expect(pluginBuilder instanceof PluginBuilderTest).toBeTruthy();
    });
    it('getter "definition"  should return plugin definition', () => {
        // expect(plugin.definition).toEqual(pluginDefinition);
    });
});
