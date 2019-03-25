<template>
  <footer class="app-footer">
    <devider :inverted="true" />
    <div class="app-footer__content">
      <p class="app-footer__copyright">Made with ♥️</p>
    </div>
  </footer>
</template>

<script>
  import { Devider } from '~/components'

  export default {
    components: { Devider },
  }
</script>

<style scoped>
  .app-footer {
    flex: 0 1 auto;
    background: linear-gradient(to right, var(--color-gum-leaf), var(--color-bayoux));
    color: var(--color-white);
  }

  .app-footer__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-double);
  }

  .app-footer__copyright {
    margin: 0;
  }
</style>
