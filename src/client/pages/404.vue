<template>
  <main class="page page--404" role="main">
    <h1>404</h1>
    <h3>Page not found</h3>
  </main>
</template>

<script>
  export default {
    transition: { mode: '' },
    head() {
      return {
        title: 'Page not found | Vincent van Dijck',
      }
    },
  }
</script>
