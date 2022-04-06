<template>
<div class="flex justify-center bg-gray">
    <div class="w-90 h-full rounded mt-14" id="sign">
      <div
        id="toast"
        class="
          absolute
          right-0
          top-0
          m-5
          flex
          items-center
          p-4
          mb-4
          w-full
          max-w-xs
          text-gray-500
          bg-gray-200
          rounded-lg
          shadow
          dark:text-gray-400 dark:bg-gray-800
          hidden
        "
        role="alert"
      >
        <div
          class="
            inline-flex
            flex-shrink-0
            justify-center
            items-center
            w-8
            h-8
            text-green-500
            bg-green-100
            rounded-lg
            dark:bg-green-800 dark:text-green-200
          "
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="ml-3 text-sm font-normal"
          >Password Request Successfully Sent!</span
        >
      </div>
      <div
        class="
          max-w-md
          mx-auto
          bg-gray-50
          rounded-xl
          shadow-md
          overflow-hidden
          md:max-w-3xl
        "
      >
        <div class="md:flex">
          <div class="p-8 md:max-w-sm mx-auto">
            <h6 class="text-2xl mt-3 text-center font-extrabold text-gray-900">
              Reset Your Password
            </h6>
            <p class="text-xs font-thin text-center mt-4">
              Enter your new password here
            </p>
             <form class="mt-2 space-y-6" @submit.prevent="handleSubmit">
              <input type="hidden" name="remember" value="true" />
              <div class="relative mt-2">
                <label for="password " class="sr-only text-gray-600 block"
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
                  class="
                    appearance-none
                    rounded
                    block
                    w-full
                    px-7
                    py-3
                    bg-neutral-200
                    border border-gray-300
                    placeholder-gray-500
                    text-gray-900
                    focus:z-10
                    sm:text-sm
                  "
                  placeholder="Password"
                />
              </div>
              <div class="relative mt-2">
                <label for="password " class="sr-only text-gray-600 block"
                  >Password Confirmation:</label
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
                  v-model="password_confirmation"
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  class="
                    appearance-none
                    rounded
                    block
                    w-full
                    px-7
                    py-3
                    bg-neutral-200
                    border border-gray-300
                    placeholder-gray-500
                    text-gray-900
                    focus:z-10
                    sm:text-sm
                  "
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="
                    group
                    relative
                    w-full
                    flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-gray-600
                    hover:bg-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("reset", {
        password: this.password,
        password_confirmation: this.password_confirmation,
        token: this.$route.params.token,
      });
      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>
<style>
</style>