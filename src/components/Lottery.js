import React, { useState } from "react";

import "./Lottery.css";
import CountUp from "react-countup";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

import audio from '../sound/sound_buddha.mp3';

function randomNumber() {
  return Math.ceil(Math.random() * 9);
}

function playSound() {
  new Audio(audio).play()
} 

function LotteryRandomMachine({ title, size }) {
  const intialCounter = Array(size).fill(0); // [0,0,0]

  const [counter, setCounter] = useState(intialCounter);
  const result = counter.map(() => randomNumber()); //[6,9]

  const random = () => {
    // setCounter([randomNumber(), randomNumber(), randomNumber()])
    setCounter(result)
    playSound();
  };

  return (
    <>
      <h1 className="lottery-tiltle">{title}</h1>
      <div className="lottery-container">
        {counter.map((item) => (
          <CountUp className="lottery-number" duration={10} end={item}></CountUp>
        ))}
      </div>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={3}
        >
          <Button variant="contained" onClick={random}>
            อฐิษฐานก่อนทาย
          </Button>
        </Box>
      </div>
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function PageLottery() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={3}>
      <Grid item md={4}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://us-fbcloud.net/wb/data/1238/1238759-img.ug345g.113hc.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                รับเลขเด็ด
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ตรงตัว โต๊ดเต๊ง ต้อนรับเศรษฐีใหม่ จากเกจิ อาจารย์ชื่อดัง
              </Typography>
            </CardContent>
          </Card>
        </Item>
      </Grid>
    </Box>
  );
}

function Lottery() {
  return (
    <>
      <PageLottery></PageLottery>
      <LotteryRandomMachine
        title="สามตัวงวดนี้คือ..."
        size={3}
      ></LotteryRandomMachine>
      <LotteryRandomMachine
        title="สองตัวงวดนี้คือ..."
        size={2}
      ></LotteryRandomMachine>
    </>
  );
}

export default Lottery;
