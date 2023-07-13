import axios from "axios";
import {getCookie} from "../utils/cookie/cookie";

//const token = localStorage.token;

const instance = axios.create({
  baseURL: 'https://platform.fatsecret.com/rest/server.api/',
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    //Authorization: `Bearer ${token}`,
    Authorization: `Bearer ${getCookie('Bearer')}`,
  },
})

export const searchApi = {
  async getResults(string = "") {
    const response = await instance.get(`?method=foods.search&search_expression=${string}&format=json`);
    const data = await response.data;
    if (data?.foods) {
      return data.foods;
    } else {
      throw new Error(data.error.message);
    }
  },
  async getById(id) {
    const response = await instance.get(`?method=food.get.v3&food_id=${id}&format=json`);
    const data = await response.data;
    return data.food;
  }
}