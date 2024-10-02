'use client';
import {themeOptions} from "../page"
import { Box, Typography } from "@mui/material"
import Image from 'next/image'
import Link from 'next/link'
export default function Post({postIcon, postTitle, postText}){
    return(
        <Link href={"/"+postTitle}>
            <Box sx={{mx: 'auto', mb: 10, background: themeOptions.palette.primary.main, minWidth: 200, maxWidth: 800, height: 200, borderRadius: 10, boxShadow: 4, display: 'flex'}}> {/* outer post component */}
                <Box sx={{background: themeOptions.palette.primary.dark, minWidth: 150, maxWidth: 750, height: 150, mt: 3, ml: 3, display: 'flex', borderRadius: 3}}> {/* post icon */}
                    <Image src={"/Images/"+postIcon+".png"} width={140} height={140} style={{paddingLeft: 10, paddingTop: 10, borderRadius: 3}}/>
                </Box>
                <Box sx={{background: "#5d805d", ml: 3, my: 3, height: 140, minWidth: '60%', maxWidth: '70%', borderRadius: 3}}>{/* post text */}
                    <Typography variant="h4" sx={{mx: 20, color: 'black', fontWeight: 'bold'}}>{postTitle}</Typography>
                    <Typography sx={{mx: 3, pt: 3}}>{postText}</Typography>
                </Box>
            </Box>
        </Link>
    );
    
}