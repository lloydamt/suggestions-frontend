import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state() {
    return {
      movies: [
        {
          id: 1,
          title: "John Wick",
          description: "Man with guns",
          year: 2014,
          genre: "action",
          likes: 0,
          saves: 0,
          userRating: 0,
        },
        {
          id: 2,
          title: "Star Wars",
          description: "A movie about the galaxy",
          year: 2019,
          genre: "action",
          likes: 0,
          saves: 0,
          userRating: 0,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
