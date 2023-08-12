<script setup>
import {
  IconFacebook,
  IconTwitter,
  IconGoogle,
} from "@iconify-prerendered/vue-mdi";

const authProviders = [
  {
    icon: IconFacebook,
    color: "#4267b2",
  },
  {
    icon: IconGoogle,
    color: "#dd4b39",
  },
  {
    icon: IconTwitter,
    color: "#1da1f2",
  },
];
</script>

<template>
  <div class="buttons-container">
    <v-btn
      v-for="auth in authProviders"
      :key="auth.icon"
      :style="{ color: auth.color }"
      icon
      variant="tonal"
      size="38"
      class="rounded"
    >
      <v-icon size="18" :icon="auth.icon" />
    </v-btn>
  </div>
</template>

<style scoped>
.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
