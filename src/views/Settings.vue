<template>
  <main>
    <nav
      class="flex items-center justify-between flex-wrap bg-blue sticky p-4"
    >
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
          >User Information Successfully Updated!</span
        >
      </div>
     <div class="flex items-center flex-shrink-0 text-gray-800 mr-6 mt-2">
        <img src="../../public/logobl.jpeg" alt="incremail logo" class="w-10 h-10">
         &nbsp; &nbsp;
        <span class="font-semibold text-2xl text-white tracking-tight">IncreMail</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="flex justify-end">
        <button
        @click="showDrop"
        id="dropShow"
          type="button"
          class="cursor-pointer inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-400 hover:bg-gray-700"
        >
          <p class="initial mr-4 mb-1" v-if="user">{{ user.charAt(0) }}</p>
        </button>
        <div
          id="dropdownShow"
          class="hidden absolute mt-8 mr-12 bg-white rounded divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            class=" text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <button @click="logout" class="block py-2 px-4 bg-gray-100 hover:bg-gray-800 hover:text-white rounded items-center">Logout</button>
               </li>
          </ul>
        </div>
        <div class="text-white mt-1 ml-2" v-if="user">{{ user }}</div>
      </div>
    </nav>
    <hr />
    <div class="flex flex-no-wrap bg-gray-200 h-screen">
      <div
        class="
          w-40
          absolute
          sm:relative
          bg-white
          shadow
          md:h-full
          flex-col
          justify-between
          hidden
          sm:flex
        "
      >
        <div class="px-6 h-screen">
          <ul class="mt-4">
            <router-link
              :to="'/campaigns'"
              class="
                flex
                w-full
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                p-2
                justify-between
                text-gray-800
                hover:text-white hover:bg-gray-400
                cursor-pointer
                items-center
                mb-4
                transition
                duration-50
                ease-in-out
              "
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
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>
                <span class="text-sm ml-2">Campaigns</span>
              </div>
              <!-- <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div> -->
            </router-link>
            <router-link
              :to="'/example'"
              class="
                flex
                w-full
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                p-2
                justify-between
                text-gray-800
                hover:text-white hover:bg-gray-400
                cursor-pointer
                items-center
                mb-4
                transition
                duration-50
                ease-in-out
              "
            >
              <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-envelope" 
                viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <span class="text-sm ml-2">Workshop</span>
              </div>
            </router-link>
            <router-link
              :to="'/emailTemplates'"
              class="
                flex
                w-full
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                p-2
                justify-between
                text-gray-800
                hover:text-white hover:bg-gray-400
                cursor-pointer
                items-center
                mb-4
                transition
                duration-50
                ease-in-out
              "
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
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span class="text-sm ml-2">Blocks</span>
              </div>
            </router-link>
              <router-link
              :to="'/favorites'"
              class="
                 flex
                w-full
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                p-2
                justify-between
                text-gray-800
                hover:text-white hover:bg-gray-400
                cursor-pointer
                items-center
                mb-4
                transition
                duration-50
                ease-in-out
              "
            >
              <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                class="bi bi-heart" 
                viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <span class="text-sm ml-2">Favorites</span>
              </div>
            </router-link>
            <router-link
              :to="'/settings'"
              class="
                flex
                w-full
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                p-2
                justify-between
                text-white
                bg-gray-800
                cursor-pointer
                items-center
                mb-4
              "
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
                <span class="text-sm ml-2">Settings</span>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
      <!-- Sidebar ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="container mx-auto py-10 h-64 w-full px-6">
        <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
        <div class="flex justify-center">
          <a
            href="#"
            class="
              flex flex-col
              items-center
              bg-white
              rounded-lg
              border
              shadow-md
              md:flex-row md:max-w-xl
              dark:border-gray-700 dark:bg-gray-800
            "
          >
            <img
              class="
                object-cover
                w-full
                min-h-full
                rounded-t-lg
                md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
              "
              src="../assets/settings.gif"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                Customize Your Personal Setting
              </h5>
              <form class="mt-2 space-y-6">
                <div class="relative">
                  <label
                    class="block ml-2 text-gray-700 text-sm font-bold mb-2"
                    for="fullname"
                  >
                    Fullname:
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autocomplete="off"
                    required
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
                    placeholder="Fullname"
                  />
                </div>
                <div class="relative">
                  <label
                    class="block ml-2 text-gray-700 text-sm font-bold mb-2"
                    for="emailaddress"
                  >
                    Email address:
                  </label>
                  <input
                    id="emailad"
                    name="emailaddress"
                    type="email address"
                    autocomplete="off"
                    required
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
                    placeholder="xxxxxxx@gmail.com"
                  />
                </div>
                <div>
                  <button
                    @click="updateUser"
                    type="submit"
                    class="
                      ml-28
                      group
                      relative
                      w-50
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
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </a>
        </div>  
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "Settings",
  data() {
    return {
      moved: true,
      user: localStorage.getItem("data"),
    };
  },
  methods: {
    showDrop() {
      document.getElementById("dropdownShow").classList.toggle("show");
    },
     logout() {
      localStorage.clear();
      window.location.href = "https://incremail-d8cdc.web.app/";
    },
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
    async updateUser(e) {
      e.preventDefault();

      console.log("Clicked");
      var fullName = document.getElementById("fullname").value;
      var email = document.getElementById("emailad").value;

      await axios.post(`userUpdate/${localStorage.getItem("userID")}`, {
        name: fullName,
        email: email,
      });

      var ele = document.getElementById("toast");
      document.getElementById("toast").style.display = "block";
      setTimeout(function () {
        ele.style.display = "none";
      }, 3000);
      setTimeout(function () {
        window.location.href = "https://incremail-d8cdc.web.app/";
      }, 1000);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,400&family=Poppins:wght@200;400&display=swap");
.show{
  display: block;
}
</style>