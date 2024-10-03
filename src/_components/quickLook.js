import { Box, Typography } from "@mui/material";
import Post from './post';
//import { themeOptions } from "../page";
import Divider from "@mui/material";

export default function QuickLook(){
    return(<>
            
            <Box sx={{bgcolor: '#546654'/* themeOptions.palette.primary.light */, width: 800, height: 800, ml:'50vh', mt: 10}}>
                <Post postText="Special Text" />
            </Box>
        </>);
}