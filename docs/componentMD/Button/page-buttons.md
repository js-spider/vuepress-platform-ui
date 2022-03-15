# Buttons组件

> 页面跳转相关的功能 比如： 页面刷新/同页面跳转/跨页面跳转/返回上一页  并且支持 tooltip  
> 该组件有两种展示方式  button  和  a 标签 

### 示例 1

 ###### 可点击查看 如下内容


 <buttons-pageA></buttons-pageA>





### 代码

```vue
<PageButton :to="0">刷新</PageButton>
<PageButton :to="-1">返回上一页</PageButton>
<PageButton to="http://www.baidu.com">新tab跳转</PageButton>
<PageButton to="http://www.baidu.com" :blank="false">本页跳转</PageButton>
<PageButton :to="0" tooltip="展示tooltip 内容">展示tooltip</PageButton>
<PageButton :to="0" :disabled="true">(disabled) 禁用</PageButton>
<PageButton :to="0">
  <template #text>
    <a-icon type="loading-3-quarters" />
    <span style="color: red; font-size: 8px"> (自定义内容) </span>
  </template>
</PageButton>
```
### 示例 2 
 ###### 可点击查看 如下内容

<div style="margin-top: 24px">
 <buttons-page></buttons-page>
</div>


```vue
<PageButton type="button" :to="0">刷新</PageButton>
<PageButton type="button" :to="0" tooltip="显示tooltip的相关内容">显示tooltip的相关内容</PageButton>
<PageButton type="button" :to="0" :disabled="true">(disabled) 禁用</PageButton>
```


### 参数

|   参数  |  类型  |  必填  |  默认值  |  说明  |
|   ---  |  ---  | -------|  ----- | --- |
| type   | String |   否  | `a`  |  `a` or `button` |
| to   | String \| Number |   否  | `无` |  `0` or `-1` or `<url>` |
| blank   | Boolean |   否  | `true`  |  false 时本页跳转 |
| tooltip   | String|   否  | `无`  |  tooltip 内容 |
| btnType   | String|   否  | `primary`  | antd button 仅 `type=button` 时生效  |
| disabled   | Boolean|   否  | `false`  |  禁用组件 |
| text   | Slot |   否  | 无  |  [slot:text](#slotText)|

### <a id="slotText">slot:text</a> 
```vue
<PageButton :to="0">
  <template #text>
    <a-icon type="loading-3-quarters" />
    <span style="color: red; font-size: 8px"> (自定义内容) </span>
  </template>
</PageButton>
```
