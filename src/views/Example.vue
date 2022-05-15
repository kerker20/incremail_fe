<template>
  <main>
    <!-- <button class="btn">Button</button> -->
    <nav
      class="flex items-center justify-between flex-wrap bg-white sticky p-4"
    >
      <div
        id="toastSend"
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
          >Email Template Successfully Send!</span
        >
      </div>
      <div
        id="toast"
        class="absolute right-0 top-0 m-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-green-200  rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 hidden"
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
      <div class="flex justify-end">
        <button
        @click="showDrop"
        id="dropShow"
          type="button"
          class="cursor-pointer inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-400 hover:bg-gray-700"
        >
          <p class="initial mr-4 mb-1" v-if="user">{{ user.charAt(0) }}</p>
          <p class="initial mr-4 mb-1" v-else>{{ user.charAt(0) }}</p>
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
        <div class="text-gray-800 mt-1 ml-2" v-if="user">{{ user }}</div>
      </div>
    </nav>
    <hr />
    <div class="flex flex-no-wrap bg-gray-200 h-screen">
      <div
        class="w-44 absolute sm:relative bg-white shadow md:h-full flex-col justify-between hidden sm:flex"
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
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-white bg-gray-800 cursor-pointer items-center mb-4"
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
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-gray-800 hover:text-white hover:bg-gray-400 cursor-pointer items-center mb-4 transition duration-50 ease-in-out"
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
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="container max-w-screen-2xl" id="cont">
        <div id="example" class="overflow-scroll">
          <div class="container mt-2">
            <nav
              class="flex items-center justify-between flex-wrap bg-white p-6 h-20"
            >
              <div
                class="flex items-center flex-shrink-0 text-gray-800 mr-6"
              >
                <img
                  src="../../public/logo.png"
                  alt="incremail logo"
                  class="w-10 h-10"
                />
                &nbsp; &nbsp;
                <span class="font-semibold text-xl tracking-tight"
                  >IncreMail Newsletter</span
                >
              </div>
              <div
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
              >
                <div class="text-sm lg:flex-grow">
                  <div
                    class="block mt-4 text-gray-50 lg:inline-block lg:mt-0 hover:text-white ml-56"
                  >
                    <button
                      @click="show"
                      class="bg-gray-300 hover:bg-gray-800 hover:text-white text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center transition duration-50 ease-in-out"
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
                      @click="show1"
                      class="bg-gray-300 hover:bg-gray-800 hover:text-white text-gray-800 ml-3 font-bold py-1 px-3 rounded inline-flex items-center transition duration-50 ease-in-out"
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
                      <span>Direct Send</span>
                    </button>
                    <button
                      @click="exportHtmlZIP"
                      class="bg-white hover:text-rose-900 transition duration-50 ease-in-out text-gray-800 underline font-bold px-4 rounded inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-file-earmark-zip animate-bounce"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438V7.5z"
                        />
                        <path
                          d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                        />
                      </svg>
                      <span>&nbsp;Export Zip</span>
                    </button>
                  </div>

                  <div
                    id="modal"
                    tabindex="-1"
                    class="hidden content-center overflow-y-auto overflow-x-hidden absolute ml-52 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
                    aria-hidden="true"
                  >
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div
                        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                      >
                        <div class="flex justify-end p-2">
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
                            @submit="saveDesign"
                          >
                            <div>
                              <label
                                for="email"
                                class="block mb-2 required text-sm font-medium text-gray-900 text-left dark:text-gray-300"
                                >Enter Template Title</label
                              >
                              <input
                                type="title"
                                name="title"
                                id="title"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                v-model="title"
                                placeholder="Template Title"
                                required
                              />
                            </div>
                            <button
                              data-modal-toggle="popup-modal"
                              type="submit"
                              class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Submit &nbsp;
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="15"
                                fill="currentColor"
                                id="loading"
                                class="bi bi-clipboard-check animate-bounce hidden"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                                />
                                <path
                                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                                />
                                <path
                                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                                />
                              </svg>
                            </button>
                            <button
                              @click="hide"
                              data-modal-toggle="popup-modal"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="modal1"
                    tabindex="-1"
                    class="hidden content-center overflow-y-auto overflow-x-hidden absolute ml-52 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
                    aria-hidden="true"
                  >
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div
                        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                      >
                        <div class="flex justify-end p-2">
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="popup-modal"
                          >
                            <svg
                              @click="hide1"
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
                            @submit="exportHtml"
                          >
                            <div>
                              <label
                                for="email"
                                class="block mb-2 required text-sm font-medium text-gray-900 text-left dark:text-gray-300"
                                >Send To Email Recipient</label
                              >
                              <input
                                type="recipient"
                                name="recipient"
                                id="recipient"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="To"
                                required
                              />
                              <input
                                type="fromName"
                                name="fromName"
                                id="fromName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mt-3"
                                placeholder="Sender Name"
                                required
                              />
                              <input
                                type="subject"
                                name="subject"
                                id="subject"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mt-3"
                                placeholder="Subject"
                                required
                              />
                            </div>
                            <button
                              data-modal-toggle="popup-modal"
                              type="submit"
                              @click="passDesignDataCampaign"
                              class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Send &nbsp;<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-envelope-check-fill animate-bounce hidden"
                                id="mail"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"
                                />
                                <path
                                  d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"
                                />
                              </svg>
                            </button>
                            <button
                              @click="hide1"
                              data-modal-toggle="popup-modal"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <router-link
                    :to="'/new'"
                    class="rounded text-white bg-gray-800 hover:border-transparent hover:text-gray-800 hover:bg-white ml-3 text-sm font-bold py-1 cursor-pointer px-3 rounded inline-flex items-center transition duration-50 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                    <span>&nbsp;Create New</span>
                  </router-link>
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
<script src="https://apis.google.com/js/platform.js" async defer></script>
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
      title: "",
      user: localStorage.getItem("data"),
      appearance: {
        theme: "light",
      },
      design_html: null
    };
  },
  mounted() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
      });
  },
  methods: {

    showDrop() {
      document.getElementById("dropdownShow").classList.toggle("show");
    },
    hide() {
      document.getElementById("modal").style.display = "none";
    },
    show() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        this.design_html = data.html;
      });
      document.getElementById("modal").style.display = "block";
    },
    hide1() {
      document.getElementById("modal1").style.display = "none";
    },
    show1() {
       this.$refs.emailEditor.editor.exportHtml((data) => {
        this.design_html = data.html;
      });
      document.getElementById("modal1").style.display = "block";
    },
    logout() {
       var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log("User signed out.");
      });
      localStorage.clear();
      window.location.href = "http://localhost:3001/";
    },
    editorLoaded() {
      console.log("editorLoaded");
      this.$refs.emailEditor.editor.loadDesign(sample);
    },

    // called when the editor has finished loading
    editorReady() {
      console.log("editorReady");
    },
    sendEmail(html) {
      const recipient = document.getElementById("recipient").value;
      const fromName = document.getElementById("fromName").value;
      const subject = document.getElementById("subject").value;

      const mailData = {
        recipient: recipient,
        fromName: fromName,
        subject: subject,
        html: html,
      };
      this.sendTemplate(mailData);
    },


     storeCampaignData(design) {
      const recipient = document.getElementById("recipient").value;
      const subject = document.getElementById("subject").value;
      const des = this.design_html

      const mailData = {
        user_id: localStorage.getItem("userID"),
        sender: recipient, //(to)
        subject: subject,
        html: design,
        design_html: des

      };
      console.log(mailData);
      this.sendCampaignData(mailData);
    },

    async sendCampaignData(data){
      await axios.post("createCampaignData", data);
    },

    passDesignDataCampaign(){
      this.$refs.emailEditor.editor.saveDesign((design) => {
        let pisti = JSON.stringify(design, null, "\t");
        this.storeCampaignData(pisti);
      });
    },
    saveDesign(e) {
      e.preventDefault();
      this.$refs.emailEditor.editor.saveDesign((design) => {
        const des = this.design_html
        console.log(des);
        console.log("saveDesign", JSON.stringify(design), null, "\t");
        let html = JSON.stringify(design, null, "\t");
        this.send(html, des);

        document.getElementById("loading").style.display = "block";
        // document.getElementById("eye").style.display = "none";
        setTimeout(function () {
          document.getElementById("loading").style.display = "none";
        }, 3000);

        var save = document.getElementById("toast");
        document.getElementById("toast").style.display = "block";
        setTimeout(function () {
          save.style.display = "none";
        }, 3000);
        setTimeout(function () {
          window.location.href = "http://localhost:3001/emailTemplates";
        }, 1000);
      });
    },
    async send(html, design) {
      await axios.post("createEmail", {
        user_id: localStorage.getItem("userID"),
        html: html,
        title: this.title,
        design_html: design
      });
    },
    async sendTemplate(data) {
      var ele = document.getElementById("toastSend");
      document.getElementById("toastSend").style.display = "block";
      setTimeout(function () {
        ele.style.display = "none";
      }, 3000);
      document.getElementById("mail").style.display = "block";
      // document.getElementById("eye").style.display = "none";
      setTimeout(function () {
        document.getElementById("mail").style.display = "none";
      }, 5000);
      var element = document.getElementById("modal1");
      setTimeout(function () {
        element.style.display = "none";
      }, 3000);
      await axios.post("sendMail", data);
    },


    exportHtmlZIP() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        const html = data.html;

        const zip = new JSZip();
        zip.file(`${localStorage.getItem("templateTitle")}.html`, html);

        zip.generateAsync({ type: "blob" }).then((content) => {
          saveAs(content, "incremail_archive.zip");
        });
      });
    },
    exportHtml(e) {
      e.preventDefault();
      this.$refs.emailEditor.editor.exportHtml((data) => {
        const html = data.html;
        this.sendEmail(html);
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
window.onclick = function(event) {
  if (!event.target.matches('#dropShow')) {
    var dropdowns = document.getElementById("dropdownShow");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.toggle('hide');
      }
    }
  }
}
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
.form-input {
  width: 350px;
  padding: 20px;
  background: #fff;
  box-shadow: -3px -3px 7px rgba(94, 104, 121, 0.377),
    3px 3px 7px rgba(94, 104, 121, 0.377);
}
.form-input img {
  width: 100%;
  display: none;
  margin-bottom: 30px;
}
.form-input input {
  display: none;
}

.form-input label {
  display: block;
  width: 60%;
  height: 45px;
  margin-left: 20%;
  line-height: 50px;
  text-align: center;
  background: #1172c2;
  color: #fff;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  text-transform: Uppercase;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cont {
  margin-left: 2rem;
  margin-top: 1rem;
}
.initial {
  margin-left: 11px;
  margin-top: 3px;
  color: white;
}
.show {display: block;}

.hide {display: none;}
</style>
