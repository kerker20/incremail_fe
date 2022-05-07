import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const state = {
    user: null,
    data: [],
    fav: [],
    recentCamp: [],
    emailTemplates: [],
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
        fav:(state) => {
            return state.fav;
        },
        recentCamp:(state) => {
            return state.recentCamp;
        },
        emailTemplates:(state) => {
            return state.emailTemplates;
        },
    
      
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
          async loadFav({ commit }, id) {
            try {
                const response = await axios.get('favoriteTemplate/'+ id);
                 commit('setFav', response.data)
              }
             catch (error) {
                console.log(error);
            }
          },
          async loadRecentCamp({ commit }, id) {
            try {
                const response = await axios.get('showCampaignData/'+ id);
                 commit('setRecentCamp', response.data)
              }
             catch (error) {
                console.log(error);
            }
          },
          async loadEmailTemplates({ commit }, id) {
            try {
                const response = await axios.get('showAll/'+ id);
                 commit('setEmailTemplates', response.data)
              }
             catch (error) {
                console.log(error);
            }
          },
    
    },
    mutations:{
        user(state, user){
            state.user = user;
        },
        setData(state, data) {
            state.data = data
        },
        setFav(state, fav) {
            state.fav = fav
        },
        setRecentCamp(state, recentCamp) {
            state.recentCamp = recentCamp
        },
        setEmailTemplates(state, emailTemplates) {
            state.emailTemplates = emailTemplates
        },

       
    },
});

export default store;