# React Hook
> Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。


> Hook就是JavaScript函数，但是使用他们有两个额外的规则:
> 只能在 **函数最外层** 调用 Hook。不要在循环、条件判断或者子函数中调用。
>  只能在React的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。(自定义Hook中也可调用Hook)


```
useState

useEffect

自定义Hook（自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook）

useContext

useReducer
```

```
// 只运行一次的 effect（仅在组件挂载和卸载时执行）,告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
useEffect(() => {
  
}, []); 
```

### 自定义Hook
React 中有两种流行的方式来共享组件之间的状态逻辑: [render props](https://zh-hans.reactjs.org/docs/render-props.html) 和[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html),而在Hook中是使用自定义Hook来实现。

自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。