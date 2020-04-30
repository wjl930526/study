import React, { useState } from "react";
// import ReactDOM from "react-dom";

function Child1(props: any) {
  console.log(props);
  const { num, handleClick } = props;
  return (
    <div
      onClick={() => {
        handleClick(num + 1);
      }}
    >
      child
    </div>
  );
}

function Child2(props: any) {
  // console.log(props);
  const { text, handleClick } = props;
  return (
    <div>
      child2
      <Grandson text={text} handleClick={handleClick} />
    </div>
  );
}

function Grandson(props: any) {
  console.log(props);
  const { text, handleClick } = props;
  return (
    <div
      onClick={() => {
        handleClick(text + 1);
      }}
    >
      grandson
    </div>
  );
}

const Parent: React.FC = () => {
  let [num, setNum] = useState(0);
  let [text, setText] = useState(1);

  return (
    <div>
      <p>123</p>
      <Child1 num={num} handleClick={setNum} />
      <Child2 text={text} handleClick={setText} />
    </div>
  );
}

export default Parent;
