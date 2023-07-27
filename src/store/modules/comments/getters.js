export default {
  comments(state) {
    return state.comments;
  },
  hasComments(state) {
    return state.comments && state.comments.length > 0;
  },
};
