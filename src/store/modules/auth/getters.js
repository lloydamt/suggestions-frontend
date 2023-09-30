export default {
  isAuthenticated(state) {
    return !!state.token;
  },
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  autoLoggedOut(state) {
    return state.autoLogout;
  },
};
