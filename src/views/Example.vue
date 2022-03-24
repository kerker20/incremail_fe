<template>
  <main>
    <nav
      class="flex items-center justify-between flex-wrap bg-gray-800 sticky p-6"
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
                      >Password Request Successfully Sent!</span
                    >
    </div>
      <div class="flex items-center flex-shrink-0 text-white mr-6">
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
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
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
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            :to="'/'"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-white
              mr-4
            "
          >
            Dashboard
          </router-link>
          <router-link
            :to="'/mails'"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-white
              mr-4
            "
          >
            Mails
          </router-link>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="text-white" v-if="user">{{ user }}</div>
      </div>
    </nav>
    <hr />
    <div class="flex flex-no-wrap bg-gray-200 h-screen">
      <div
        class="
          w-50
          absolute
          sm:relative
          bg-gray-800
          shadow
          md:h-full
          flex-col
          justify-between
          hidden
          sm:flex
        "
      >
        <div class="px-8 max-w-md">
          <ul class="mt-4">
            <router-link
              :to="'/campaigns'"
              class="
                flex
                w-full
                justify-between
                text-gray-300
                hover:text-gray-500
                cursor-pointer
                items-center
                mb-6
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
                justify-between
                text-gray-600
                hover:text-gray-500
                cursor-pointer
                items-center
                mb-6
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
                <span class="text-sm ml-2 text-blue-500">Templates</span>
              </div>
            </router-link>
            <router-link
              :to="'/settings'"
              class="
                flex
                w-full
                justify-between
                text-gray-600
                hover:text-gray-500
                cursor-pointer
                items-center
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
                <span class="text-sm ml-2 text-gray-400">Settings</span>
              </div>
            </router-link>
          </ul>
          <br /><br /><br /><br />
          <div class="flex items-center mt-96">
            <span
              class="text-sm ml-2 text-gray-400 cursor-pointer"
              @click="handleClick"
              >Logout</span
            >
          </div>
        </div>
      </div>
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="container mx-auto py-1 md:w-5/7 w-11/12 px-6">
        <div id="example" class="overflow-scroll">
          <div class="container">
            <nav
              class="
                flex
                items-center
                justify-between
                flex-wrap
                bg-gray-800
                p-6
                h-20
              "
            >
              <div class="flex items-center flex-shrink-0 text-white mr-6">
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
                <span class="font-semibold text-xl tracking-tight"
                  >Tailwind CSS</span
                >
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
              <div
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
              >
                <div class="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    class="
                      block
                      mt-4
                      text-gray-50
                      lg:inline-block lg:mt-0
                      hover:text-white
                      mr-4
                    "
                  >
                    Start creating you own newsletters from Scratch
                  </a>
                  <a
                    href="#modal"
                    class="
                      block
                      mt-4
                      text-gray-50
                      lg:inline-block lg:mt-0
                      hover:text-white
                      mr-4
                    "
                  >
                    <div class="ml-20">
                      <button
                        data-modal-toggle="popup-modal"
                        class="
                          bg-gray-300
                          hover:bg-gray-400
                          text-gray-800
                          font-bold
                          py-1
                          px-3
                          rounded
                          inline-flex
                          items-center
                        "
                      >
                        <svg
                          style="width: 24px; height: 24px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
                          />
                        </svg>
                        <span>Save Design</span>
                      </button>
                      <button
                        class="
                          bg-gray-300
                          hover:bg-gray-400
                          text-gray-800
                          ml-3
                          font-bold
                          py-1
                          px-3
                          rounded
                          inline-flex
                          items-center
                        "
                        v-on:click="exportHtml"
                      >
                        <svg
                          style="width: 24px; height: 24px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z"
                          />
                        </svg>
                        <span> Export HTML</span>
                      </button>
                    </div>
                  </a>


                  <div
                    id="popup-modal"
                    tabindex="-1"
                    class="
                      hidden
                      overflow-y-auto overflow-x-hidden
                      fixed
                      top-0
                      right-0
                      left-0
                      z-50
                      md:inset-0
                      h-modal
                      md:h-full
                      justify-center
                      items-center
                    "
                    aria-hidden="true"
                  >
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div
                        class="
                          relative
                          bg-white
                          rounded-lg
                          shadow
                          dark:bg-gray-700
                        "
                      >
                        <div class="flex justify-end p-2">
                          <button
                            type="button"
                            class="
                              text-gray-400
                              bg-transparent
                              hover:bg-gray-200 hover:text-gray-900
                              rounded-lg
                              text-sm
                              p-1.5
                              ml-auto
                              inline-flex
                              items-center
                              dark:hover:bg-gray-800 dark:hover:text-white
                            "
                            data-modal-toggle="popup-modal"
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
                        <div class="p-6 pt-0 text-center">
                          <svg
                            class="
                              mx-auto
                              mb-4
                              w-14
                              h-14
                              text-gray-400
                              dark:text-gray-200
                            "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <h3
                            class="
                              mb-5
                              text-lg
                              font-normal
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            Are you sure you want to save your design?
                          </h3>
                          <button
                            v-on:click="saveDesign"
                            data-modal-toggle="popup-modal"
                            type="button"
                            class="
                              text-white
                              bg-green-600
                              hover:bg-green-800
                              focus:ring-4
                              focus:outline-none
                              focus:ring-green-300
                              dark:focus:ring-green-800
                              font-medium
                              rounded-lg
                              text-sm
                              inline-flex
                              items-center
                              px-5
                              py-2.5
                              text-center
                              mr-2
                            "
                          >
                            Yes, I'm sure
                          </button>
                          <button
                            data-modal-toggle="popup-modal"
                            type="button"
                            class="
                              text-gray-500
                              bg-white
                              hover:bg-gray-100
                              focus:ring-4
                              focus:outline-none
                              focus:ring-gray-200
                              rounded-lg
                              border border-gray-200
                              text-sm
                              font-medium
                              px-5
                              py-2.5
                              hover:text-gray-900
                              focus:z-10
                              dark:bg-gray-700
                              dark:text-gray-300
                              dark:border-gray-500
                              dark:hover:text-white
                              dark:hover:bg-gray-600
                              dark:focus:ring-gray-600
                            "
                          >
                            No, cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <router-link
                    :to="'/new'"
                    class="
                      inline-block
                      text-sm
                      px-4
                      py-2
                      cursor-pointer
                      leading-none
                      border
                      rounded
                      text-white
                      border-white
                      hover:border-transparent
                      hover:text-gray-800
                      hover:bg-white
                      mt-4
                      lg:mt-0
                    "
                  >
                    <span>Create New</span>
                  </router-link>
                  <div></div>
                </div>
              </div>
            </nav>
            <EmailEditor
              ref="emailEditor"
              :appearance="appearance"
              v-on:load="editorLoaded"
              v-on:ready="editorReady"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { EmailEditor } from "../components";
