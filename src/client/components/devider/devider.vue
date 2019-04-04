<template>
  <div class="devider">
    <svg class="devider__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
      <path v-if="inverted" fill="#fff" fill-rule="evenodd" d="M1440 80C1308.2 28.7 1114.5 3 859 3S317.1 20 0 54V0h1440v80z" clip-rule="evenodd" />
      <path v-if="!inverted" fill="#fff" fill-rule="evenodd" d="M0 0c132 52 325.7 78 581 78s541.7-17.2 859-51.6V80H0V0z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      inverted: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style>
  @import '../app-core/variables.css';

  .devider__image {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
