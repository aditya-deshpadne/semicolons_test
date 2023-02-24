import { PluginInitializerContext } from '../../../src/core/server';
import { HelloWorldPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new HelloWorldPlugin(initializerContext);
}

export type { HelloWorldPluginSetup, HelloWorldPluginStart } from './types';
