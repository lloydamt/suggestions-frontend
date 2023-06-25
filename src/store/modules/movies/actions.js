export default {
  addMovie(context, payload) {
    context.commit("suggestMovie", payload);
  },
};
