import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { withKnobs, select } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import AppIcon from './app-icon.vue'

import docs from './README.md'
import '../app-core/index.css'

Vue.component('app-icon', AppIcon)

const componentDecorator = () => {
  const style = 'width: 100%; height: auto; min-height: 100vh; padding: 32px;'

  return {
    template: `<div style="${style}"><story /></div>`,
  }
}

const icons = [
  'icon-apple',
  'icon-atom',
  'icon-bitbucket',
]

storiesOf('Components/App Icon', module)
  .addDecorator(componentDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(docs))
  .add('Default', () => ({
    props: {
      name: {
        type: String,
        default: select('icon name', icons, 'icon-apple'),
      },
      alt: {
        type: String,
        default: '',
      },
    },
    template: `
      <app-icon :name="name" :alt="alt" />
    `,
  }))
  .add('In text', () => ({
    props: {
      name: {
        type: String,
        default: select('icon name', icons, 'icon-apple'),
      },
      alt: {
        type: String,
        default: '',
      },
    },
    template: `
      <p class="h1">Look! <app-icon :name="name" :alt="alt" /> An icon in text.</p>
    `,
  }))
