/* eslint-disable prefer-const */

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2", "string3"];

export default function FindIndex() {

    const fourIndex = numberArray1.findIndex(a => a === 3);
    const string3Index = stringArray1.findIndex(a => a === 'string2');

    return (
      <div id="wd-find-function">
        <h4>FindIndex function</h4>
        fourIndex = {fourIndex} <br />
        string3Index = {string3Index} <hr />
      </div>
  );}