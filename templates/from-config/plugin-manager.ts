
import { createPluginManagerToken, PluginManagerDefault } from "@gpb/plugin";
import { PluginExampleDiscovery } from "./discovery";
import { PLUGIN_TEMPLATE__PLUGIN_TYPE } from "./plugin";
import { IPluginTemplate, TPluginTemplateDefinition } from "./types";

export const PLUGIN_EXAMPLE_PLUGIN_MANAGER = createPluginManagerToken<TPluginTemplateDefinition, IPluginTemplate>(
    PLUGIN_TEMPLATE__PLUGIN_TYPE,
    PluginManagerDefault,
    PluginExampleDiscovery
)