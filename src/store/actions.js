/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import searchClient from "@/services/azsearch.service";

export default {
  executeSearch({ commit }) {
    searchClient.search(
      "realestate-us-sample-index",
      {
        search: `*`,
        count: true
      },
      (err, results, raw) => {
        console.log(raw);
      }
    );
  }
};