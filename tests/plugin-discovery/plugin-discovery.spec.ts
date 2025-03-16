import { IPluginDiscovery } from "../../src";
import { PluginDiscoveryTest } from "./plugin-discovery.class";


describe('PluginDiscovery', () => {
    let pluginDiscovery: IPluginDiscovery;
    beforeEach(() => {
        pluginDiscovery = new PluginDiscoveryTest()
    })
    it('should created', () => {
        expect(pluginDiscovery instanceof PluginDiscoveryTest).toBeTruthy();
    });
    it('getter "definition"  should return plugin definition', () => {
        // expect(plugin.definition).toEqual(pluginDefinition);
    });
});
