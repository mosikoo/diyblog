import Vue from 'vue';

const beginLoading = (commit) => {
  commit('LOADING_TOGGLE', true);
  return Date.now();
};


export default {
  getArticles: ({ commit }) => {
    const start  = beginLoading(commit);
    return Vue.http.get('/api/getArticles')
      .then(res => res.json())
      .then((articles) => {
        // stopLoading(commit, start);
        commit('SET_ARTICLES', articles);
      });
  }
};
