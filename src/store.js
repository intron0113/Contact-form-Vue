import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sex: '',
    message: '',
    year: '1990',
    month: '1',
    day: '1',
    insurance1: '',
    insurance2: '',
    insurance3: '',
  },
  getters: {
    sex: (state) => state.sex,
    message: (state) => state.message,
    year: (state) => state.year,
    month: (state) => state.month,
    day: (state) => state.day,
    insurance1: (state) => state.insurance1,
    insurance2: (state) => state.insurance2,
    insurance3: (state) => state.insurance3,
  },
  mutations: {
    setSex(state, sex) {
      state.sex = sex;
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
    setYear(state, sYear) {
      state.year = sYear;
    },
    setMonth(state, sMonth) {
      state.month = sMonth;
    },
    setDay(state, sDay) {
      state.day = sDay;
    },
    setInsurance1(state, qInsurance1) {
      state.insurance1 = qInsurance1;
    },
    setInsurance2(state, qInsurance2) {
      state.insurance2 = qInsurance2;
    },
    setInsurance3(state, qInsurance3) {
      state.insurance3 = qInsurance3;
    },
  },
  actions: {
    setSex({ commit }, sex) {
      commit('setSex', sex);
    },
    setMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    },
    setYear({ commit }, sYear) {
      commit('setYear', sYear);
    },
    setMonth({ commit }, sMonth) {
      commit('setMonth', sMonth);
    },
    setDay({ commit }, sDay) {
      commit('setDay', sDay);
    },
    setInsurance1({ commit }, qInsurance1) {
      commit('setInsurance1', qInsurance1);
    },
    setInsurance2({ commit }, qInsurance2) {
      commit('setInsurance2', qInsurance2);
    },
    setInsurance3({ commit }, qInsurance3) {
      commit('setInsurance3', qInsurance3);
    },
  },
});
