import { useRef } from "react";
import Button from "../components/Button";
import { useState } from "react";

function Stack() {
  const [stack, setStack] = useState([]);
  const inputRef = useRef(null);

  function push() {
    let element;
    if (inputRef.current) {
      element = inputRef.current.value;
      if (!element) {
        alert("Input value not given");
        return;
      }
    }
    setStack([...stack, parseInt(element)]);
    inputRef.current.value = "";
    console.log(stack);
  }
  function pop() {
    if (stack.length === 0) {
      alert("Nothing to pop");
      return;
    }
    const temp = [...stack];
    console.log(temp.pop());
    setStack(temp);
    console.log(stack);
  }
  function reset() {
    setStack([]);
  }
  return (
    <>
      <div className="flex w-3/5 mx-auto p-10 justify-around">
        <input type="text" id="stack-" ref={inputRef} className="w-3/6" />
        <Button text="push" onClickFunc={push} color="bg-green-500" />
        <Button text="pop" onClickFunc={pop} color="bg-red-500" />
        <Button text="reset" onClickFunc={reset} color="bg-red-700" />
      </div>

      <h3>Stack content</h3>
      <div
        style={{ height: "50vh" }}
        className="bg-gray-300 flex flex-col-reverse w-3/12 m-auto h-3/6"
      >
        {stack.map((item, idx) => (
          <div key={idx} className="text-center bg-white m-1 rounded-lg text-2xl">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Stack;
