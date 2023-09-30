export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    state.setAutoLogout = false;
  },
  clearUser(state) {
    state.userId = null;
    state.token = null;
    state.setAutoLogout = false;
  },
  setAutoLogout(state) {
    state.setAutoLogout = true;
  },
};
