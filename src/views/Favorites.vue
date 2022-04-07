<template>
  <main>
    <nav
      class="flex items-center justify-between flex-wrap bg-white sticky p-6"
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
          >Email Template Successfully Saved!</span
        >
      </div>
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-6 mt-2">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">IncreMail</span>
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
        <img
          class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80"
        />
        <div class="text-gray-800 mt-1 ml-4" v-if="user">{{ user }}</div>
      </div>
    </nav>
    <hr />
    <div class="flex flex-no-wrap bg-gray-200 h-screen">
      <div
        class="
          w-44
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                  />
                </svg>
                <!-- <svg
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
                </svg> -->
                <span class="text-sm ml-2">Templates</span>
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
                text-white
                bg-gray-600
                cursor-pointer
                items-center
                mb-4
              "
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
                <!-- <svg
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
                </svg> -->
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
                text-gray-800
                hover:text-white hover:bg-gray-400
                cursor-pointer
                items-center
                transition
                duration-50
                ease-in-out
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
      <div class="max-w-max mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-1xl font-bold text-gray-900">
          Your Favorite Email Templates
        </h1>
        <hr class="m-5" />
        <div class="max-w-max" align="center">
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
              >Template Successfully Deleted!</span
            >
          </div>
          <!-- Replace with your content -->
          <div v-if="data.length == 0" @click="check(data.length)">
            <p class="mb-3 subpixel-antialiased">No Email Templates Found</p>
            <div
              class="
                max-w-md
                mx-auto
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                md:max-w-2xl
              "
            >
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-80 w-full object-cover md:h-full md:w-80"
                    src="../assets/empty.png"
                    alt="empty"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else></div>
          <div id="wrap">
            <div
              class="flex justify-start card"
              v-for="item in data"
              v-bind:key="item.id"
            >
              <div>
                <div
                  class="
                    max-w-xs
                    rounded
                    overflow-hidden
                    shadow-lg
                    mx-2
                    my-2
                    bg-white
                  "
                  id="cardC"
                >
                  <div class="relative">
                    <div class="flex">
                      <div class="absolute p-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="
                            bi bi-heart-fill
                            text-red-500
                            hover:text-gray-500
                            transition
                            duration-50
                            ease-in-out
                          "
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="flex">
                      <button
                        class="
                          bg-neutral-300
                          hover:bg-gray-700 hover:text-white
                          py-2
                          px-3
                          transition
                          duration-150
                          ease-in-out
                          rounded-full
                          absolute
                          top-3
                          right-3
                        "
                      >
                        <svg
                          @click="deleteTemplate(item.id)"
                          xmlns="http://www.w3.org/2000/svg"
                          class="
                            h-5
                            w-5
                            hover:text-white
                            transition
                            duration-50
                            ease-in-out
                          "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-6 py-4 mt-12">
                    <div
                      class="font-bold text-gray-800 text-md mb-2 text-justify"
                    >
                      {{ item.title }}
                    </div>
                    <p class="text-gray-600 text-xs m-2 text-justify">
                      Posted on:<span class="text-xs"
                        >&nbsp;{{ getHumanDate(item.created_at) }}
                      </span>
                    </p>
                    <hr />
                  </div>

                  <div class="px-6 pt-4 pb-2">
                    <button
                      class="
                        bg-transparent
                        hover:bg-gray-300
                        text-black
                        py-2
                        px-4
                        rounded
                        inline-flex
                        items-center
                        transition
                        duration-150
                        ease-in-out
                      "
                    >
                      <p
                        @click="
                          setID(item.id);
                          setHTMLID(item.id);
                        "
                        class=""
                      >
                        View Template
                      </p>
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
                    <hr />
                  </div>
                </div>
              </div>
              <!-- end of fourth card -->
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "Mails",
  data() {
    return {
      user: localStorage.getItem("data"),
      favorites: undefined,
    };
  },
  methods: {
    check(data) {
      console.log(data);
    },
    setID: function (id) {
      localStorage.setItem("templateID", id);
    },
    getHumanDate: function (date) {
      return moment(date).format("MMMM D, yyyy");
    },
    async deleteTemplate(id) {
      const response = await axios.delete(`templateDel/${id}`);
      if (response) {
        var ele = document.getElementById("toast");
        document.getElementById("toast").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 6000);
        setTimeout(function () {
          window.location.href = "http://localhost:3001/emailTemplates";
        }, 1000);
      }
    },
    async setHTMLID(id) {
      const dataHTML = await axios.get("templateEmail/" + id);
      console.log(dataHTML.data.html);
      var htmlTemplate = dataHTML.data.html;
      var htmlTitle = dataHTML.data.title;
      localStorage.setItem("templateHTML", JSON.stringify(htmlTemplate));
      localStorage.setItem("templateTitle", htmlTitle);
      setTimeout(function () {
        window.location.href = "http://localhost:3001/emailView";
      }, 300);
    },
  },
  computed: {
    data() {
      return this.$store.getters.fav;
    },
  },
  created() {
    this.$store.dispatch("loadFav", localStorage.getItem("userID"));
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,400&family=Poppins:wght@200;400&display=swap");

.card {
  display: inline-block;
}
#cardC {
  background-size: contain;
  background-repeat: no-repeat;
  /* background-image: -webkit-linear-gradient(45deg, #ffffff 50%, #cecece 50%); */
}
/* .box{
  background-image: url('../assets/dash.png')
} */
</style>
