import axios from "axios";

export default {
  async login(context, payload) {
    const url = "http://localhost:8085/auth";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = response.headers["authorization"].replace("Bearer", "");
      const userId = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      context.commit("setUser", {
        userId,
        token,
      });
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async signup(context, payload) {
    const url = "http://localhost:8085/user/register";

    try {
      const response = await axios.post(
        url,
        { ...payload },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error(response.statusText);
      }

      await context.dispatch("login", {
        email: payload.email,
        password: payload.password,
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
