import { useState } from 'react';
import roomData from './page';

export default function CommandParse(commandInput){
    
    const roomData = {
        roomKey: -1,
        look: "look",
        left: null,
        right: null,
        back: null,
        forward: null,
        backLocked: false,
        roomIntro: "You step into the next room"
        
    };
    let currentGameJson = null;
    function LoadGame(){

        fetch(".\\Games\\TestGame.json").then((res) => {currentGameJson = res.json(); console.log(res.json());});
    }

    let command = commandInput.split(" ");
    let output;
    switch(command[0].toLowerCase()){
        case "test":
            output = "test success";
            return output;
        case "go":
            switch(command[1]){
                case "left":
                    return "left";
                case "right":
                    return "right";
                case "forward":
                    return "forward";
                case "back":
                    return "back";
                default:
                    return "You can't go that direction";
            }
        case "take":


        default:
            output = "\"" +command[0] + "\" is not a valid command.";
            return output;
    }
}