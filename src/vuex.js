import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const state = {
    user: null,
    data: [],
}

const store = new Vuex.Store({
    state,
    getters:{
        user:(state) => {
            return state.user;
        },
        data:(state) => {
            return state.data;
        },
        images:(state) => {
            return state.images;
        }
    },
    actions:{
        user(context, user){
            context.commit('user', user);
        },
        async loadData({ commit }, id) {
            try {
                const response = await axios.get('template/'+ id);
                 commit('setData', response.data)
              }
             catch (error) {
                console.log(error);
            }
          },
          async images({ commit }, id) {
            try {
                const response = await axios.get('showImage/'+ id);
                 commit('setImage', response.images)
              }
             catch (error) {
                console.log(error);
            }
          }
    },
    mutations:{
        user(state, user){
            state.user = user;
        },
        setData(state, data) {
            state.data = data
        },
        setImage(state, images) {
            state.images = images
        }
    },
});

export default store;