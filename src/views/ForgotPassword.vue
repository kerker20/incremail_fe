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
        id="toast-error"
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
            text-white-500
            bg-rose-200
            rounded-lg
            dark:bg-rose-500 dark:text-green-200
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
</svg>
        </div>
        <span class="ml-3 text-sm font-normal"
          >Email Address is <span class="text-rose-500">not Found!</span></span
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
            <svg xmlns="http://www.w3.org/2000/svg" @click="back" width="16" height="16" fill="currentColor" class="bi bi-arrow-left cursor-pointer hover:text-blue-400" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
            <h6 class="text-2xl mt-3 text-center font-extrabold text-gray-900">
              Forgot Password
            </h6>
            <p class="text-xs font-thin text-center mt-4">
              Enter you email address here
            </p>
            <form class="mt-2 space-y-6" @submit.prevent="handleSubmit">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div class="relative">
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
                      focus:z-10
                      sm:text-sm
                    "
                    placeholder="Email address"
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
                    bg-gray-600
                    hover:bg-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                  @click="showToast"
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
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    back(){
      window.location.href = "https://incremail-d8cdc.web.app/"
    },
    async handleSubmit() {
      try {
        var element = document.getElementById("loader");
        element.classList.add("animate-spin");
        const response = await axios.post("forgot", {
        email: this.email,
      });
       var ele = document.getElementById("toast");
        document.getElementById("toast").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 3000);

        setTimeout(function () {
          element.classList.remove("animate-spin");
        }, 1000);
        const email = document.getElementById("email-address");
        email.value = "";
        // setTimeout(function () {
        //   window.location.href = "http://localhost:3001/";
        // }, 3000);


      } catch (error) {
         var ele = document.getElementById("toast-error");
        document.getElementById("toast-error").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 3000);

        setTimeout(function () {
          element.classList.remove("animate-spin");
        }, 1000);
         setTimeout(function () {
          window.location.href = "https://incremail-d8cdc.web.app/forgot";
        }, 3000);
      }
    },
  },
};
</script>
<style>
#toast-success {
  animation: toast 0.4s forwards;
  @keyframes toast {
    from {
      opacity: 0;
      transform: translateX("100px");
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
