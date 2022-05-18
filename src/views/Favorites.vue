<template>
  <main>
    <nav
      class="flex items-center justify-between flex-wrap bg-blue sticky p-4"
    >
      <div
        id="toast1"
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
          >Email Template Successfully Saved!</span
        >
      </div>
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-6 mt-2">
        <img
          src="../../public/logo.png"
          alt="incremail logo"
          class="w-10 h-10"
        />
        &nbsp; &nbsp;
        <span class="font-semibold text-2xl tracking-tight">IncreMail</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
            class="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <button
                @click="logout"
                class="block py-2 px-4 bg-gray-100 hover:bg-gray-800 hover:text-white rounded items-center"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div class="text-white mt-1 ml-2" v-if="user">{{ user }}</div>
      </div>
    </nav>
    <hr />
    <div class="flex flex-no-wrap bg-gray-100 h-screen">
      <div
        class="w-40 absolute sm:relative bg-white shadow md:h-full flex-col justify-between hidden sm:flex"
      >
        <div class="px-6 h-screen">
          <ul class="mt-4">
            <router-link
              :to="'/campaigns'"
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-gray-800 hover:text-white hover:bg-gray-400 cursor-pointer items-center mb-4 transition duration-50 ease-in-out"
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
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-gray-800 hover:text-white hover:bg-gray-400 cursor-pointer items-center mb-4 transition duration-50 ease-in-out"
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
                <span class="text-sm ml-2">Workshop</span>
              </div>
            </router-link>
            <router-link
              :to="'/emailTemplates'"
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-gray-800 hover:text-white hover:bg-gray-400 cursor-pointer items-center mb-4 transition duration-50 ease-in-out"
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
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-white bg-gray-800 cursor-pointer items-center mb-4"
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

                <span class="text-sm ml-2">Favorites</span>
              </div>
            </router-link>
            <router-link
              :to="'/settings'"
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-gray-800 hover:text-white hover:bg-gray-400 cursor-pointer items-center transition duration-50 ease-in-out"
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

      <div
        id="htmlShow"
        tabindex="-1"
        class="hidden bg-gray-800 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-4xl mx-auto h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
            >
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Previewing "{{ title }}"
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                @click="close"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6" v-html="design_html"></div>
            <!-- Modal footer -->
            <div
              class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
            >
              <button
                @click="close"
                type="button"
                class="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Sidebar ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="max-w-max mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="max-w-max" align="center">
          <div
            id="toast"
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
              >Template Successfully Deleted!</span
            >
          </div>
          <!-- Replace with your content -->
          <div v-if="data.length == 0" @click="check(data.length)">
            <p class="mt-12 mb-3 subpixel-antialiased" style="font-size: 20px">
              No Email Template Found.
            </p>
            <div
              class="max-w-md mx-auto bg-transparent rounded-xl overflow-hidden md:max-w-2xl"
            >
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-96 w-full object-cover"
                    src="../assets/empty.gif"
                    alt="empty"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else></div>
          <div id="wrap" class="overflow-scroll">
            <div
              class="flex justify-start card"
              v-for="item in data"
              v-bind:key="item.id"
            >
              <div>
                <div
                  class="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2 bg-white"
                  id="cardC"
                >
                  <div class="relative">
                    <div class="flex">
                      <div class="absolute p-7">
                        <svg
                          @click="removeTemplate(item.id)"
                          cursor="pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-heart-fill text-red-500 hover:text-gray-500 transition duration-50 ease-in-out absolute mb-8 animate-bounce"
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
                        class="bg-neutral-300 hover:bg-gray-700 hover:text-white py-2 px-3 transition duration-150 ease-in-out rounded-full absolute top-3 right-3"
                      >
                        <svg
                          @click="deleteTemplate(item.id)"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 hover:text-white transition duration-50 ease-in-out"
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
                      <img
                        class="h-25 w-40"
                        @click="
                          select(item.title, item.design_html, item.id);
                          htmlShow();
                        "
                        src="../assets/blocks.gif"
                        alt=""
                      />
                    </div>
                    <hr />
                    <p
                      class="text-gray-600 text-right m-2 text-justify"
                      id="date"
                    >
                      Posted on:<span class="text-xs" id="date"
                        >&nbsp;{{ getHumanDate(item.created_at) }}
                      </span>
                    </p>
                  </div>

                  <div class="px-6 pt-4 pb-5">
                    <button
                      class="bg-gray-800 h-8 text-white hover:bg-white hover:text-gray-800 text-black py-2 px-4 rounded-xl hover:rounded-2xl border border-gray-800 inline-flex items-center transition duration-150 ease-in-out"
                    >
                      <p
                        @click="
                          setID(item.id);
                          setHTMLID(item.id);
                        "
                        class="text-xs"
                      >
                        Customize
                      </p>
                      &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="eye"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                        />
                        <path
                          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
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
      design_html: null,
      title: null,
      id: null,
    };
  },
  methods: {
    htmlShow() {
      document.getElementById("htmlShow").style.display = "block";
    },
    close() {
      document.getElementById("htmlShow").style.display = "none";
    },
    showDrop() {
      document.getElementById("dropdownShow").classList.toggle("show");
    },
    logout() {
      localStorage.clear();
      window.location.href = "https://incremail-d8cdc.web.app/";
    },
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
          window.location.href =
            "https://incremail-d8cdc.web.app/emailTemplates";
        }, 1000);
      }
    },

    async removeTemplate(id) {
      const response = await axios.put(`removeFavorite/${id}`);
      if (response) {
        var ele = document.getElementById("toast1");
        document.getElementById("toast1").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 6000);
        setTimeout(function () {
          window.location.href = "https://incremail-d8cdc.web.app/favorites";
        }, 1000);
      }
    },
    select(title, design, id) {
      this.design_html = design;
      this.title = title;
      this.id = id;
    },

    async setHTMLID(id) {
      const dataHTML = await axios.get("templateEmail/" + id);
      console.log(dataHTML.data.html);
      var htmlTemplate = dataHTML.data.html;
      var htmlTitle = dataHTML.data.title;
      localStorage.setItem("templateHTML", JSON.stringify(htmlTemplate));
      localStorage.setItem("templateTitle", htmlTitle);
      // document.getElementById("loading").style.display = "block";
      // document.getElementById("eye").style.display = "none";
      // setTimeout(function () {
      //   document.getElementById("loading").style.display = "none";
      // }, 5000);
      setTimeout(function () {
        window.location.href = "https://incremail-d8cdc.web.app/emailView";
      }, 4000);
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
#date {
  font-size: 10px;
}

.show {
  display: block;
}
#wrap {
  height: 90vh;
}
::-webkit-scrollbar {
  display: none;
}
* {
  text-decoration: none;
}
</style>
