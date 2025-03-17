import { PluginBuilderBase } from "../../src";
import { PluginTestThree } from "./plugin.class";

export class PluginBuilderTest extends PluginBuilderBase<PluginTestThree> {
    protected override  defaultPluginClass = PluginTestThree;
}