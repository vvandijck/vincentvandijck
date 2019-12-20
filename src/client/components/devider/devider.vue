<template>
  <div class="devider">
    <svg class="devider__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40">
      <path v-if="inverted" fill="#fff" fill-rule="evenodd" d="M1440 40C1308.2 14.4 1114.5 1.5 859 1.5S317.1 10 0 27V0h1440v40z" clip-rule="evenodd" />
      <path v-if="!inverted" fill="#fff" fill-rule="evenodd" d="M0 0c132 26 325.7 39 581 39s541.7-8.6 859-25.8V40H0V0z" clip-rule="evenodd" />
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

  .devider {
    margin: 0 0 -1px;
  }

  .devider__image {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
