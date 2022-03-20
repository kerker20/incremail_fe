<template>
     <div class="container h-auto px-6 h-fit w-full">
        <div class="w-full h-full rounded mt-10">
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-48   "
            >
                <div class="md:flex">
                    <div class="p-8 md:max-w-sm mx-auto">
                        <h6
                            class="text-2xl mt-3 text-center font-extrabold text-gray-900"
                        >
                            Forgot Password
                        </h6>
                        <form class="mt-2 space-y-6" @submit.prevent="handleSubmit">
                            <input type="hidden" name="remember" value="true" />
                                <div class="relative mt-2">
                                    <label
                                        for="password "
                                        class="sr-only text-gray-600 block"
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
                                <div class="relative mt-2">
                                    <label
                                        for="password "
                                        class="sr-only text-gray-600 block"
                                        >Password Confirmation:</label>
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
                                        class="appearance-none rounded block w-full px-7 py-3 bg-neutral-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            <div>
                                <button
                                    type="submit"
                                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
    import axios from 'axios';
    export default {
        name: 'ResetPassword',
        data(){
            return{
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('reset', {
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    token: this.$route.params.token
                });
                console.log(response);
                this.$router.push('/login');
            }
        }
    }
</script>
<style>

</style>