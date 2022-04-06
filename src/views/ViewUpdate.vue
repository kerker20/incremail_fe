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
          >Email Template Successfully Updated!</span
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
                  <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-envelope" 
                viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
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
                <span class="text-sm ml-2 text-blue-500">Templates</span>
              </div>
            </router-link>
            <router-link
              :to="'/emailTemplates'"
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
                <span class="text-sm ml-2 text-gray-400">Blocks</span>
              </div>
            </router-link>
              <router-link
              :to="'/favorites'"
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
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                class="bi bi-heart" 
                viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
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
                <span class="text-sm ml-2 text-gray-400">Favorites</span>
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
            <div class="flex items-center mt-96" @click="handleClick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-box-arrow-in-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
              <span class="text-sm ml-2 text-gray-400 cursor-pointer">
                Logout</span
              >
            </div>
          </ul>
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
                    role="button"
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
                        @click="show"
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
                        <span>Update Design</span>
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
                    id="modal"
                    tabindex="-1"
                    class="
                      hidden
                      content-center
                      overflow-y-auto overflow-x-hidden
                      absolute
                      ml-52
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
                              @click="hide"
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
                          <form
                            class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                            action="#"
                          >
                            <div>
                              <label
                                for="email"
                                class="
                                  block
                                  mb-2
                                  required
                                  text-sm
                                  font-medium
                                  text-gray-900 text-left
                                  dark:text-gray-300
                                "
                                >Enter Template Title</label
                              >
                              <input
                                type="title"
                                name="title"
                                id="title"
                                class="
                                  bg-gray-50
                                  border border-gray-300
                                  text-gray-900 text-sm
                                  rounded-lg
                                  focus:ring-blue-500 focus:border-blue-500
                                  block
                                  w-full
                                  p-2.5
                                  dark:bg-gray-600
                                  dark:border-gray-500
                                  dark:placeholder-gray-400
                                  dark:text-white
                                "
                                v-model="titleEdit"
                                v-on:change="changeTitle"
                                placeholder="Template Title"
                                required
                              />
                            </div>
                          </form>
                          <button
                            v-on:click="saveDesign"
                            data-modal-toggle="popup-modal"
                            type="button"
                            class="
                              text-white
                              bg-gray-600
                              hover:bg-gray-800
                              focus:ring-4
                              focus:outline-none
                              focus:ring-gray-300
                              dark:focus:ring-gray-800
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
                            Save
                          </button>
                          <button
                            @click="hide"
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
                            Cancel
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
                    <span>Create New </span>
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
// import sample from "../data/sample.json";
// import test from "../data/test.json";
import axios from "axios";
export default {
  name: "Example",
  components: {
    EmailEditor,
  },
  data() {
    return {
      title: "",
      titleEdit: localStorage.getItem("templateTitle"),
      user: localStorage.getItem("data"),
      uhtml: JSON.parse(localStorage.getItem("templateHTML")),
      appearance: {
        theme: "dark",
      },
    };
  },
  created() {
    // this.editorLoaded(sample)
  },
  methods: {
    hide() {
      document.getElementById("modal").style.display = "none";
    },
    show() {
      document.getElementById("modal").style.display = "block";
    },
    // called when the editor is created
    editorLoaded() {
      console.log("editorLoaded");
      this.$refs.emailEditor.editor.loadDesign(JSON.parse(this.uhtml));
    },
    // called when the editor has finished loading
    editorReady() {
      console.log("editorReady");
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log("saveDesign", JSON.stringify(design));
        let html = JSON.stringify(design, null, "\t");
        this.send(html);

        var ele = document.getElementById("toast");
        document.getElementById("toast").style.display = "block";
        setTimeout(function () {
          ele.style.display = "none";
        }, 3000);
        setTimeout(function () {
          window.location.href = "http://localhost:3001/emailTemplates";
        }, 1000);
      });
    },
    async send(html) {
      var titleE = document.getElementById("title").value;
      await axios.put(`templateUpdate/${localStorage.getItem("templateID")}`, {
        user_id: localStorage.getItem("userID"),
        html: html,
        title: titleE,
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
