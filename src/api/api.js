import axios from "axios";

export const usersAPI = {
  getUsers: async () => {
    const responce = await axios.get(
      "https://hp-api.herokuapp.com/api/characters"
    );
    return responce.data;
  },
};
