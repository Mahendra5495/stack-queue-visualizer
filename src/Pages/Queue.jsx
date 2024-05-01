import { useRef } from "react";
import Button from "../components/Button";
import { useState } from "react";

function Queue() {
  const inputRef = useRef(null);
  const [queue, setQueue] = useState([]);

  function enqueue() {
    let element;
    if (inputRef.current) {
      element = inputRef.current.value;
      if (!element) {
        alert("Nothing to enqueue");
        return;
      }
    }
    setQueue([...queue, parseInt(element)]);
    console.log(element);
    inputRef.current.value = "";
  }
  function deque() {
    if (queue.length === 0) {
      alert("Nothing to deque");
      return;
    }
    const temp = [...queue];
    let removed = temp.shift();
    console.log(removed);
    setQueue(temp);
  }

  function reset() {
    setQueue([]);
  }
  return (
    <>
      <input type="text" ref={inputRef} className="" />
      <Button text="enqueue" onClickFunc={enqueue} />
      <Button text="deque" onClickFunc={deque} />
      <Button text="reset" onClickFunc={reset} />
      <h3>Queue content</h3>
      <div className="flex flex-row">
        {queue.map((item, idx) => (
          <div
            key={idx}
            style={{ border: "1px solid black", padding: "5px", margin: "2px" }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Queue;
