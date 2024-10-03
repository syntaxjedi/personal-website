//'use client'
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography
} from "@mui/material"
//import { themeOptions } from "../page"
import { useState } from "react"
import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from "next/link"



export default function NavBar(){
    const pages = [["Home", "Index"], ["About Me", "About"], ["Projects", "Projects"], ["Games", "Games"], ["Contact Me", "Contact"]]
    
    /*
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
                setCurrentPage("Nerds unite!");
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
    */
    return(<>
        <AppBar position="fixed" sx={{bgcolor: '#2a402a'/* themeOptions.palette.primary.main */}}>
            <Container maxWidth="xl">
                <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
                    <AccountCircleIcon sx={{mr: 3}}/*  onClick={handleSurprise} *//>
                    <Typography sx={{mr: 'auto'}}>{/* {currentPage} */}</Typography>
                    <Box>
                        {pages.map((page)=>(
                            <Link key={page[0]} href={page[1]+".html"} prefetch={true}>
                                <Button key={page[0]} variant="contained" sx={{bgcolor: "inherit", boxShadow: 0, '&.MuiButton-root:hover':{bgcolor: "transparent"}}} >{page[0]}</Button>
                            </Link>
                        ))}
                    </Box>
                    </Toolbar>
            </Container>
        </AppBar>
    </>)
}