<template>
  <Container>
    <PageButton :to="0">刷新</PageButton>
    <CurBr />
    <PageButton :to="-1">返回上一页</PageButton>
    <CurBr />
    <PageButton to="http://www.baidu.com">新页面跳百度</PageButton>
    <CurBr />
    <PageButton to="http://www.baidu.com" :blank="false"
      >本页面跳百度</PageButton
    >
    <CurBr />
    <PageButton :to="0" tooltip="展示tooltip 内容">展示tooltip</PageButton>
    <CurBr />
    <PageButton :to="0" :disabled="true">禁用</PageButton>
    <CurBr />
    <PageButton :to="0">
      <template #text>
        <a-icon type="loading-3-quarters" />
        <span style="color: red; font-size: 8px"> (自定义内容) </span>
      </template>
    </PageButton>
    <CurBr />
    <PageButton type="button" :to="0" tooltip="展示tooltip 内容"
      >Button</PageButton
    >
    <CurBr />
    <PageButton :to="0" type="button" :disabled="true">Button禁用</PageButton>
    <CurBr />
    <PageButton :to="0" type="button" btnType="danger"
      >Button antd 类型</PageButton
    >
  </Container>
</template>
