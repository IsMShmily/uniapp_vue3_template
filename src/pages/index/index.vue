<template>
  <view class="container">
    <image class="container-logo" src="/static/logo.png" />
    <view class="container-text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view style="padding: 50px">
      <up-button type="primary" text="去登录" @click="goLogin"></up-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import createUserStore from "@/store/modules/user";
const title = ref("欢迎使用Uniapp Vue3 template");

const userStore = createUserStore();
console.log("%c pinia状态：", "color:red", userStore.user_token);

const goLogin = () => {
  uni.redirectTo({
    url: "/pages/Login/index",
  });
};
</script>

<style scoped lang="scss">
.container {
  @include center;
  flex-direction: column;
  &-logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 400rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
  &-text-area {
    margin-top: 50rpx;
    .title {
      font-size: 36rpx;
      color: #505050;
      font-weight: bold;
    }
  }
}
</style>
