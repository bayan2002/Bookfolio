<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <!-- Left section with illustration -->
    <div class="left-sec">
      <div class="inner-sec">
        <img
          class="illustration"
          src="../assets/bookfolio3.png"
          alt="Illustration"
        />
      </div>
    </div>

    <!-- Right section with login/signup form -->
    <div class="right-sec">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/* Container styles */
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: var(--background-color);
}
.right-sec,
.left-sec {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
}
.inner-sec {
  margin-top: 5rem;
}

/* Media query for mid & small screens */
@media (max-width: 940px) {
  .left-sec {
    display: none;
  }
  .right-sec {
    width: 100%;
  }
}
</style>
