import { defineStore } from "pinia";

import { ref } from "vue";

let createUserStore = defineStore(
  "user",
  () => {
    const user_token = ref("userStroe-ok");

    const clearUserInfo = () => {};
    return { user_token, clearUserInfo };
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
        getItem(key) {
          return uni.getStorageSync(key);
        },
      },
    },
  }
);

export default createUserStore;
