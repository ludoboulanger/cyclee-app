import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import LoadingLogo from "../../components/LoadingLogo";

export default function Loading() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {setTimeout(() => setLoading(!isLoading), 2200);}, []);


  return(
    <Box sx={{display:"flex", flexDirection:"column", height:"100%"}}>
        <Box sx={{"flexGrow":'1'}}/>
        <Box sx={{"flexGrow":'0'}}>
          <LoadingLogo isLoading={isLoading}/>
        </Box>
        <Box sx={{"flexGrow":'1'}}/>
    </Box>

  );
}