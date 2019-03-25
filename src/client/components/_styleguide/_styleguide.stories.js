import { storiesOf } from '@storybook/vue'
// import { withReadme } from 'storybook-readme'
// import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'

// import docs from './README.md'
import '../app-core/index.css'
import './_styleguide.css'

const componentDecorator = () => {
  const style = 'width: 100%; height: auto; min-height: 100vh; padding: 32px;'

  return {
    template: `<div style="${style}"><story /></div>`,
  }
}

storiesOf('Styleguide', module)
  .addDecorator(componentDecorator)
  .add('Colors', () => {
    const colors = [
      { 'name': '--color-bayoux', 'value': '#536976' },
      { 'name': '--color-gum-leaf', 'value': '#BBD2C5' },
      { 'name': '--color-white', 'value': '#FFFFFF' },
      { 'name': '--color-platinum', 'value': '#E6E8E6' },
      { 'name': '--color-pastel-gray', 'value': '#CED0CE' },
      { 'name': '--color-eerie-black', 'value': '#191919' },
    ]

    return {
      template: `
        <section class="styleguide__tiles">
          ${colors.map(color => `
            <div class="styleguide__tile">
              <span class="styleguide__tile-color" style="background-color: ${color.value};"></span>
              <span class="styleguide__tile-name">${color.name}</span>
              <code class="styleguide__tile-name">${color.value}</code>
            </div>
          `).join('')}
        </section>
      `
    }
  })
  .add('Lists', () => ({
    template: `
      <section>
        <p class="preview-name">Flat list</p>
        <ul class="flat-list">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
        <p class="preview-name">Inline list</p>
        <ul class="inline-list">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </section>
    `
  }))
  .add('Typography', () => {
    const fonts = [
      { 'name': 'Cereal Black', 'weight': '700' },
      { 'name': 'Cereal Extra Bold', 'weight': '600' },
      { 'name': 'Cereal Bold', 'weight': '500' },
      { 'name': 'Cereal Medium', 'weight': '400' },
      { 'name': 'Cereal Book', 'weight': '300' },
      { 'name': 'Cereal Light', 'weight': '200' },
    ]
    const style = `
      font-size: 82px;
      line-height: 1;
      text-align: center;
      margin-bottom: 16px;`

    return {
      template: `
        <section>
          <p class="preview-name">Fonts</p>
          <section class="styleguide__tiles">
            ${fonts.map(font => `
              <div class="styleguide__tile">
                <div style="
                  ${style}
                  font-family: ${font.name};
                  font-weight: ${font.weight};">Aa</div>
                <span class="styleguide__tile-name">${font.name}</span>
                <span class="styleguide__tile-name">${font.weight}</span>
              </div>
            `).join('')}
          </section>
          <p class="preview-name">Heading 1</p>
          <h1>Sed tincidunt rutrum ligula et rhoncus</h1>
          <p class="preview-name">Heading 2</p>
          <h2>Sed tincidunt rutrum ligula et rhoncus</h2>
          <p class="preview-name">Heading 3</p>
          <h3>Sed tincidunt rutrum ligula et rhoncus</h3>
          <p class="preview-name">Heading 4</p>
          <h4>Sed tincidunt rutrum ligula et rhoncus</h4>
          <p class="preview-name">Heading 5</p>
          <h5>Sed tincidunt rutrum ligula et rhoncus</h5>
          <p class="preview-name">Heading 6</p>
          <h6>Sed tincidunt rutrum ligula et rhoncus</h6>
          <p class="preview-name">Paragraph</p>
          <p>Lorem ipsum dolor sit amet. <em>Duis sit amet nulla a ex lobortis
            varius id quis orci</em>. Pellentesque interdum imperdiet urna. <strong>Vestibulum est nunc, blandit non accumsan facilisis,
            sollicitudin sed nisl</strong>. Vivamus hendrerit, est at rhoncus rhoncus,
            enim nisi suscipit neque. <a href="#" title="Aenean porta congue posuere">Aenean porta congue posuere</a>. Etiam eget fermentum tortor.
            Phasellus <strike>pellentesque felis eu sapien</strike> sollicitudin ullamcorper.</p>
          <p class="preview-name">Paragraph - ellipsis</p>
          <p class="ellipsis">Lorem ipsum dolor sit amet. Duis sit amet nulla a ex lobortis
            varius id quis orci. Pellentesque interdum imperdiet urna. Vestibulum est nunc, blandit non accumsan facilisis,
            sollicitudin sed nisl. Vivamus hendrerit, est at rhoncus rhoncus,
            enim nisi suscipit neque. Aenean porta congue posuere. Etiam eget fermentum tortor.
            Phasellus pellentesque felis eu sapien sollicitudin ullamcorper.</p>
        </section>
      `
  }})
