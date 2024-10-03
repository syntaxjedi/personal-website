import Image from 'next/image';
import { Box, Typography } from "@mui/material"

/* export const themeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#2a402a',
        dark: '#1D2C1D',
        light: '#546654',
      },
      secondary: {ß
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
}; */

export default function HomePage()
{
    return(
        <Box sx={{marginLeft: '25%', marginRight: '25%', background: '#1D2C1D'/* themeOptions.palette.primary.dark */}}>
            <h1 style={{marginLeft: '25%', marginRight: '25%'}}>Welcome!</h1>
            <p style={{marginLeft: '25%', marginRight: '25%'}}>Thanks for stopping by. Stay for a while and take a look around, I&apos;m sure you&apos;ll find something interesting.</p>
        </Box>
    )
}
