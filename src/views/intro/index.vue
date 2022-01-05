<template>


  <article class="markdown-body" v-html="md">

  </article>

</template>

<script>
import md from '@/markdown/intros.md';

export default {
  name: 'Intro',
  data() {
    return {
      md,
      d: '<h1>23123</h1>'
    };
  }
};
</script>

<style lang="scss" scoped>

</style>