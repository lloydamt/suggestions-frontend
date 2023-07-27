import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state() {
    return {
      comments: [
        {
          id: 1,
          content: "I would rate it a 100 if I could",
          user: {
            username: "admin",
          },
          movie: {
            id: 1,
          },
        },
        {
          id: 2,
          content: "Superb",
          user: {
            username: "user",
          },
          movie: {
            id: 1,
          },
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
