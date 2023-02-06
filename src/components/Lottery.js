import React, { useState } from 'react'

import './Lottery.css';
import CountUp from 'react-countup';

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Dialog } from '@mui/material';


function randomNumber() {
  return Math.ceil(Math.random() * 9)
}

function LotteryRandomMachine({ title, size }) {
  const intialCounter = Array(size).fill(0) // [0,0,0]

  const [counter, setCounter] = useState(intialCounter)
  const result = counter.map(() => randomNumber()) //[6,9]


  const random = () => {
    // setCounter([randomNumber(), randomNumber(), randomNumber()])
    setCounter(result)
  }

  return (
    <>
      <h1 className='lottery-tiltle'>{title}</h1>
      <div className='lottery-container'>
        {
          counter.map((item) =>
            <CountUp className='lottery-number'
              end={item}
              duration={5}
              //onEnd={ showAlert }
            >
            </CountUp>)
   
        }

      </div>
      <button className='lottery-random-button'
        onClick={random}>
        อฐิษฐานก่อนทาย
      </button>

    </>
  )
}

function Lottery() {
  return (
    <>
      <LotteryRandomMachine title='สามตัวงวดนี้คือ...' size={3}></LotteryRandomMachine>
      <LotteryRandomMachine title='สองตัวงวดนี้คือ...' size={2}></LotteryRandomMachine>

    </>
  )
}


export default Lottery