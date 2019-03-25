import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import AppImage from './app-image.vue'

import docs from './README.md'
import '../app-core/index.css'

Vue.component('app-image', AppImage)

const componentDecorator = () => {
  const style = 'width: 100%; height: auto; min-height: 100vh; padding: 32px;'

  return {
    template: `<div style="${style}"><story /></div>`,
  }
}

storiesOf('Components/App Image', module)
  .addDecorator(componentDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(docs))
  .add('Default', () => ({
    template: `
      <app-image width="320" height="320" source="http://i.pravatar.cc/320?img=1" />
    `,
  }))
