import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //boolen values to show or hide components
      indGlobal:false,
      indPosition:false,
      indDistance:false,
      map:true,

      //Map values
      time:"08h",
      category:"Total",
      
  },
  mutations: {
    gotoMap(state){
      state.indGlobal = false;
      state.indPosition = false;
      state.indDistance = false;
      state.map = true;
    },
    gotoDistance(state){
      state.indGlobal = false;
      state.indPosition = false;
      state.map = false;
      state.indDistance = true;
    },
    gotoGlobal(state){
      state.indPosition = false;
      state.map = false;
      state.indDistance = false;
      state.indGlobal = true;
    },
    gotoPosition(state){
      state.map = false;
      state.indDistance = false;
      state.indGlobal = false;
      state.indPosition = true;
    },

    changeTime(state,time){
      state.time = time
  },
  changeCat(state,value){
    state.category = value
  },
  },
  actions: {}
})
