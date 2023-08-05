export default {
  addComment(state, payload) {
    const id = state.comments.length + 1000;
    const user = {
      username: "test",
    };
    const movie = { id: Number(payload.movieId) };
    const comment = {
      id,
      content: payload.content,
      user,
      movie,
    };
    state.comments.push(comment);
  },
};
