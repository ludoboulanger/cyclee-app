import React from 'react';
import {useMediaQuery} from '@mui/material';

const MAX_WIDTH = 768;

const Mobile: React.FC = ({children}) => {
  const isMobile = useIsMobile();
  return isMobile ? <>{children}</> : null;
};

export const useIsMobile = () => {
  return useMediaQuery(`(max-width:${MAX_WIDTH}px)`);
};

export default Mobile;
