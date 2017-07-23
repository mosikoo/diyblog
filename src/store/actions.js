import Vue from 'vue';

const beginLoading = (commit) => {
  commit('LOADING_TOGGLE', true);
};
const stopLoading = (commit) => {
  commit('LOADING_TOGGLE', false);
};

const urlPrefix = '';

export default {
  getArticles({ commit }) {
    beginLoading(commit);
    return Vue.http.get(`${urlPrefix}/api/getArticles`)
      .then(res => res.json())
      .then((articles) => {
        stopLoading(commit);
        commit('SET_ARTICLES', articles);
      });
  },
  getArticle({ commit }, id) {
    beginLoading(commit);
    return Vue.http.get(`${urlPrefix}/api/getArticle`, { params: id })
      .then(res => res.json())
      .then((article) => {
        stopLoading(commit);
        commit('SET_ARTICLE', article);
      });
  }
};
