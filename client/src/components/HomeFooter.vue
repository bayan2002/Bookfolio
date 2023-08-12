<script setup>
import { IconHeart } from "@iconify-prerendered/vue-mdi";
</script>

<template>
  <v-footer border class="footer">
    <span class="d-flex align-center">
      &copy; 2023 Made With
      <v-icon
        color="var(--primary-color)"
        class="mx-1"
        size="1.25rem"
        :icon="IconHeart"
      ></v-icon>
      By
      <a
        href="https://www.linkedin.com/in/bayan-abd-el-bary"
        target="_blank"
        rel="noopener noreferrer"
        class="ms-1 link"
        >Bayan Abd El Bary</a
      >
    </span></v-footer
  >
</template>
<style scoped>
.link {
  color: var(--primary-color);
}
</style>
