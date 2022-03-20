<template>
    <main>
    <hr />
        <div class="flex flex-no-wrap bg-gray-200 h-screen">
            <div
                class="w-50 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
            >
                <div class="px-8 h-screen">
                    <ul class="mt-4">
                        <li
                            class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
                        >
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-grid"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <rect
                                        x="4"
                                        y="4"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="4"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="4"
                                        y="14"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="14"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                </svg>
                                <span class="text-sm ml-2 text-blue-500">Campaigns</span>
                            </div>
                            <!-- <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div> -->
                        </li>
                        <router-link :to="'/'"
                            class="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6"
                        >
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-stack"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline
                                        points="12 4 4 8 12 12 20 8 12 4"
                                    />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span class="text-sm ml-2 text-gray-400">Templates</span>
                            </div>
                        </router-link>
                        <router-link :to="'/settings'"
                            class="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center"
                        >
                            <div class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-settings"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <circle cx="12" cy="12" r="3" />
                                </svg> 
                                <span class="text-sm ml-2 text-gray-400">Settings</span>
                            </div>
                        </router-link>
                    </ul>
                    
                </div>
            </div>
            <!-- Sidebar ends -->
            <!-- Remove class [ h-64 ] when adding a card block -->
            <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <div class="ml-20 font-bold">
                    <h1>Your Campaigns with your trusted customers</h1>
                </div>
                <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
                <div class="w-full h-full rounded mt-20">
                    <div
                        class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                    >
                        <div class="md:flex">
                            <div class="md:shrink-0">
                                <img
                                    class="h-48 w-full object-cover md:h-full md:w-48"
                                    src="../assets/Notes-bro.png"
                                    alt="Man looking at item at a store"
                                />
                            </div>
                            <div class="p-8">
                                <div
                                    class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                                >
                                    Create Campaigns
                                </div>
                                <a
                                    href="#"
                                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                                    >Finding customers for your new business</a
                                >
                                <p class="mt-2 text-slate-500">
                                    Getting a new business off the ground is a
                                    lot of hard work. Here are five ideas you
                                    can use to find your first customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "Campaigns",
    data() {
        return {
            moved: true,
        };
    },
    methods: {
        sidebarHandler() {
            var sideBar = document.getElementById("mobile-nav");
            sideBar.style.transform = "translateX(-260px)";
            if (this.$data.moved) {
                sideBar.style.transform = "translateX(0px)";
                this.$data.moved = false;
            } else {
                sideBar.style.transform = "translateX(-260px)";
                this.$data.moved = true;
            }
        },
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,400&family=Poppins:wght@200;400&display=swap");
</style>