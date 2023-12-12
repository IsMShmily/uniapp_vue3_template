<template>
  <view class="container">
    <view class="container-text"> Login </view>
    <up-button type="primary" text="登录" @click="login"></up-button
  ></view>
</template>

<script lang="ts" setup>
import { Login_HTTP } from "@/api/login/index";

const login = async () => {
  const res = await Login_HTTP({
    account: "admin",
    password: "123456",
  });
  console.log("%c 登录", "color:red", res.data);
};
</script>

<style lang="scss" scoped>
.container {
  @include center;
  flex-direction: column;
  padding: 400rpx 50rpx;
  &-text {
    font-size: 60rpx;
    margin-bottom: 60rpx;
  }
}
</style>
