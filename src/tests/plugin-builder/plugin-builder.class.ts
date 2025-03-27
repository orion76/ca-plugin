import { PluginBuilderBase } from "../../plugin-builder";
import { PluginTestThree } from "./plugin.class";

export class PluginBuilderTest extends PluginBuilderBase<PluginTestThree> {
    protected override  defaultPluginClass = PluginTestThree;
}