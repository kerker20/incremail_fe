<template>
  <div class="container h-auto px-6 h-fit w-full">
    <div class="w-full h-full rounded mt-28">
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
        <span class="ml-3 text-sm font-normal">Password Request Successfully Sent!</span>
      </div>
      <div
        class="
          max-w-md
          mx-auto
          bg-white
          rounded-xl
          shadow-md
          overflow-hidden
          md:max-w-48
        "
      >
        <div class="md:flex">
          <div class="p-8 md:max-w-sm mx-auto">
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
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
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
    async handleSubmit() {
      var element = document.getElementById("loader");
      element.classList.add("animate-spin");
      const response = await axios.post("forgot", {
        email: this.email,
      });
          if(response) {
              var ele = document.getElementById('toast');
              document.getElementById("toast").style.display = "block";
              setTimeout(function(){
                ele.style.display = 'none';
              }, 6000);
              
               setTimeout(function(){
                element.classList.remove("animate-spin");
            }, 6000);
              const email = document.getElementById('email-address');
              email.value = '';
          }else{
              document.getElementById("toast").style.display = "none";
          }
    },
  },
};
</script>
<style>
#toast-success{
    animation: toast .4s forwards;
    @keyframes toast{
        from{
            opacity: 0;
            transform: translateX('100px');
        }to{
            opacity: 1;
            transform: translateX(0);
        }
    }
}
</style>