import sample from "../data/sample.json";
import axios from "axios";
export default {
  name: "Example",
  components: {
    EmailEditor,
  },
  data() {
    return {
      user: localStorage.getItem("data"),
      appearance: {
        theme: "dark",
      },
    };
  },
  methods: {
    // called when the editor is created
    editorLoaded() {
      console.log("editorLoaded");
      this.$refs.emailEditor.editor.loadDesign(sample);
    },
    // called when the editor has finished loading
    editorReady() {
      console.log("editorReady");
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log("saveDesign", JSON.stringify(design));
        let html = JSON.stringify(design);
        this.send(html);


        var ele = document.getElementById('toast');
        document.getElementById("toast").style.display = "block";
          setTimeout(function(){
          ele.style.display = 'none';
        }, 1000);
      });
    },
    async send(html) {
      await axios.post("createEmail", {
        user_id: localStorage.getItem("userID"),
        html: html,
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log("exportHtml", data);
      });
    },
    handleClick() {
      localStorage.clear();
      this.$store.dispatch("user", null);
      this.user = null;
      this.$router.push("/");
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#app,
#example {
  height: 100%;
}
#example .container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}
#bar {
  flex: 1;
  background-color: #40b883;
  color: #fff;
  padding: 10px;
  display: flex;
  max-height: 40px;
}
#bar h1 {
  flex: 1;
  font-size: 16px;
  text-align: left;
}
#bar button {
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #000;
  color: #fff;
  border: 0px;
  max-width: 150px;
  cursor: pointer;
}
</style>
