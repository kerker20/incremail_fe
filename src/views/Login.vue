<template>
    <div class="container h-auto px-6 h-fit w-full">
        <div class="w-full h-full rounded mt-10">
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl"
            >
                <div class="md:flex">
                    <div class="p-8 md:max-w-sm mx-auto">
                        <div class="text-md text-black-500 font-semibold mt-14 ">
                            Don't have an account?
                            <router-link
                                :to="'/register'"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                >Register an Account</router-link
                            >
                        </div>
                        <h6
                            class="text-2xl mt-3 text-center font-extrabold text-gray-900"
                        >
                            Log in to MailChip
                        </h6>
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
                                        class="appearance-none rounded block w-full px-7 py-3 bg-neutral-200 border border-gray-300 placeholder-gray-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <br />
                                <div class="relative ">
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
                                class="content-end text-xs text-neutral-600 hover:text-indigo-500 underline "
                                >Forgot your password?</router-link
                            >
                            <div>
                                <button
                                    type="submit"
                                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                <span id="loader" class="mr-2">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                     <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                </svg>
                                </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="md:shrink-0 ">
                        <img
                            class="md:max-w-sm"
                            src="../assets/mails.jpg"
                            alt="Man looking at item at a store"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async handleSubmit(){
          var element = document.getElementById("loader");
          element.classList.add("animate-spin");
          const response = await axios.post('login', {
               email: this.email,
               password: this.password,
           })
           console.log(response);
           setTimeout(function(){
                element.classList.remove("animate-spin");
            }, 6000);
           localStorage.setItem('token', response.data.token);
           localStorage.setItem('data', response.data.user.name);
           this.$store.dispatch('user', response.data.user)
           window.location.href = 'http://localhost:3001/example'
        }
    }
  
};
</script>
