<template>
  <main class="wrap">
    <my-header></my-header>
    <section class="archive">
      <ul>
        <li
          class="item"
          v-for="(year, index) in archive.years"
          :key="index"
        >
          <p>{{year}}</p>
          <ul>
            <li
              v-for="(article, index) in archive.articleInYear[year]"
              :key="index"
            >
              <span class="data">
                {{article.date | toDate}}
              </span>
              <router-link
                :to="{path: '/article', query:{id: article._id}}"
                tag="span"
                class="title"
              >
                {{article.title}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

    </section>
    <my-footer></my-footer>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';
import Spinner from '../common/Spinner.vue';

export default {
  created() {

  },
  computed: {
    ...mapState(['archive', '']),
    ...mapGetters(['archive'])
  },
  methods: {

  },
  components: {
    MyHeader, MyFooter, Spinner
  }
}
</script>

<style lang="less" scoped>
footer {
  position: absolute;
  bottom: 0;
  div {
    text-align: center;
    color: #aaa;
    font-weight: 100;
  }
  div.copyright {
    font-size: 12px;
    height: 40px;
    padding-top: 26px;
    border-top: 1px solid #ddd;
  }
  div.login {
    font-size: 14px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>