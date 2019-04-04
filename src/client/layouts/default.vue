<template>
  <div class="layout" :class="`layout--${activePage}`">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { AppFooter, AppHeader } from '~/components'

  export default {
    components: { AppFooter, AppHeader },
    computed: mapState(['activePage']),
    mounted() {
      this.$parent.$el.classList.add('loaded')
    },
  }
</script>

<style>
  @import '../components/app-core/index.css';
</style>
