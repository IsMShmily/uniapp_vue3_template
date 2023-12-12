# **unippp** Vue3 Ts template

- 本项目基于uni-app框架二次封装vue3、ts、pinia、uview-plus、Eslint、prettierrc、husky、commitlint的模版开发项目，通过配置Eslint、prettierrc帮助开发人员更好地规范化代码，提高代码的质量和可读性，通过husky和commitlint帮助开发者在代码提交时规范化提交信息，从而提高代码可维护性，
<br/>

- uniapp [官方文档](https://uniapp.dcloud.net.cn/component/)

- uview-plus [官方文档](https://uiadmin.net/uview-plus/)
<br/>

- 项目中二次封装uni.request、pinia、H5跨域代理、H5与其他小程序的基地址进行区分等基础配置，帮助开发者快速构建应用程序。


<br/>

值|平台
-|-|
h5|H5
mp-weixin|微信小程序
mp-alipay|支付宝小程序
mp-baidu|百度小程序
mp-qq|QQ小程序

<br/>
<br/>


- **安装依赖**

```
 pnpm i
```

- **运行到指定平台**

```javascript
pnpm run dev:h5  //启动H5
pnpm run dev:mp-wx //启动微信小程序
pnpm run dev:mp-alipay //启动支付宝小程序

//...具体查看package.json
```

- **构建发布**

```javascript
pnpm run build:h5  //启动H5
pnpm run build:mp-wx //启动微信小程序
pnpm run build:mp-alipay //启动支付宝小程序

//...具体查看package.json
```


