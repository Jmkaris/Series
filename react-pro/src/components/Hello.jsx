import React from "react";

function Hello(props) {
  console.log(props);

  const name = "karis";
  return <h1>Hello from a component {props.name} </h1>;
}

export default Hello;
