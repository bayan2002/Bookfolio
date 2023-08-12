<script setup>
import { ref } from "vue";
import {
  IconMenu,
  IconBookshelf,
  IconAccount,
  IconLogOut,
  IconStar,
} from "@iconify-prerendered/vue-mdi";
import { RouterView } from "vue-router";
import SearchInput from "../components/SearchInput.vue";
import HomeFooter from "../components/HomeFooter.vue";
import axios from "../utils/axios";

const drawer = ref(false);
const fullName = ref();
const searchResults = ref([]);


const fetchUserData = () => {
  axios
    .get("/user")
    .then((res) => {
      const { user } = res.data.data;
      fullName.value = `${user.firstName} ${user.lastName}`;
      return null;
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

// Fetch user data on page load
fetchUserData();

const logout = () => {
  console.log("enter logout");
  localStorage.removeItem("token");
};

const navigationLinks = [
  {
    icon: IconBookshelf,
    title: "My Books",
    value: "books",
    link: "/user/books",
  },
  // {
  //   icon: IconAccount,
  //   title: "My Account",
  //   value: "account",
  //   link: "/user/profile",
  // },
  {
    icon: IconStar,
    title: "Starred",
    value: "starredBooks",
    link: "/user/starred",
  },
  {
    icon: IconLogOut,
    title: "Log Out",
    value: "logout",
    link: "/",
    click: logout,
  },
];
const handleSearchBooks = (results) => {
  console.log("results: ", results);
  searchResults.value = results;
  console.log("searchResults.value: ", searchResults.value);
};
</script>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app permanent class="drawer">
      <template v-slot:prepend>
        <v-list-item lines="three">
          <template v-slot:prepend class="pt-10">
            <img src="../assets/open-book.png" alt="Logo" class="pt-1" />
          </template>
          <v-list-item-title class="pl-3">{{ fullName }}</v-list-item-title>
          <v-list-item-subtitle class="pl-3 caption">
            <span class="app-name">BOOKFOLIO</span>
            - Your Best Personal Book Manager Ever!
          </v-list-item-subtitle>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="link in navigationLinks"
          :to="link.link"
          :prepend-icon="link.icon"
          :title="link.title"
          :value="link.value"
          @click="link?.click"
          color="var(--primary-color)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Header Bar -->
    <v-app-bar
      color="var(--primary-color)"
      rounded
      extension-height
      scroll-behavior="hide"
      scroll-threshold="22"
      :style="{ 'max-width': drawer ? '78%' : '96.5%' }"
      class="header"
    >
      <template v-slot:prepend>
        <v-icon
          @click="drawer = !drawer"
          class="menu-icon"
          :icon="IconMenu"
        ></v-icon>
      </template>

      <v-app-bar-title>BOOKFOLIO</v-app-bar-title>

      <v-spacer></v-spacer>

      <SearchInput @search-books="handleSearchBooks"></SearchInput>
    </v-app-bar>

    <v-main>
      <RouterView :searchResults="searchResults"></RouterView>
      <HomeFooter />
    </v-main>
  </v-app>
</template>

<style>
#inspire {
  background-color: var(--secondary-background-color);
}
.drawer,
.footer {
  background-color: #fdf5f5;
}
.caption {
  font-size: 0.75rem;
}
.app-name {
  color: var(--primary-color);
}
.menu-icon {
  font-size: 2rem;
  margin: 0 0.5rem;
  cursor: pointer;
}
.logo {
  width: 2rem;
  height: 2rem;
}
.header {
  margin: 1rem 1.5rem;
}
.v-toolbar-title,
.v-toolbar__prepend {
  color: #ffff;
}

/* Media query for mid & small screens */
@media (max-width: 770px) {
  .menu-icon {
    display: inline;
  }
}
@media (max-width: 940px) {
  .header {
    margin: 0.5rem 0.7rem;
  }
}
</style>
