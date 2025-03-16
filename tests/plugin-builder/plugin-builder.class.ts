import { IPlugin, IPluginBuilder, IType } from "../../src";


export interface IPluginTest extends IPlugin {

}
const TEST_PLUGIN_TYPE = 'TEST_PLUGIN_TYPE';




export class PluginBuilderTest<P extends IPlugin> implements IPluginBuilder<P> {
    build(definition: P['definition']): P {
        if (!definition.pluginClass) {
            throw new Error('Plugin build')
        }
        const pluginClass = definition.pluginClass as IType<P>

        return new pluginClass(definition);
    }
}