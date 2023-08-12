<script setup>
import { ref, watch, nextTick } from "vue";
import BookCard from "../components/BookCard.vue";
import BookDialog from "../components/BookDialog.vue";
import axios from "../utils/axios";

const props = defineProps({
  searchResults: {
    type: Array,
    default: () => [],
  },
  api: {
    type: String,
    required: true,
  },
});

const bookList = ref([]);
const loading = ref(false);

const fetchBookList = async () => {
  loading.value = true;
  console.log("props.api: ", props.api);
  try {
    const response = await axios.get(props.api);
    const { data } = response.data;
    loading.value = false;
    bookList.value = data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// Fetch Book's on page load
fetchBookList();

const handleAddNewBook = (book) => {
  bookList.value.unshift(book);
};
const handleDeleteBook = (book) => {
  bookList.value = bookList.value.filter(
    (bookFilter) => bookFilter.id !== book.id
  );
};
const handleUpdateBook = (updatedBook) => {
  if (props.api === "/book") {
    bookList.value = bookList.value.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
  } else {
    bookList.value = bookList.value.filter(
      (bookFilter) => bookFilter.id !== updatedBook.id
    );
  }
};

watch(
  () => props.searchResults,
  (newValue) => {
    console.log("new value:", newValue);

    // to ensure the dom is updated after changes
    nextTick(() => {
      if (props.api === "/book") {
        bookList.value = [...newValue];
      } else {
        bookList.value = newValue.filter(
          (bookFilter) => bookFilter.starred !== false
        );
      }
    });
  },
  { immediate: true }
);
watch(
  () => props.api,

  (newValue) => {
    console.log("new value:", newValue);

    // to ensure the dom is updated after changes
    nextTick(() => {
      fetchBookList();
    });
  },
  { immediate: true }
);
</script>
<template>
  <v-container class="pt-12">
    <BookDialog
      v-if="props.api === '/book'"
      mode="add"
      @add-new-book="handleAddNewBook"
    />
    <div v-if="loading" class="loading">
      <h1>Loading...</h1>
    </div>

    <v-row class="d-flex justify-space-between mb-6">
      <v-col
        v-if="!loading"
        v-for="book in bookList"
        class="ma-2 pa-2"
        :key="book.id"
      >
        <BookCard
          :book="book"
          @update-book="handleUpdateBook"
          @delete-book="handleDeleteBook"
        />
      </v-col>
    </v-row>
    <v-row v-if="bookList.length === 0 && !loading" class="no-data">
      <v-col>
        <h1>
          {{
            props.api === "/book"
              ? "You Don't Have Any Book!"
              : "You Don't Have Any Starred Books!"
          }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.no-data,
.loading {
  max-width: 100%;
  width: 100%;
  height: 77.5vh;
}

h1 {
  margin: 15% 20%;
  color: var(--primary-color);
}
</style>
