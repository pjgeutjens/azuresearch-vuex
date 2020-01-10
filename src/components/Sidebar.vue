<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      {{resultsCount}} results found
    </div>
  </nav>
</template>
<script>
  import { mapState } from 'vuex';
  export default {  
    computed: {
      ...mapState(['resultsCount'])
    }
  }
</script>