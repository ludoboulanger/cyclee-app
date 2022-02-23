import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import LoadingLogo from "../../components/LoadingLogo";

export default function Loading() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {setTimeout(() => setLoading(!isLoading), 2200);}, []);


  return(
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%"}}>
          <LoadingLogo isLoading={isLoading}/>
    </Box>

  );
}