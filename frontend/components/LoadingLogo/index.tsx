import {keyframes } from "@emotion/react";
import Image from "next/image";
import logo from "/.../../public/assets/logo_svg.svg";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const textFadeInAnimation = keyframes`
0% {
  max-width: 0px;
  max-height: 10em;
}

100% {
  max-width: 10em;
  max-height: 10em;
}
`;

interface Props {
  isLoading: boolean;
}

export default function LoadingLogo({isLoading}: Props) {
  const [isAnimationEnding, setAnimationEnding] = useState(false);

  function onAnimationEnd() {
    setAnimationEnding(!isLoading);
  }

  return (
      <Box sx={{display: "flex", height:"100%", justifyContent: "center",
      alignItems: "center"}}>
        <Box sx={{flexGrow:"1", height:"100%"}}/>
        <Box onAnimationIteration={onAnimationEnd} sx={{animation: `${spinAnimation} 1s ease ${isAnimationEnding?"forwards":"infinite"}`}}>
          <Image  src={logo} height="140px" width="140px" alt="logo" />
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", height:"100%"}}>
          <Box sx={{flexGrow:"1", width:"100%"}}/>
          <Box sx={{maxWidth:0, maxHeight:0, overflow:"hidden", animation: `${isAnimationEnding? textFadeInAnimation:""} 1.2s ease forwards;"}`}}>
            <Typography variant="h1">yclee</Typography>
          </Box>
        </Box>
        <Box sx={{flexGrow:"1", height:"100%"}}/>
     </Box>);
};