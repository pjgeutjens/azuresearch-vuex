/* eslint-disable no-unused-vars */
import searchClient from "@/services/azsearch.service";

export default {
  executeSearch({ state, commit }) {
    searchClient.search(
      "realestate-us-sample-index",
      {
        search: `${state.searchString}`,
        filter: `${state.filterString}`,
        facets: ["beds", "baths", "type"],
        count: true
      },
      (err, results, raw) => {
        commit("SET_RESULTS", results);
        commit("SET_RESULTS_COUNT", raw["@odata.count"]);
        commit("SET_FACETS", raw["@search.facets"]);
      }
    );
  },

  setSearchString({ dispatch, commit }, value = "*") {
    commit("SET_SEARCHSTRING", value);
    dispatch("executeSearch");
  },

  setFilter({ dispatch, commit }, payload) {
    commit("SET_FILTERS", payload);
    dispatch("executeSearch");
  },

  clearFilters({ commit }) {
    commit("CLEAR_FILTERS");
  }
};