 <div class="max-w-max mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
           <p class="mt-12 mb-3 subpixel-antialiased">No Email Templates Found</p>
            <div
              class="
                max-w-md
                mx-auto
                bg-transparent
                rounded-xl
                overflow-hidden
                md:max-w-2xl
              "
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
                        @click="removeTemplate(item.id)"
                        cursor="pointer"
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
                            absolute
                            mb-8
                            animate-bounce
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
                        View Template
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