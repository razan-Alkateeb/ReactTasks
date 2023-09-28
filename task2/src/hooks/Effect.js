
//useEffect(<function>, <dependency>)
// component life cycle
// mount => update => unMount



import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

 
  useEffect(() => {
   console.log('change count');
   document.title = `${count} times`;
  },[count]);



  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default ExampleComponent;
