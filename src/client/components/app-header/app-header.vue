<template>
  <header class="app-header">
    <div class="app-header__content">
      <nuxt-link to="/" class="app-header__logo">
        <img class="app-header__logo-image" :src="'/svg/logo.svg'" alt="logo">
      </nuxt-link>
      <nav class="app-header__menu inline-list">
        <ul>
          <li class="app-header__link">
            <nuxt-link to="/about/">About</nuxt-link>
          </li>
          <li class="app-header__link">
            <nuxt-link to="/toolbox/">Toolbox</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <devider />
  </header>
</template>

<script>
  import { Devider } from '~/components'

  export default {
    components: { Devider },
  }
</script>

<style>
  @import '../app-core/variables.css';

  .app-header {
    flex: 0 1 auto;
    background: linear-gradient(to right, var(--color-gum-leaf), var(--color-bayoux));
  }

  .app-header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-default);
    max-width: var(--content-max-width);
    margin: 0 auto;
  }

  @media (min-width: 720px) {
    .app-header__content {
      padding: var(--spacing-double);
    }
  }

  .app-header__logo {
    display: inline-block;
    height: 20px;
  }

  @media (min-width: 720px) {
    .app-header__logo {
      height: 30px;
    }
  }

  @media (min-width: 1024px) {
    .app-header__logo {
      height: 40px;
    }
  }

  @media (min-width: 1280px) {
    .app-header__logo {
      height: 50px;
    }
  }

  @media (min-width: 1440px) {
    .app-header__logo {
      height: 60px;
    }
  }

  .app-header__logo-image {
    display: block;
    width: auto;
    height: 100%;
  }

  .app-header__menu li {
    padding: 0 0 0 var(--spacing-double);
  }

  .app-header__link a {
    color: var(--color-white);
    font-family: var(--font-alt-medium);
  }

  .app-header__link .nuxt-link-active {
    text-decoration: underline;
  }
</style>
