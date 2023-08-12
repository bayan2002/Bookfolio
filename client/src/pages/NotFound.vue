<script setup>
import router from "../router";
</script>
<template>
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <v-btn class="btn" variant="outlined" @click="router.push('/user/books')">
      Go To Home
    </v-btn>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 200px;
}
h1,
.btn {
  color: var(--primary-color);
  margin: 2rem;
}
</style>
