import axios from "axios";

let timer;

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
      const duration = Number(response.headers["duration"]);
      const userId = response.data;

      const expireIn = new Date().getTime() + duration;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("expiresIn", String(expireIn));

      timer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, duration);

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
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expiresIn = Number(localStorage.getItem("expiresIn"));

    const durationRemaining = expiresIn - new Date().getTime();

    if (durationRemaining < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch("autoLogout");
    }, durationRemaining);

    if (token && userId) {
      context.commit("setUser", {
        userId,
        token,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");

    clearTimeout(timer);

    context.commit("clearUser");
  },
  autoLogout(context) {
    console.log("here");
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
