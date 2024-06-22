import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography
} from "@mui/material"
import { themeOptions } from "../page"
import {UpdatePageState} from "../page"
import {states} from "../page"
import { Component, useState } from "react"
import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'



export default function NavBar({ stateUpdate }){
    const pages = [["About Me", states.about], ["Projects", states.projects], ["Games", states.createCharacter], ["Contact Me", states.contact]]
    const [firstRoll, setFirstRoll] = useState(true);
    const [lastRoll, setLastRoll] = useState(0)
    const [currentPage, setCurrentPage] = useState("Welcome");
    function handleClick(clickedPage){
        setCurrentPage(clickedPage[0]);
        stateUpdate(clickedPage[1]);
    }
    function handleSurprise(){
        var roll;
        
        if(firstRoll === true){
            roll = 0;
            setFirstRoll(false);
        }else{
            roll = Math.floor(Math.random() * 11); //Math.random is 0-1(exclusive), output is 0-10
            if(roll === lastRoll){roll = Math.floor(Math.random() * 11);}
            setLastRoll(roll);
        }
        stateUpdate(pages[1])
        switch(roll){
            case 0:
                setCurrentPage("Ouch!");
                return;
            case 1:
                setCurrentPage("Only cool people beyond this point");
                return;
            case 2:
                setCurrentPage("*Click Rejected*");
                return;
            case 3:
                setCurrentPage("I'm stealing your data!");
                return;
            case 4:
                setCurrentPage("You're crushing my bones!");
                return;
            case 5:
                setCurrentPage("Send me compliments through the contact me section");
                return;
            case 6:
                setCurrentPage("Have you looked at my projects?");
                return;
            case 10:
                setCurrentPage("I've heard there's a fun game on this site");
                return;
            default:
                setCurrentPage("Feel free to hire me for your next million dollar project");
                return;
        }
    }
    return(<>
        <AppBar postion="fixed" sx={{bgcolor: themeOptions.palette.primary.main}}>
            <Container maxWidth="xl">
                <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
                    <AccountCircleIcon sx={{mr: 3}} onClick={handleSurprise}/>
                    <Typography sx={{mr: 'auto'}}>{currentPage}</Typography>
                    <Box>
                        {pages.map((page)=>(
                            <Button key={page[0]} onClick={() => handleClick(page)} variant="contained" sx={{bgcolor: "inherit", boxShadow: 0, '&.MuiButton-root:hover':{bgcolor: "transparent"}}}>{page[0]}</Button>
                        ))}
                    </Box>
                    </Toolbar>
            </Container>
        </AppBar>
    </>)
}