<template>
  <img class="app-icon"
       :class="{ 'app-icon--large': isLarge }"
       :src="`/icons/${name}.svg`"
       :alt="alt">
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      isLarge: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style>
  @import '../app-core/variables.css';

  .app-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
</style>
