import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  // console.log("ForwardCounter", counter);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
