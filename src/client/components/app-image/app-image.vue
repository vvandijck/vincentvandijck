<template>
  <figure v-lazyload class="app-image">
    <img :width="width"
         :height="height"
         :data-url="source"
         alt="">
  </figure>
</template>

<script>
  import LazyLoad from '../../plugins/LazyLoad'

  export default {
    directives: {
      lazyload: LazyLoad,
    },
    props: {
      height: {
        type: String,
        default: '',
      },
      source: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '',
      }
    },
  }
</script>

<style>
  @import '../app-core/variables.css';

  .app-image {
    display: inline-block;
    height: 100%;
  }

  .app-image img {
    display: block;
    transition: opacity .3s ease-in-out;
    opacity: 0;
    will-change: opacity;
  }

  .app-image.loaded img {
    opacity: 1;
  }
</style>
