<template>
  <header class="myHeader">
    <div class="wrap">
      <ul class="menu">
        <li v-for="link in links" :key="link.name">
          <router-link :to="{path: link.to}">
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    console.log('create successfully!');
  },
  computed: mapState(['links']),
  methods: {
    load() {
      alert(11)
      this.$store.commit('LOADING_TOGGLE', !this.$store.state.isLoading);
    },
    toast() {
      this.$store.commit('TOASTING_TOGGLE', !this.$store.state.isToasting);
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../style/variables';
  header.myHeader {
    border-bottom: 1px solid @border-color;
    min-height: 60px;
    .wrap {
      width: 70%;
      margin: 0 auto;
    }
    ul {
      margin: 0;
      li {
        list-style: none;
        display: inline-block;
        vertical-align: middle;
        padding: 18px 14px;
        a {
          color: #2c3e50;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: @green2;
          }
        }
      }
    }
  }
</style>