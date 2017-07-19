<template>
  <footer>
    <div class="copyright">
      &copy2017 GitHub-vue-blog, Inc
    </div>
    <router-link :to="{path: '/'}" class="login" tag="div">
      https://github.com/mosikoo
    </router-link>
  </footer>
</template>

<script></script>

<style lang="less" scoped>
  footer {
    width: 100%;
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
