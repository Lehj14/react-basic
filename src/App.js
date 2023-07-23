import { useEffect, useState } from "react";
import { Message } from "./Message";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setAdvice(data.value);
    setCount((c) => c + 1);
  }

  //function, 2nd argument
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
      <h1>{advice}</h1>
    </div>
  );
}
