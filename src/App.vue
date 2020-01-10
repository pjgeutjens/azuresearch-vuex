<template>
  <div id="app">
    Home
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('executeSearch');
  }
}
</script>