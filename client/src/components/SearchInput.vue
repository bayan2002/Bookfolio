<script setup>
import { ref } from "vue";
import { IconSearch } from "@iconify-prerendered/vue-mdi";
import axios from "../utils/axios";
import { onBeforeRouteUpdate } from "vue-router";
import { store } from '../store.js'
           
const searchText = ref("");
const searchTimeout = ref(null);

const fetchSearchResult = async (searchText) => {
  try {
    const response = await axios.get(`/book/search?query=${searchText}`);
    const { data } = response.data;
    store.updateSearch(data)
  } catch (error) {
    console.log(error);
  }
};
const handleSearchChange =  () => {
  clearTimeout(searchTimeout.value);
  searchTimeout.value = setTimeout(() => {
    fetchSearchResult(searchText.value);
  }, 3000);
};

onBeforeRouteUpdate(() => {
  searchText.value = "";
});
</script>

<template>
  <v-text-field
    density="compact"
    variant="solo"
    label="Search Books"
    :prepend-inner-icon="IconSearch"
    single-line
    hide-details
    v-model="searchText"
    @input="handleSearchChange"
    @click:append-inner=""
    class="searchInput"
    style="max-width: 300px; margin-right: 1rem"
  ></v-text-field>
</template>

<style>
.searchInput {
  max-width: 300px;
  margin-right: 1rem;
}
.v-field.v-field--prepended {
  background-color: var(--secondary-background-color);
  color: var(--primary-color);
}
</style>
