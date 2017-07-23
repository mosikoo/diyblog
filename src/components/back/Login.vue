<template>
<section class="login">
  <div class="form">
    <div class="form-item" v-for="item in formInfo" :key="item.label">
      <div class="form-item-label">
        <label>{{item.label}}</label>
      </div>
      <div class="form-item-control-wrapper">
        <input type="password" :placeholder="item.placeholder" class="form-item-input" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      formInfo: [
        {
          placeholder: 'please input you username',
          label: 'username'
        },
        {
          placeholder: 'please input your password',
          label: 'password'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .form {
    margin: 0 auto;
    padding: 20px;
    width: 540px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    .form-item {
      color: rgba(0,0,0,.65);
      vertical-align: top;
      font-size: 12px;
      position: relative;
      margin: 0 0 24px 0; 
    }
    .form-item-label {
      text-align: right;
      padding-right: 10px;
      vertical-align: middle;
      display: inline-block;
      line-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 20%;
    }
    .form-item-control-wrapper {
      width: 60%;
      vertical-align: middle;
      display: inline-block;
    }
    .form-item-input {
      height: 32px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s;
      width: 100%;
      padding-left: 5px;
      &:hover {
        border-color: #49a9ee;
      }
      &:focus {
        box-shadow: 0 0 0 2px rgba(16,142,233,.2);
        outline: 0;
      }
    }
  }
}

</style>