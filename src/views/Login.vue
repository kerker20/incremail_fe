<template>
  <div class="flex justify-center bg-gray-800">
    <div class="w-full h-full rounded" id="sign">
      <div
        class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl"
      >
        <div class="md:flex">
          <div class="p-8 md:max-w-sm mx-auto">
            <div
              id="toast-danger"
              class="flex items-center w-80 p-2 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute hidden"
              role="alert"
            >
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="ml-6 text-sm font-normal my-0.5" id="alert">{{
                error
              }}</span>
            </div>
            <div class="text-md text-black-500 font-semibold mt-2">
              Don't have an account?
              <router-link
                :to="'/register'"
                class="font-medium text-indigo-400 hover:text-blue-700"
                >Register an Account</router-link
              >
            </div>
            <h6 class="text-2xl mt-3 text-center font-extrabold text-gray-900">
              Log in to Incremail
            </h6>
            <form class="mt-2 space-y-6" @submit.prevent="handleSubmit">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div class="relative mb-2">
                  <label
                    for="email-address"
                    class="sr-only relative text-gray-600 block"
                    >Email address</label
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 absolute mt-3 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    v-model="email"
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required=""
                    class="appearance-none rounded block w-full px-7 py-3 bg-neutral-200 border border-gray-300 placeholder-gray-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div class="relative">
                  <label
                    for="password "
                    class="sr-only relative text-gray-600 block"
                    >Password</label
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 absolute mt-3 mx-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    v-model="password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none rounded block w-full px-7 py-3 bg-neutral-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <router-link
                :to="'/forgot'"
                class="content-end text-xs text-neutral-600 hover:text-indigo-500 underline"
                >Forgot your password?</router-link
              >
              <div>
              <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span id="loader" class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="currentColor"
                      class="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
                <!-- <div class="flex align-center justify-center">
                   <div
                  class="g-signin2 mt-5"
                  id="google-signin-button"
                  data-onsuccess="onSignIn"
                  data-theme="dark"
                ></div>
                </div> -->
              </div>
            </form>
          </div>

          <div class="md:shrink-0">
            <img
              class="md:max-w-md"
              src="../assets/signs.gif"
              alt="Man looking at item at a store"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script src="https://apis.google.com/js/platform.js" async defer></script> -->
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  // mounted() {
  //   gapi.signin2.render("google-signin-button", {
  //     onsuccess: this.onSignIn,
  //   });
  // },
  methods: {
    async handleSubmit() {
      try {
        var element = document.getElementById("loader");
        element.classList.add("animate-spin");
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        setTimeout(function () {
          element.classList.remove("animate-spin");
        }, 6000);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("data", response.data.user.name);
        localStorage.setItem("userID", response.data.user.id);
        this.$store.dispatch("user", response.data.user);
        window.location.href = "https://incremail-d8cdc.web.app/example";
      } catch (e) {
        var element = document.getElementById("loader");
        element.classList.remove("animate-spin");
        var ele = document.getElementById("toast-danger");
        document.getElementById("toast-danger").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 2000);
        this.error = "Invalid credentials in password/email!";
      }
    },

    // onSignIn(googleUser) {
    //   // Useful data for your client-side scripts:
    //   var profile = googleUser.getBasicProfile();
    //   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //   console.log("Full Name: " + profile.getName());
    //   console.log("Given Name: " + profile.getGivenName());
    //   console.log("Family Name: " + profile.getFamilyName());
    //   console.log("Image URL: " + profile.getImageUrl());
    //   console.log("Email: " + profile.getEmail());
    //   localStorage.setItem("data", profile.getName());

    //   // The ID token you need to pass to your backend:
    //   var id_token = googleUser.getAuthResponse().id_token;
    //   console.log("ID Token: " + id_token);
    //   window.location.href = "http://localhost:3001/example";
    // },

    // signOut() {
    //   var auth2 = gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function () {
    //     console.log("User signed out.");
    //   });
    // },
  },

};
</script>
<style scoped>
#sign {
  margin-top: 6.5%;
}
</style>
