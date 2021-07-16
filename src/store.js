import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    picked: '',
    message: '',
    year: '',
    month: '',
    day: '',
    insurance1: '',
    insurance2: '',
    insurance3: '',
  },
  getters: {
    picked: (state) => state.picked,
    message: (state) => state.message,
    year: (state) => state.year,
    month: (state) => state.month,
    day: (state) => state.day,
    insurance1: (state) => state.insurance1,
    insurance2: (state) => state.insurance2,
    insurance3: (state) => state.insurance3,
  },
  mutations: {
    pickedSex(state, sex) {
      state.picked = sex;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
    selectYear(state, sYear) {
      state.year = sYear;
    },
    selectMonth(state, sMonth) {
      state.month = sMonth;
    },
    selectDay(state, sDay) {
      state.day = sDay;
    },
    queInsurance1(state, qInsurance1) {
      state.insurance1 = qInsurance1;
    },
    queInsurance2(state, qInsurance2) {
      state.insurance2 = qInsurance2;
    },
    queInsurance3(state, qInsurance3) {
      state.insurance3 = qInsurance3;
    },
  },
  actions: {
    pickedSex({ commit }, sex) {
      commit('pickedSex', sex);
    },
    updateMessage({ commit }, newMessage) {
      commit('updateMessage', newMessage);
    },
    selectYear({ commit }, sYear) {
      commit('selectYear', sYear);
    },
    selectMonth({ commit }, sMonth) {
      commit('selectMonth', sMonth);
    },
    selectDay({ commit }, sDay) {
      commit('selectDay', sDay);
    },
    queInsurance1({ commit }, qInsurance1) {
      commit('queInsurance1', qInsurance1);
    },
    queInsurance2({ commit }, qInsurance2) {
      commit('queInsurance2', qInsurance2);
    },
    queInsurance3({ commit }, qInsurance3) {
      commit('queInsurance3', qInsurance3);
    },
  },
});
