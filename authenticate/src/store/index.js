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
    removeToken(state) {
      state.token = "";
      state.user_id = "";
      localStorage.removeItem('token'); // <-- Fixed removing localStorage items
      localStorage.removeItem('user_id'); // <-- Fixed removing localStorage items
      state.isAuthenticated = false; // <-- Added to reset isAuthenticated
    }
  },
  actions: {
  },
  modules: {
  }
});
