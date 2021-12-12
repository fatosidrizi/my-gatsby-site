import React from "react";
import Greeting from "./greetings";

// Rendering the <Greeting> component
const SayHello = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Greeting name="Megan" />
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
    </div>
  );
};

export default SayHello;
