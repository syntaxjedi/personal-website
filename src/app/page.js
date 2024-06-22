'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import CommandParse from './CommandHelper';
import { useState } from 'react';
import NavBar from './Components/navbar'
import { Box, Typography } from "@mui/material";
import QuickLook from "./Components/quickLook";





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

  function EnterCommand(e){
    setCommandOutput(e.target.value);
  }

  function UpdatePageState(state){
    console.log(state);
    setPageState(states(state));
  }  
  const navBarClick = (state) =>{
        setPageState(state);
  };

  const test = (click) => {
    console.log("Clicked");
    console.log(click);
  }

  switch(pageState){
    case states.createCharacter:
      return(
        <div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
          <NavBar stateUpdate={navBarClick}/>
          <box sx={{bgcolor: 'inherit', display: 'flex'}} >
            <form method="post" onSubmit={SubmitForm} style={{marginTop: 60, paddingTop: 20, paddingLeft:'40vw'}}>
              <label>Character Name: <Input name="charName" defaultValue="Some Text" /> </label>
              <div>
                Class:<br/>
                <label><Input type="radio" name="class" value="Healer" defaultChecked="true"/> Healer </label><br/>
                <label><Input type="radio" name="class" value="Tank" /> Tank </label><br/>
                <label><Input type="radio" name="class" value="Rogue" /> Rogue </label>
              </div>
              <br />
              <Button variant="contained" type="submit" sx={{bgcolor: themeOptions.palette.primary.main, color: 'black', '&.MuiButton-root:hover':{bgcolor: themeOptions.palette.secondary.dark}}}>Save</Button>
            </form>
          </box>
        </div>
      );
    case states.game:
      return(
        <div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
          <NavBar stateUpdate={navBarClick}/>
          <h1>Game</h1>
          <Container sx={{bg: themeOptions.primary}}>
          <ReactButton style={{display: "inline"}}/>
          </Container>
          <Container style={{background: '#2b2b2b'}}>
          <label>Command Output: {commandOutput}</label><br/>
          <label>Input: </label>
          <SubmitInput name="command" defaultValue="Input Command"/>
          </Container>
        </div>
      );
    case states.generateRooms:
      return(
        <div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
        </div>
      );
      case states.about:
        return(
          <div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
            <NavBar stateUpdate={navBarClick}/>
          </div>
        );
      case states.projects:
        return(
          <div style={{background: themeOptions.palette.primary.dark, height: '100vh'}}>
            <NavBar stateUpdate={navBarClick}/>
            <div style={{paddingTop: 60}}/>
            <QuickLook />
          </div>
        );
    default:
      setPageState(states.about);
      return;
  }
}