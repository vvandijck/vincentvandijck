<template>
  <main class="page page--home" role="main">
    <h1>Hi, I'm <span style="color: blue;">Vincent</span>.<br>I'm a Front-end Developer.</h1>
  </main>
</template>

<script>
  export default {
    transition: { mode: 'out-in' },
    head() {
      return {
        title: 'Vincent van Dijck',
      }
    },
  }
</script>
