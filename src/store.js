import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentpage:"Home",
	},
	mutations: {
		currentpage(state, name){
			state.currentpage = name
		},
	},
	getters: {
		currentpage: state => state.currentpage,
	}
});


