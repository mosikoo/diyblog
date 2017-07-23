import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

//////////test
// const article = {
//   title: 'requireJs',
//   content: '### requireJs\n\
// 虽然目前requireJs已经不再流行，但是它的思想在前端模块化历程中还是值得学习的。\n\
// 翻看requireJs的源码，个人觉得基本的难点在于：\n\
// * 它的基本逻辑比较复杂，模块依赖模块，流程互相嵌套\n\
// * Module的状态及context的各种变量太多，让人混淆\n\n\
// 所以本篇主要围绕着这两点去讲，理清基本的思路（抛开config各种配置）\n\n\
// #### 入口\n\
// ##### require\n\
// 默认创建`context`，调用`context.makeRequire()`返回`require`\n\
// 除了初始化的`req({})`及`req(cgf)`；其他js执行过程都是require(deps, callback) —>{script监听事件`context.onScriptLoad` —> `context.completeLoad(data.id);` —> 获取模块且初始化} —> 执行nextTick\n\
// ##### define\n\n\
// > `test` \n\n\
// 基本用法最后只有一步 `globalDefQueue.push([name, deps, callback]);`,name不定义为`null` ，\n\
// 然后执行script监听事件`context.onScriptLoad`\n\
// ```js\n\
// console.log(\'test\')\n\
// ```\n\n\
// [baidu](http://baidu.com)\
// ',
//   date: Date.now()
// };
////////////
const store = new Vuex.Store({
  state: {
    isLoading: false,
    isToasting: false,
    articles: [],
    article: {},
    user: {
      name: '',
      pwd: ''
    },
    links: [{
      to: '/archive',
      name: 'HOME'
    }, {
      name: 'ARTICLES',
      to: '/article'
    }],
    toast: {
      promise: null,
      info: '',
      btnNum: 1,
      toastResolve() {},
      toastReject() {}
    }
  },
  mutations,
  getters,
  actions
});

export default store;
