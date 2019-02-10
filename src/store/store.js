import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import goods from './goods.js';

export const store = new Vuex.Store({
	modules: {
		goods
	},
	state: {
		serverDir: "http://eco.psekups.ru/server/",
	},
	getters: {
		getServerDir(state){
			return state.serverDir
		},
	},
	strict: process.env.NODE_ENV !== 'production'
});

