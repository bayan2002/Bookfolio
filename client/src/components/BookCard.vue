<script setup>
import BookDialog from "./BookDialog.vue";
import axios from "../utils/axios";
import { IconStarOutline, IconStar } from "@iconify-prerendered/vue-mdi";

const props = defineProps({
  book: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update-book", "delete-book"]);

const deleteBook = async () => {
  try {
    const response = await axios.delete(`/book/${props.book.id}`);
    const { data } = response.data;
    emit("delete-book", data);
  } catch (error) {
    console.log("error: ", error);
  }
};
const handelUpdateStar = async () => {
  try {
    const response = await axios.put(`/book/${props.book.id}`, {
      starred: !props.book.starred,
    });
    const { data } = response.data;
    emit("update-book", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

const handleUpdateBook = (updatedBook) => {
  emit("update-book", updatedBook);
};
</script>

<template>
  <v-card class="mx-auto card" max-width="374">
    <v-img cover height="280" :src="book.imageLink">
      <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark" class="toolbar">
        <template v-slot:append class="tes">
          <v-icon
            size="38"
            :icon="book.starred ? IconStar : IconStarOutline"
            color="#ffe133"
            @click="handelUpdateStar"
          />
        </template> </v-toolbar
    ></v-img>

    <v-card-item>
      <v-card-title class="title">{{ book.title }}</v-card-title>
      <v-card-subtitle>
        <span class="">{{ book.category }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="my-1 text-subtitle-1">
        <span class="author">Author : </span>{{ book.author }}
      </div>

      <div>{{ book.description }}</div>
    </v-card-text>

    <v-card-actions>
      <BookDialog mode="edit" :book="book" @update-book="handleUpdateBook" />
      <v-btn color="deep-purple-lighten-2" @click="deleteBook" variant="text">
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card {
  min-width: 358px;
  width: 300px;
  height: 523px;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card:hover {
  transform: translateY(-2%);
}
.title,
.author {
  color: var(--primary-color);
  font-weight: 600;
}
.v-card-actions {
  position: absolute;
  bottom: 0px;
  left: 55%;
}

@media (max-width: 370px) {
  .card {
    min-width: 280px;
    width: 291px;
  }
}
</style>
