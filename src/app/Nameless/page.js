import Image from 'next/image'
import { Box, Typography } from "@mui/material"
//import {themeOptions} from "../page"
export default function Nameless()
{
    return(<Box sx={{marginLeft: '25%', width: '50%', background: '#546654'/* themeOptions.palette.primary.light */}}>
        <h1 style={{marginLeft: '20%', paddingTop: 10}}>Nameless</h1>
        <Image src='/Images/temp_nameless_promo.png' width={640} height={360} style={{marginLeft: '20%', marginBottom: 10}}/>
        <h3 style={{marginLeft: '20%'}}>Overview</h3>
        <Typography sx={{mx: 5}}>Nameless is my current, and biggest project to date. It&apos;s a standard Action RPG with a main focus on monster slaying and crafting.</Typography>
    </Box>)
}