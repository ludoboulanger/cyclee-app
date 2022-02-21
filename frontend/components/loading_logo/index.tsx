
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { flexbox } from "@mui/system";
import Image from "next/image";
import logo from "/.../../public/assets/logo_svg.svg";
import {SerializedStyles} from '@emotion/serialize';
import { useState } from "react";
import { Typography } from "@mui/material";

const spin = keyframes`
  from, 0% to {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const text_fade_in = keyframes`
0% {
  max-width: 0px;
  max-height: 6em;
}

100% {
  max-width: 10em;
  max-height: 6em;
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
      <div css={css`display: flex; width: 100% ; height:100%; gap:5px; justify-content: center;
      align-items: center; align-text: center;`}>
        <span css={css`flex-grow:1; height:100%;`}/>
        <div onAnimationIteration={onAnimationEnd} css={css`animation: ${spin} 1s ease ${isAnimationEnding?"forwards":"infinite"};`}>
          <Image  src={logo} height="140px" width="140px" alt="logo" />
        </div>
        <div css={css`display:flex; flex-direction:column; height:100%`}>
          <div css={css`flex-grow:1; width:100%`}/>
          <div css={css`max-width:0px; max-height:0px; overflow:hidden; animation: ${isAnimationEnding? text_fade_in:""} 1.2s ease forwards;"}`}>
            <Typography variant="h1" css={css`margin:0`}>yclee</Typography>
          </div>
        </div>
        <span css={css`flex-grow:1; height:100%;`}/>
     </div>);
};