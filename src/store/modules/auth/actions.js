import axios from "axios";

export default {
  login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
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
      console.log(response)
      const data = response.data;

      if (response.status !== 201) {
        throw new Error(response.statusText);
      }

      console.log(data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
