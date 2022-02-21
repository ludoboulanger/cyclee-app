
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import LoadingLogo from "../../components/loading_logo";

function Loading() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {setTimeout(() => setLoading(!isLoading), 2200);}, []);


  return(
    <div css={css`display:flex; flex-direction:column; height:100%`}>
        <div css={css`flex-grow:1;`}/>
        <div css={css`flex-grow:0;`}>
          <LoadingLogo isLoading={isLoading}/>
        </div>
        <div css={css`flex-grow:1;`}/>
    </div>

  );
}

export default Loading;