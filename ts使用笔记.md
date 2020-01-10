# ts使用笔记

## 获取dom节点时提示类型不存在

`
  let block = document.querySelectorAll(".block") as NodeListOf<HTMLElement>;
`

## 给window添加变量

`
declare interface Window {
  xxx: () => void;
  // [key: string]: any;
}
`
## 使用未支持ts的第三方插件

`
declare module 'weixin-js-sdk';
`
