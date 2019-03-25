import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import { addParameters, configure } from '@storybook/vue'
import theme from './theme';

addParameters({
  options: {
    theme: theme,
  }
})

Vue.use(Vuex)

/**
 * mock nuxt router
 * https://nuxtjs.org/guide/routing
 */
Vue.mixin({
  created() {
    this.$route = {}
  }
})

/**
 * Mock nuxt-link
 * https://nuxtjs.org/api/components-nuxt-link/
 */
Vue.component('NuxtLink', {
  props: ['to'],
  template: '<a :href="to" v-bind="$attrs" v-on="$listeners"><slot /></a>',
})

function importAll(r) {
  r.keys().forEach(r)
}

/**
 * Load stories
 * Note: don't try to move `${__dirname}/../../src/client/` to a variable,
 * it will cause errors as then Webpack can no longer statically determine required files.
 */
function loadStories() {
  importAll(require.context(__dirname, true, /\.stories\.js$/))
  importAll(require.context(`${__dirname}/../../src/client/`, true, /\.stories\.js$/))
}

configure(loadStories, module)
