<template>
  <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4">
    <b-card-group>
        <ResultItem v-for="result in results" 
        :item="result" :key="result.listingId"/>
    </b-card-group>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import ResultItem from '@/components/ResultItem.vue'
export default {
  components: {
    ResultItem,
  },
  computed: {
    ...mapState(['results'])
  }
}
</script>