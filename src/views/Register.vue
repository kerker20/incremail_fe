<template>
  <div class="flex justify-center bg-gray">
    <div class="w-full h-full rounded mt-20" id="sign">
<div
        id="registerToast"
        class="absolute right-0 top-0 m-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-gray-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 hidden"
        role="alert"
      >
        <div
          class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
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
          >Successfully Registered!</span
        >
      </div>
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
          w-96
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
            text-red-500
            bg-red-100
            rounded-lg
            dark:bg-green-800 dark:text-green-200
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
</svg>
        </div>
        <span class="ml-3 text-sm font-normal"
          >{{ taken }}</span
        >
      </div>
      <div
        class="
          max-w-md
          mx-auto
          bg-white
          rounded-xl
          shadow-md
          overflow-hidden
          md:max-w-3xl
        "
      >
        <div class="md:flex">
          <div class="p-8 md:max-w-sm mx-auto">
            <div
              id="toast-danger"
              class="
                flex
                items-center
                w-76
                p-2
                text-gray-500
                bg-white
                rounded-lg
                shadow
                dark:text-gray-400 dark:bg-gray-800
                absolute
                hidden
              "
              role="alert"
            >
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-8
                  h-8
                  text-red-500
                  bg-red-100
                  rounded-lg
                  dark:bg-red-800 dark:text-red-200
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
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="ml-6 text-sm font-normal my-0.5" id="alert">{{ error }}</span>
            </div>
            <div class="text-md text-black-500 font-semibold mt-2">
              Already have an account?
              <router-link
                :to="'/'"
                class="font-medium text-indigo-400 hover:text-blue-600"
                >Login to your Account</router-link
              >
            </div>
            <h6 class="text-2xl mt-3 text-center font-extrabold text-gray-900">
              Register to Incremail
            </h6>
            <form class="mt-3 space-y-6" @submit.prevent="handleSubmit">
              <input type="hidden" name="remember" value="true" />
              <div class="">
                <div class="relative mb-2">
                  <label
                    for="username"
                    class="sr-only relative text-gray-600 block"
                    >Full Name</label
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <input
                    v-model="name"
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="text"
                    required=""
                    class="
                      appearance-none
                      rounded
                      block
                      w-full
                      px-8
                      py-3
                      bg-neutral-200
                      border border-gray-300
                      placeholder-gray-500
                      focus:z-10
                      sm:text-sm
                    "
                    placeholder="Fullname"
                  />
                </div>
                <div class="relative">
                  <label
                    for="email "
                    class="sr-only relative text-gray-600 block"
                    >Email Address</label
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
                    name="email-address"
                    type="email"
                    autocomplete="off"
                    required=""
                    class="
                      appearance-none
                      rounded
                      block
                      w-full
                      px-8
                      py-3
                      bg-neutral-200
                      border border-gray-300
                      placeholder-gray-500
                      text-gray-900
                      focus:z-10
                      sm:text-sm
                    "
                    placeholder="Email Address"
                  />
                </div>
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
                    bg-gray-800
                    hover:bg-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
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
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div class="md:shrink-0">
            <img
              class="md:max-w-md"
              src="../assets/signup.gif"
              alt="Man looking at item at a store"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error: "",
      taken: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
       var element = document.getElementById("loader");
      element.classList.add("animate-spin");
      await axios.post("register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
      setTimeout(function () {
        element.classList.remove("animate-spin");
      }, 3000);
         var save = document.getElementById("registerToast");
        document.getElementById("registerToast").style.display = "block";
        setTimeout(function () {
          save.style.display = "none";
        }, 3000);
        setTimeout(function () {
          window.location.href = "http://localhost:3001";
        }, 1000);
    } catch (error) {
        var element = document.getElementById("loader");
        element.classList.remove("animate-spin");
      if(this.password != this.password_confirmation){
         var ele = document.getElementById("toast-danger");
        document.getElementById("toast-danger").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 2000);
        this.error = "Invalid credentials in password!";
      }else if(error.response.data.errors.email[0] == "The email has already been taken."){
        var takenEmail = error.response.data.errors.email[0]; 
        var ele = document.getElementById("toast");
        document.getElementById("toast").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 3000);
        this.taken = takenEmail;
      }else{
         var ele = document.getElementById("toast-danger");
        document.getElementById("toast-danger").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 2000);
        this.error = "The given data was invalid!";
      }
    }
    },
  },
};
</script>