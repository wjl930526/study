### Ref
```
  const ref = React.createRef();
```
### Fragments
```
  // tr标签中无法使用div，但是需要将td封装为组件时怎么处理()？
  // td封装为组件时渲染后的结构(无效,tr中不允许有div)
  <table>
    <tr>
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    </tr>
  </table>
  // 可以使用Fragments,如下：(可用且仅可用key)
  class Columns extends React.Component {
    render() {
      return (
        <React.Fragment key={xx}>
          <td>Hello</td>
          <td>World</td>
        </React.Fragment>
      );
    }
  }
  或短语法(不支持 key 或属性)
  class Columns extends React.Component {
    render() {
      return (
        <>
          <td>Hello</td>
          <td>World</td>
        </>
      );
    }
  }
```
### 高阶组件(即参数为组件，返回值为新组件的函数)
高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。**高阶组件即参数为组件，返回值为新组件的函数。**

### Render Prop
```
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

```
### Render Props
render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式。事实上， ***任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”***.
```
比如可以将上方例子中的render改成children

{this.props.test(this.state)}

<Mouse test={mouse => (
  <Cat mouse={mouse} />
)}/>
```
children prop 并不真正需要添加到 JSX 元素的 “attributes” 列表中。相反，你可以直接放置到元素的内部！

> props.children: 每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容。
```
{this.props.children(this.state)}

<Mouse>
  {mouse => (
    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
  )}
</Mouse>
```