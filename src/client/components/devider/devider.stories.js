import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import Devider from './devider.vue'

import docs from './README.md'
import '../app-core/index.css'

Vue.component('devider', Devider)

const componentDecorator = () => {
  const style = 'width: 100%; height: auto; min-height: 100vh; padding: 32px;'

  return {
    template: `<div style="${style}"><story /></div>`,
  }
}

storiesOf('Components/Devider', module)
  .addDecorator(componentDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(docs))
  .add('Default', () => ({
    template: `
      <devider />
    `,
  }))
  .add('Inverted', () => ({
    template: `
      <devider :inverted="true" />
    `,
  }))
