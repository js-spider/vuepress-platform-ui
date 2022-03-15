####  注意

添加静态资源 比如图片 需要放到 `docs/.vuepress/public` 中 

如果在`config.js`中配置了 `base` 怎需要注意 静态文件的引入路径

比如 ：  `base` 配置了  `base: '/platform-ui/'`
则：
```vue
<img src="/platform-ui/logo.png" alt="">
```
