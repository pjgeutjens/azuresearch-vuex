/* eslint-disable no-unused-vars */
import searchClient from "@/services/azsearch.service";

export default {
  executeSearch({ commit }) {
    searchClient.search(
      "realestate-us-sample-index",
      {
        search: `*`,
        facets: ["beds", "baths", "type"],
        count: true
      },
      (err, results, raw) => {
        commit("SET_RESULTS", results);
        commit("SET_RESULTS_COUNT", raw["@odata.count"]);
        commit("SET_FACETS", raw["@search.facets"]);
      }
    );
  }
};