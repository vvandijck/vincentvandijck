import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
import __NAME_PASCAL__ from './__NAME_KEBAB__.vue'

import docs from './README.md'
import '../app-core/index.css'

Vue.component('__NAME_KEBAB__', __NAME_PASCAL__)

const componentDecorator = () => {
  const style = 'width: 100%; height: auto; min-height: 100vh; padding: 32px;'

  return {
    template: `<div style="${style}"><story /></div>`,
  }
}

storiesOf('Components/__NAME_START__', module)
  .addDecorator(componentDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(docs))
  .add('Default', () => ({
    template: `
      <__NAME_KEBAB__ />
    `,
  }))
