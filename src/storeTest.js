import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    test:"",
  },
  mutations:{
    setTest(state, test){
      state.test = test;
    },
  },
  getters:{
    test: state => state.test,
  },
  actions:{}
});
