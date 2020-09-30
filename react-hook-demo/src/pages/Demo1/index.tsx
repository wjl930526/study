import React, { useState } from "react";
// import ReactDOM from "react-dom";

let a: Array<string | number> = [1,2,3,4,"1"]
let b:[string,number] = ["1",12]
let c = Directions.Down

console.log(c)
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// console.log(directions)

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
      <Child1 num={num} handleClick={setNum} />
      <Child2 text={text} handleClick={setText} />
    </div>
  );
}

export default Parent;
