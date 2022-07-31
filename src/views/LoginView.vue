<template>
  <div>
    <van-nav-bar title="登录"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset class="login">
        <van-field
          v-model="data.username"
          name="mobile"
          placeholder="请输入手机号"
          autocomplete="on"
          :rules="PhoneRules"
        >
          <template #label>
            <van-icon name="phone-o" />
          </template>
        </van-field>
        <van-field
          v-model="data.code"
          type="text"
          name="code"
          placeholder="请输入验证码"
          autocomplete="on"
          :rules="CodeRules"
        >
          <template #label>
            <van-icon name="card" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { Toast } from "vant";
import { reqGetCode } from "../api/user";
import { PhoneRules, CodeRules } from "./rules/rules.js";
import { ref, reactive, toRef } from "vue";
const data = reactive({
  username: "",
  code: "",
});

const onSubmit = async values => {
  try {
    let result = await reqGetCode(values);
    Toast.success("登陆成功，3秒自动跳转...");
  } catch (error) {
    Toast.fail("登陆失败");
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #c3a5c6;
  :deep(.van-nav-bar__content) {
    color: #fff;
  }
}
.van-button {
  background-color: #c3a5c6;
  border: none;
  border-radius: 0;
}
:deep(.login) {
  .van-field__label {
    flex: 1;
  }
  .van-cell__title {
    font-size: 50px;
    flex: 0;
  }
}
</style>
