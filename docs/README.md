# 组件库列表


### 组件安装

```bash
 $ npm install cd-platform --save-dev
```

### 组件引入


> 全局引入


在 `main.js` 中 分别引入 js 与 css 并通过 use 全局注册

```javascript
import Vue from 'vue';
import PUI from 'cd-platform-ui';
import 'cd-platform-ui/dist/index.css';

Vue.use(PUI)
```

因为是全局注册所以在你的项目组件中 直接使用 比如

```vue
<Card type='task'></Card>
```


> 按需引入


也可以选择`按需引入` 这里需要一些配置:

首先需要安装 `import` 插件
```bash
 $ npm install babel-plugin-import --save-dev
```
安装完成后在根目录中查找或添加 `babel.config.js` 文件 在文件中添加配置

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['import', {
      libraryName: 'cd-platform-ui',
      libraryDirectory: 'dist',
      style: 'css',
    }],
  ],
};
```
如果 你的配置中有其他按需加载的组件 需分别命名 

如 ant-design-vue --> ant     ;    cd-platform-ui --> PUI

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['import', {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: 'css',
    }, 'antd'],
    ['import', {
      libraryName: 'cd-platform-ui',
      libraryDirectory: 'dist',
      style: 'css',
    }, 'PUI'],
  ],
};
```
项目中使用 :

```vue
<template>
    <Card type="task"></Card>
</template>
<script >
import { Card } from 'cd-platform-ui';
export default {
    components: { Card }
}
</script>

```


