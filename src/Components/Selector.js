import React from "react";
import { data } from "../Configs/data";
import { SelectorStyle } from "./components.style";
import SelectorItem from "./SelectorItem";

function Selector(props) {
  return (
    <SelectorStyle>
      {data.map((img) => (
        <SelectorItem img={img} />
      ))}
    </SelectorStyle>
  );
}

export default Selector;
