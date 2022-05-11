<template>
  <main>
    <nav
      class="flex items-center justify-between flex-wrap bg-white sticky p-4 absolute"
    >
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
              class="flex w-full bg-white rounded-xl shadow-md overflow-hidden p-2 justify-between text-white bg-gray-800 cursor-pointer items-center mb-4"
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
      <div class="container max-w-full bg-white">
        <div class="container">
          <div class="grid grid-cols-8 gap-0">
            <div class="col-start-1 col-end-3 w-48">
              <div
                style="height: 95vh"
                class="p-4 w-56 max-h-screen absolute bg-white shadow-xl sm:p-6 dark:bg-gray-800 dark:border-gray-700 border-right-gray overflow-y-auto"
              >
                <h6
                  class="mb-1 text-base text-gray-900 dark:text-white text-left font-semibold mt-3"
                >
                  Recent Campaign
                </h6>
                <div v-if="data.data.length == 0">
                  <div
                    class="max-w-md mx-auto bg-transparent rounded-xl overflow-hidden md:max-w-2xl"
                  >
                    <div class="md:flex">
                      <div class="md:shrink-0">
                        <p class="mt-12 mb-3 text-xs">
                          No Email Templates Found
                        </p>
                        <img
                          class="h-36 w-full object-cover"
                          src="../assets/nodata.png"
                          alt="empty"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  class="my-4 space-y-3"
                  v-for="item in data.data"
                  v-bind:key="item.id"
                >
                  <li>
                    <a
                      href="#"
                      class="relative flex items-center p-2 text-base font-bold text-gray-900 bg-gray-100 rounded-lg transition duration-50 ease-in-out hover:bg-gray-80 shadow group hover:shadow-md dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white mb-2"
                    >
                      <div class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                          <a
                            class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                            href="#"
                            >{{ item.sender.charAt(0).toUpperCase() }}</a
                          >
                        </div>
                        <div class="flex-1 min-w-0 text-wrap">
                          <p class="text-gray-900 w-12" style="font-size: 7px">
                            {{ item.sender }}
                          </p>
                          <p style="font-size: 7px" class="text-gray-500">
                            <span class="font-bold">Subject:</span>
                            {{ item.subject }}
                          </p>
                        </div>
                      </div>
                      <span class="float-right absolute right-1 bottom-0">
                        <p style="font-size: 5.5px">
                          {{ date(item.created_at) }}
                        </p>
                      </span>
                    </a>
                  </li>
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
                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <!-- Modal header -->
                  <div
                    class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
                  >
                    <h3
                      class="text-xl font-medium text-gray-900 dark:text-white"
                    >
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
                  <div class="p-6 space-y-6" v-html="design_html">
                  </div>
                  <!-- Modal footer -->
                  <div
                    class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
                  >
                    <button
                      @click="setID(id); setHTMLID(id);"
                      type="button"
                      class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Customize
                    </button>
                    <button
                      @click="close"
                      type="button"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-start-3 col-end-5">
              <h6
                class="m-3 text-base text-gray-900 dark:text-white text-left font-semibold"
              >
                Start your campaign here
              </h6>
              <div
                class="bg-white sm:p-7 w-84 dark:bg-gray-800 dark:border-gray-700 -ml-20"
                style="height: 80vh"
              >
                <div
                  class="bg-tranparent -ml-2 rounded-xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div class="-mt-14">
                    <center>
                      <h6 style="font-size: 12px" class="mt-1 ml-12 mb-3 font-sm">
                        Click to View your Chosen Template
                      </h6>
                      <div
                        v-if="title"
                        id="cardTemp"
                        type="button"
                        @click="htmlShow"
                        style="height: 100%"
                        class="p-4 max-w-sm bg-white shadow-md mb-3 ml-14 sm:p-6 cursor-pointer rounded-xl"
                      >
                        {{ title }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
                      </div>
                       <div
                        v-else
                        id="cardTemp"
                        type="button"
                        style="height: 100%"
                        class="p-4 max-w-sm bg-white shadow-md mb-3 ml-14 sm:p-6 rounded-xl"
                      >
                        <img class="h-20" src="../assets/email.png" alt="">
                      </div>
                    </center>
                    <div
                      style="height: 100%"
                      class="p-4 max-w-sm bg-white mb-3 sm:p-6 rounded-xl"
                    >
                      <div
                        class="flex relative z-0 mb-6 w-full group mb-42 sticky -mt-8"
                      >
                        <form>
                          <div class="tags-input-container">
                            <div class="p-4">
                              <input
                                type="email"
                                autocomplete="off"
                                v-model="tagValue"
                                id="box"
                                @keyup.enter="addTag"
                                required
                                class="appearance-none rounded block px-2 py-3 w-60 bg-neutral-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm -ml-4"
                                placeholder="Thread To"
                              />
                            </div>
                            <div class="flex z-0 mb-4 w-full group">
                              <input
                                autocomplete="off"
                                id="from"
                                name="from_email"
                                class="appearance-none rounded block px-2 py-3 w-60 bg-neutral-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
                                placeholder="Sender"
                                required
                              />
                            </div>

                            <div class="flex z-0 mb-6 w-full group">
                              <input
                                id="subject"
                                autocomplete="off"
                                type="text"
                                name="subject"
                                class="appearance-none rounded block px-2 py-3 w-60 bg-neutral-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
                                placeholder="Subject"
                                required
                              />
                            </div>
                            <button
                              @click="send"
                              class="bg-gray-800 h-8 text-white hover:bg-white text-xs hover:text-gray-800 text-black py-2 px-4 rounded-xl hover:rounded-2xl border border-gray-800 inline-flex items-center transition duration-150 ease-in-out"
                            >
                              Transmit &nbsp;
                              <div
                                class="flex justify-center items-center hidden hover:border-gray-800"
                                id="loading"
                              >
                                <div
                                  class="animate-spin rounded-full h-4 w-4 border-b-2 hover:border-gray-900"
                                ></div>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                class="bi bi-send"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                                />
                              </svg>
                            </button>
                            <div class="flex flex-wrap">
                              <div
                                class="tag"
                                v-for="(tag, index) in tags"
                                :key="'tag' + index"
                              >
                                <span
                                  class="chip mt-2"
                                  v-if="activeTag !== index"
                                  @click="activeTag = index"
                                  >{{ tag }}</span
                                >
                                <input
                                  class="font"
                                  v-else
                                  v-model="tags[index]"
                                  v-focus
                                  :style="{ width: tag.length + 'ch' }"
                                  @keyup.enter="activeTag = null"
                                  @blur="activeTag = null"
                                />
                                <span @click="removeTag(index)"
                                  ><i class="fas fa-times-circle"></i
                                ></span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- <form> -->
                  <!-- </form> -->
                </div>
              </div>
            </div>
            <div class="col-start-5 col-end-9 max-h-full">
              <div
                class="p-2 bg-white shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700 broder-right-gray"
                style="height: 95vh"
              >
                <center>
                  <h6 style="font-size: 15px" class="mt-3 mb-10 font-semibold">
                    Choose Your Desired Email Template
                  </h6>
                </center>
                <center>
                  <h6 style="font-size: 13px" class="-mt-4 font-semibold">
                    Browse Templates you have created before
                  </h6>
                  <h6 style="font-size: 10px" class="font-semibold">
                    You want a brand new email template?
                    <router-link
                      :to="'/new'"
                      class="content-end text-blue-600 hover:text-indigo-500 underline"
                      >Create New</router-link
                    >
                  </h6>

                  <div class="flex justify-evenly">
                    <div v-if="data.email.length == 0">
                      <div
                        class="max-w-md mx-auto bg-transparent rounded-xl overflow-hidden md:max-w-2xl"
                      >
                        <div class="md:flex">
                          <div class="md:shrink-0">
                            <img
                              class="h-96 w-full object-cover"
                              src="../assets/empty1.gif"
                              alt="empty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      v-for="item in data.email"
                      v-bind:key="item.id"
                      class="mt-6"
                    >
                      <div
                        v-if="item.favorite == 1"
                        class="bg-white shadow w-32 h-14 font-bold hover:shadow-md transition duration-50 ease-in-out hover:text-blue-500 cursor-pointer"
                        id="select"
                        style="font-size: 12px"
                        @click="select(item.title, item.design_html, item.id)"
                      >
                        {{ item.title }}
                        <span class="absolute ml-8 transform -translate-y-1/2 w-4 h-4 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                         <p class="text-xs absolute -mb-6 cursor-pointer" id="date"
                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ getHumanDate(item.created_at) }}
                      </p>
                      </div>
                      <div
                        v-else
                        class="bg-white shadow w-32 h-14 font-bold hover:shadow-md transition duration-50 ease-in-out hover:text-blue-500 cursor-pointer"
                        id="select"
                        style="font-size: 12px"
                        @click="select(item.title, item.design_html, item.id)"
                      >
                        {{ item.title }}
                         <p class="text-xs absolute -mb-6 cursor-pointer" id="date"
                        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ getHumanDate(item.created_at) }}
                      </p>
                      </div>
                    </ul>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "Campaigns",
  data() {
    return {
      user: localStorage.getItem("data"),
      moved: true,
      tagValue: "",
      tags: [],
      activeTag: null,
      design_html: null,
      title: null,
      id: null,
    };
  },
  methods: {
     getHumanDate: function (date) {
      return moment(date).format("MMMM D, yyyy");
    },
    setID: function (id) {
      localStorage.setItem("templateID", id);
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
      //  setTimeout(function () {
      //   document.getElementById("loading").style.display = "none";
      // }, 5000);
      setTimeout(function () {
        window.location.href = "http://localhost:3001/emailView";
      }, 100);
    },
    htmlShow(){
      document.getElementById('htmlShow').style.display="block";
    },
    close(){
       document.getElementById('htmlShow').style.display="none";
    },
    select(title, design, id) {
      document
        .getElementById("cardTemp")
        .setAttribute(
          "style",
          "background: #3e3f40; font-style: italic; color:white;"
        );
      this.design_html = design;
      this.title = title;
      this.id = id;
    },
    showDrop() {
      document.getElementById("dropdownShow").classList.toggle("show");
    },
    send(e) {
      e.preventDefault();
      const from = document.getElementById("from").value;
      const subject = document.getElementById("subject").value;
      const tags = JSON.stringify(this.tags);
      const temp = tags.replace(/[^\w ~%.:\\&-\,.@]/gi, "");
      const html = this.design_html;
      const mailData = {
        from: from,
        subject: subject,
        recipient: temp,
        html: html,
      };
      console.log(mailData);
      this.sendCampaignThread(mailData);
    },
    async sendCampaignThread(data) {
      await axios.post("sendMail", data);
    },
    date(data) {
      return moment(data).format("MMMM-D-Y");
    },
    addTag() {
      if (!this.tagValue == "") this.tags.push(this.tagValue);

      this.tagValue = "";
      // console.log(tags);
    },
    logout() {
      localStorage.clear();
      window.location.href = "http://localhost:3001/";
    },
    removeTag(index) {
      this.tags.splice(index, 1);
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
  },
  computed: {
    data() {
      return {
        data: this.$store.getters.recentCamp,
        email: this.$store.getters.emailTemplates,
      };
    },
  },
  created() {
    this.$store.dispatch("loadRecentCamp", localStorage.getItem("userID")),
      this.$store.dispatch(
        "loadEmailTemplates",
        localStorage.getItem("userID")
      );
  },

  directives: {
    focus: {
      inserted: (el) => {
        el.focus();
      },
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,400&family=Poppins:wght@200;400&display=swap");
.content {
  padding: 7px;
}
.tags-input-container {
  width: 20rem;
  height: 8rem;
  padding: 2px;
  /* border: 1px solid gray; */
}
textarea:focus,
input:focus {
  outline: none;
}
.chip {
  padding: 7px;
  font-size: 12px;
  background: rgb(218, 218, 218);
  border-radius: 10px;
  display: inline;
}
.font {
  font-size: 12px;
}
.tag {
  display: flex;
  flex-direction: row;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#cardC {
  display: inline-block;
}
.show {
  display: block;
}
* {
  text-decoration: none;
}
#date {
  font-size: 10px;
  font-weight: 500;
}
</style>
