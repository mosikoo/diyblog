<template>
<main class="wrap">
  <my-header></my-header>
  <section class="article">
    <article class="block">
      <div class="title">{{article.title}}</div>
      <div class="info">{{article.date | toDate}}</div>
      <section class="markdown-body" v-html="article.content"></section>
    </article>
  </section>
  <my-footer></my-footer>
</main>
</template>

<script>
import { mapState } from 'vuex';
import marked from 'marked';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import 'github-markdown-css';
export default {
  created() {
    this.fetchData();
  },
  updated() {
    this.highlight();
  },
  computed: mapState({
    article: state => {
      state.article.content = marked(state.article.content || '');
console.log(state.article);
      return state.article;
    }
  }),
  methods: {
    fetchData() {

    },
    highlight() {

    }
  },
  components: {
    MyFooter, MyHeader
  },
  watch: {
    '$route': ['fetchData', 'highlight']
  }
}
</script>

<style lang="less" res="stylesheet/less" scoped>
@import '../../style/variables';
.wrap {
  min-height: 100%;
  position: relative;
}

section.article {
  padding-bottom: 160px;
  line-height: 1.6;
  article {
    .title {
      margin: 0.65em 0;
      font-size: 1.5em;
      text-align: center;
    }
    .info {
      color: #7f8c8d;
      margin: 1.2em 0;
      text-align: center;
      span {
        margin-left: 0.5rem;
      }
    }
    // .content {
    //   h2, h3, h4, h5, h6 {
    //     position: relative;
    //     margin: 1em 0;
    //     &:before {
    //       content: "#";
    //       color: @green1;
    //       position: absolute;
    //       left: -0.7em;
    //       top: -4px;
    //       font-size: 1.2em;
    //       font-weight: bold;
    //     }
    //   }
    //   h4, h5, h6 {
    //     &:before {
    //       content: ""
    //     }
    //   }
    //   h2, h3 {
    //     font-size: 22px
    //   }
    //   h4, h5, h6 {
    //     font-size: 18px
    //   }
    //   a {
    //     color: @green1;
    //   }
    //   blockquote {
    //     margin: 2em 0;
    //     padding-left: 20px;
    //     border-left: 4px solid @green1;
    //   }
    //   code, pre {
    //     font-size: 0.8em;
    //     background: #f8f8f8;
    //     font-family: 'Roboto Mono', Monaco, courier, monospace;
    //     color: #525252;
    //   }
    // }
  }
}
</style>
