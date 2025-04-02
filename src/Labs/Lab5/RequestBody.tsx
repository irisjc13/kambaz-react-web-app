import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function RequestBody() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("add");

  const calculate = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a, b, operation }),
    });
    const text = await response.text();
    setResult(text);
  };

  return (
    <div id="wd-request-body">
      <h3>Request Body</h3>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="form-control mb-2"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="form-select mb-2"
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <button className="btn btn-primary mb-2" onClick={calculate}>
        Calculate
      </button>

      <div>Result: {result}</div>
    </div>
  );
}
