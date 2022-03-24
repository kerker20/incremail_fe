<template>
    <div class="max-w-max mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Mails</h1>
        <hr class="m-5" />
        <div class="max-w-max">
            <!-- Replace with your content -->

            <div class="flex justify-start card" v-for="item in data" v-bind:key="item.id">
            
                <div class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2">
                    <div class="relative">
                        <img
                            class="w-full"
                            src="../assets/mail1.png"
                            alt="Sunset in the mountains"
                        />
                        <button
                            class="bg-neutral-900 hover:bg-gray-500 py-2 px-3 ml-5 rounded-full absolute top-3 right-16"
                        >
                            <router-link :to="{ name: 'Templates' }" class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                    /></svg
                            ></router-link>
                        </button>
                        <div class="flex">
                            <button
                                class="bg-neutral-300 hover:bg-neutral-700 py-2 px-3 rounded-full absolute top-3 right-3"
                            ><router-link :to="{ name: 'Templates' }" class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-black"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg></router-link>
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-justify">
                            DevTool FlexBox Texture
                        </div>
                        <p class="text-gray-700 text-base m-2 text-justify">
                            Posted on:<span>November 12, 2021 </span>
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 m-5">
                        <button
                            class="bg-transparent hover:bg-gray-100 text-black py-2 px-4 rounded inline-flex items-center"
                        >
                            <router-link :to="{ name: 'Dashboard' }" class=""
                                >VIEW THE TEMPLATE</router-link
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- end of fourth card -->
            </div>
            <!-- /End replace -->
        </div>

    </div>
</template>
<script>
export default {
    name: "Mails",
    computed: {
    data() {
         return this.$store.getters.data;
      },
  },
  created() {
    this.$store.dispatch('loadData', localStorage.getItem('userID'));  
  },
};
</script>
<style scoped>
.card{
    display: inline-block;
}
</style>