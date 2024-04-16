import { createStore } from 'vuex';

export default createStore({
  state: {
    token: "",
    user_id: "",
    isAuthenticated: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');
        state.user_id = localStorage.getItem('user_id');
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    setToken(state, data) {
      state.token = data.token;
      state.user_id = data.user_id;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.user_id);
      state.isAuthenticated = true;
    },
  },
  actions: {
  },
  modules: {
  }
});
