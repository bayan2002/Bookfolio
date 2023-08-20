import { reactive } from "vue";

export const store = reactive({
  searchResult: [],
  updateSearch(newResult) {
    this.searchResult = newResult;
  },
});
