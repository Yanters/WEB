import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
      //   console.log("INSIDE useEffect");
    }, 1000);
    // console.log("OUTSIDE useEffect");

    return () => {
      clearInterval(interval);
      console.log("cleanUp");
    };
  }, [forwards]);

  return counter;
};

export default useCounter;
