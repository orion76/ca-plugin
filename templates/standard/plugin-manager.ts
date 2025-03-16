import { createPluginManagerToken, IPluginDefinition, PluginDiscoveryInjectionToken, PluginManagerDefault } from "@gpb/plugin";
import { PLUGIN_TEMPLATE_PLUGIN_TYPE } from "./plugin";
import { TPluginTemplateDefinition, IPluginTemplate } from "./types";

export const PLUGIN_TEMPLATE_PLUGIN_MANAGER = createPluginManagerToken<IPluginDefinition<TPluginTemplateDefinition>, IPluginTemplate>(
    PLUGIN_TEMPLATE_PLUGIN_TYPE,
    PluginManagerDefault,
    PluginDiscoveryInjectionToken
)