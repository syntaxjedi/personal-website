'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import { useState } from 'react';
import NavBar from './_components/navbar'
import { Box, Typography } from "@mui/material";
import QuickLook from "./_components/quickLook";





export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2a402a',
      dark: '#1D2C1D',
      light: '#546654',
    },
    secondary: {
      main: '#f50057',
      dark: '#36695D',
    },
    info: {
      main: '#882d71',
    },
    success: {
      main: 'rgb(53, 122, 56)',
    },
  },
};


export const states = Object.freeze({
  createCharacter: "createCharacter",
  game: "game",
  generateRooms: "generateRooms",
  about: "about",
  contact: "contact",
  projects: "projects"
});


export default function Home() {
  
  const [charName, setCharName] = useState('');
  const [charClass, setCharClass] = useState('');
  const [commandOutput, setCommandOutput] = useState('Welcome');
  const [rooms, addRoom] = useState(new Map());
  //const [currentRoom, setCurrentRoom] = useState(roomData);
  const [pageState, setPageState] = useState(states);

  const SubmitInput = () =>{
    const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
        let output = CommandParse(event.target.value);
        setCommandOutput(output);
      }
    }
    return <input type="text" onKeyDown={handleKeyDown} />
  }
  
  function SubmitForm(e){
    e.preventDefault();
    setPageState(states.game);
    const form = e.target //target = calling object
    const formJson = Object.fromEntries(form.entries());
    setCharName(formJson["charName"]);
    setCharClass(formJson["class"]);
    //const json = fetch(".\\Games\\TestGame.json").then((res) => {console.log(res.json()); return res.json();});
    //rooms.set(firstRoom.roomKey, firstRoom);
    //rooms.set(secondRoom.roomKey, secondRoom);
    //setCurrentRoom(rooms.get(0));
    //rooms.push(firstRoom);
    //rooms.push(secondRoom);
  }

//<div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
  return(<><p1>Hello World</p1></>);
}