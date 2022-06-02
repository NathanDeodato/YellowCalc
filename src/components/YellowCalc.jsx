import React, { useState } from 'react';

import {
  YellowBox,
  NumBox,
  NumVisor,
  BoxInputs,
  InputNumber,
  BoxButtons,
  Button,
} from '../styles/YellowCalc';

import {
    add,
    less,
    clear,
    mult,
    divi
} from "../assets/assets"

export default function YCalc() {
  const [number, setNumber] = useState(0);
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);

  return (
    <YellowBox>
      <Window />
      <NumBox>
        <NumVisor>{number}</NumVisor>
      </NumBox>
      <BoxInputs>
        <InputNumber
          type="number"
          value={inputOne}
          onChange={(e) => setInputOne(Number(e.target.value))}
        ></InputNumber>
        <InputNumber
          type="number"
          onChange={(e) => setInputTwo(Number(e.target.value))}
        ></InputNumber>
      </BoxInputs>
      <BoxButtons>
        <Button src={add} onClick={() => setNumber(inputOne + inputTwo)} />
        <Button src={less} onClick={() => setNumber(inputOne - inputTwo)} />
        <Button src={clear} onClick={() => setNumber(0)}/>
        <Button src={mult} onClick={() => setNumber(inputOne * inputTwo)} />
        <Button src={divi} onClick={() => setNumber(inputOne / inputTwo)} />
      </BoxButtons>
    </YellowBox>
  );
}

import { Win, Circle } from '../styles/YellowCalc';

function Window() {
  return (
    <Win>
      <Circle />
      <Circle />
      <Circle />
    </Win>
  );
}
