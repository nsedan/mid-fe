// Given the following code could you re-write it in order to make the processData method testable in a simple jest unit test, please supply a test with your answer.
import React from "react";

const Test = () => {
  const [data, setData] = React.useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  const processData = () => {
    const newData = [];
    data.forEach((e) =>
      newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
    );
    setData(newData);
  };
  return (
    <div>
      {JSON.stringify(data)}
      <button type="button" onClick={processData}>
        Run
      </button>
    </div>
  );
};

export default Test;

// Answer
import React from "react";

export const processData = (data) => {
  const newData = [];
  data.forEach((e) =>
    newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
  );
  return newData;
};

const Test = () => {
  const [data, setData] = React.useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  const onClickHandler = () => {
    const newData = processData(data);
    setData(newData);
  };

  return (
    <div>
      {JSON.stringify(data)}
      <button type="button" onClick={onClickHandler}>
        Run
      </button>
    </div>
  );
};

export default Test;

//Test processData.test.js
import { processData } from "./ReactApp";

test("multiply value key by its multiplier key", () => {
  const data = [{ value: 2, multiplier: 2 }];
  const expectedData = [{ value: 4, multiplier: 2 }];

  expect(processData(data)).toEqual(expectedData);
});
