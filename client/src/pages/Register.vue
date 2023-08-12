<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from "../utils/validation";
import {
  IconEyeOutline,
  IconEyeOffOutline,
} from "@iconify-prerendered/vue-mdi";
import axios from "../utils/axios";
import router from "../router";
import AuthProviders from "../components/AuthProviders.vue";

const refForm = ref();
const firstName = ref();
const lastName = ref();
const email = ref();
const password = ref();
const isPasswordVisible = ref(false);

const emailError = ref(undefined);

const register = async () => {
  try {
    const response = await axios.post("/auth/signup", {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    });

    const { token } = response.data;
    localStorage.setItem("token", token);

    router.push("/user/books");
  } catch (error) {
    emailError.value = error.response.data.message;
  }
};

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) register();
  });
};
</script>
<template>
  <v-card flat :max-width="500" class="card">
    <v-card-text>
      <img class="logo" src="../assets/open-book.png" alt="logo" />

      <h5>Adventure starts here 🚀</h5>
      <p>Make your books management easy and fun!</p>
    </v-card-text>
    <v-card-text>
      <v-form ref="refForm" @submit.prevent="onSubmit">
        <v-row>
          <!-- first name -->
          <v-col cols="12">
            <v-text-field
              v-model="firstName"
              autofocus
              :rules="[requiredValidator]"
              label="First Name"
            />
          </v-col>
          <!-- last name -->
          <v-col cols="12">
            <v-text-field
              v-model="lastName"
              :rules="[requiredValidator]"
              label="Last Name"
            />
          </v-col>
          <!-- email -->
          <v-col cols="12">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :error-messages="emailError"
              :rules="[requiredValidator, emailValidator]"
            />
          </v-col>

          <!-- password -->
          <v-col cols="12">
            <v-text-field
              v-model="password"
              label="Password"
              :rules="[requiredValidator, passwordValidator]"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="
                isPasswordVisible ? IconEyeOffOutline : IconEyeOutline
              "
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />

            <v-btn block type="submit" class="submit"> Sign up </v-btn>
          </v-col>

          <!-- have account -->
          <v-col cols="12" class="text-center text-base">
            <span>Already have an account?</span>
            <RouterLink class="text-primary ms-2" :to="{ name: 'login' }">
              Sign in instead
            </RouterLink>
          </v-col>
          <v-col cols="12" class="d-flex align-center">
            <VDivider />
            <span class="mx-4">or</span>
            <VDivider />
          </v-col>

          <!-- auth providers -->
          <v-col cols="12" class="text-center">
            <AuthProviders />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.submit {
  background: var(--primary-color);
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 100;
  line-height: 2rem;
  color: white;
  font-family: "Roboto", sans-serif !important;
}
.card {
  max-width: 500px;
  padding-top: 2rem;
  background-color: var(--secondary-background-color);
}
h5 {
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}
h5 span {
  color: var(--primary-color);
}
p,
span {
  color: #050505b0;
  padding-top: 10px;
}
.logo {
  width: 2rem;
  height: 2rem;
}
.text-primary {
  color: var(--primary-color) !important;
  text-decoration: none;
  cursor: pointer;
}
</style>
