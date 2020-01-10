export default {
    SET_RESULTS(state, data) {
      state.results = data;
    },
  
    SET_FACETS(state, data) {
      state.facets = data;
    },
  
    SET_RESULTS_COUNT(state, count) {
      state.resultsCount = count;
    }
  };