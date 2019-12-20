<template>
  <div class="layout layout--error">
    <main class="page page--error" role="main">
      <img src="/svg/error-logo.svg" alt="error logo">
      <h3>An error occurred.</h3>
    </main>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.$parent.$el.classList.add('loaded')
    },
    head() {
      return {
        title: `${this.error.statusCode} - An error occurred | Vincent van Dijck`,
      }
    },
  }
</script>
