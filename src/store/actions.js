import { newsList } from '../api/index.js';

export default {
    async FETCH_NEWS({commit}) {
        const response = await newsList()
        commit('SET_NEWS', response.data);
        return response;
      },
}