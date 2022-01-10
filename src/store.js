import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentpage:"Home",
		overlay: "false",
	},
	mutations: {
		currentpage(state, name){
			state.currentpage = name
		},
		overlay(state){
			state.overlay = !state.overlay;
		},
	},
	getters: {
		currentpage: state => state.currentpage,
		overlay: state => state.overlay,
	}
});


