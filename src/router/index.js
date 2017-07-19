import Vue from 'vue';
import Router from 'vue-router';
import Archive from '../components/front/Archive.vue';
import Article from '../components/front/Article.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/archive', name: 'archive', component: Archive },
    { path: '/article', name: 'article', component: Article },
    // { path: '/', component: Login },
    // {
    //   path: '/console',
    //   component: Console,
    //   children: [
    //     { path: '', component: Articles },
    //     { path: 'articles', name: 'articles', component: Articles },
    //     { path: 'editor', name: 'editor', component: Editor },
    //     { path: 'links', name: 'links', component: Links },
    //     { path: 'account', name: 'account', component: Account }
    //   ]
    // }
  ]
});

export default router;
