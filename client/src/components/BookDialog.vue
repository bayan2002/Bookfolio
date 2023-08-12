<script setup>
import { ref } from "vue";
import { IconPlusBold, IconCheckCircle } from "@iconify-prerendered/vue-mdi";
import { urlValidator, requiredValidator } from "../utils/validation";
import axios from "../utils/axios";

const emit = defineEmits(["add-new-book", "update-book"]);
const { mode, book: initialBook } = defineProps(["mode", "book"]);

const categories = [
  "Fantasy",
  "Classic",
  "Memoir",
  "History",
  "Dystopian",
];

const dialog = ref(false);
const refForm = ref();
const title = ref(initialBook?.title || "");
const category = ref(initialBook?.category || "");
const author = ref(initialBook?.author || "");
const image = ref(initialBook?.imageLink || "");
const description = ref(initialBook?.description || "");
const snackbar = ref(false);

const handleEditClose = () => {
  dialog.value = false;
};
const handleAddClose = () => {
  dialog.value = false;
  title.value = "";
  category.value = "";
  author.value = "";
  image.value = "";
  description.value = "";
};

const createNewBook = async () => {
  try {
    const response = await axios.post("/book", {
      title: title.value,
      category: category.value,
      author: author.value,
      imageLink: image.value,
      description: description.value,
    });
    const { data } = response.data;
    emit("add-new-book", data);
    snackbar.value = true;
    handleAddClose();
  } catch (error) {
    console.log("error: ", error);
  }
};
const updateBook = async () => {
  try {
    const response = await axios.put(`/book/${initialBook.id}`, {
      title: title.value,
      category: category.value,
      author: author.value,
      imageLink: image.value,
      description: description.value,
    });
    const { data } = response.data;
    emit("update-book", data);
    snackbar.value = true;
    handleEditClose();
  } catch (error) {
    console.log("error: ", error);
  }
};
const submitForm = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      if (mode === "add") {
        createNewBook();
      } else if (mode === "edit") {
        updateBook();
      }
    }
  });
};
</script>

<template>
  <v-row class="btn-div">
    <v-dialog v-model="dialog" persistent width="1024" class="dialog">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          :prepend-icon="mode === 'add' ? IconPlusBold : ''"
          :variant="mode === 'add' ? 'tonal' : 'text'"
          :rounded="mode === 'add'"
          color="var(--primary-color)"
          location="left"
          :class="mode === 'add' ? 'rounded-pill' : ''"
        >
          {{ mode === "add" ? "Add New Book" : "Edit" }}
        </v-btn>
      </template>
      <v-card class="dialog-card">
        <v-card-text>
          <h1 class="title">
            {{ mode === "add" ? "Add New Book" : "Edit Book" }}
          </h1>
          <p>
            {{
              mode === "add"
                ? "Enhance your collection by adding a new book!"
                : "Update the book details"
            }}
          </p>
        </v-card-text>
        <v-card-text>
          <v-form ref="refForm">
            <v-row>
              <!-- title -->
              <v-col cols="12" sm="6">
                <v-text-field
                  variant="outlined"
                  v-model="title"
                  autofocus
                  :rules="[requiredValidator]"
                  label="Title"
                />
              </v-col>
              <!-- category -->
              <v-col cols="12" sm="6">
                <v-select
                  variant="outlined"
                  v-model="category"
                  :items="categories"
                  :rules="[requiredValidator]"
                  label="Category"
                  required
                />
              </v-col>
              <!-- author -->
              <v-col cols="12" sm="6">
                <v-text-field
                  variant="outlined"
                  v-model="author"
                  :rules="[requiredValidator]"
                  label="Author"
                />
              </v-col>
              <!-- image -->
              <v-col cols="12" sm="6">
                <v-text-field
                  variant="outlined"
                  v-model="image"
                  :rules="[requiredValidator, urlValidator]"
                  label="Image Link"
                />
              </v-col>
              <!-- description -->
              <v-col cols="12">
                <v-textarea
                  variant="outlined"
                  v-model="description"
                  :rules="[requiredValidator]"
                  label="Description"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <!-- actions -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="var(--primary-color)"
            variant="text"
            class="rounded-pill large-font"
            @click="mode === 'add' ? handleAddClose() : handleEditClose()"
          >
            Close
          </v-btn>
          <v-btn
            color="var(--primary-color)"
            variant="text"
            class="rounded-pill large-font"
            type="submit"
            @click="submitForm"
          >
            {{ mode === "add" ? "Save" : "Update" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-snackbar v-model="snackbar" timeout="3000">
    {{
      mode === "add"
        ? "New Book Added Successfully"
        : "Book Updated Successfully"
    }}
    <v-icon color="green" class="ml-3" :icon="IconCheckCircle"></v-icon>
  </v-snackbar>
</template>

<style scoped>
.btn-div {
  display: flex;
  justify-content: end;
  margin-right: 0.2rem;
  margin-top: 1rem;
}
.dialog-card {
  background-color: #f6f1f1 !important;
}
.title {
  color: var(--primary-color);
}
.large-font {
  font-size: 18px;
  font-weight: 600;
}
/* Media query for mid & small screens */
@media (max-width: 770px) {
  .btn-div {
    justify-content: center;
  }
}
</style>
