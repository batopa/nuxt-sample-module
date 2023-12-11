import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition blabla blabla
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-sample-module',
    configKey: 'sampleModule'
  },
  // Default configuration options of the Nuxt module cia'
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack` jakshdkasdh
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
