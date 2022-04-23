import React from 'react';
import {useMediaQuery} from '@mui/material';

const MIN_WIDTH = 993;

const Desktop: React.FC = ({children}) => {
  const isDesktop = useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
  return isDesktop ? <>{children}</> : null;
};

export const useIsDesktop = () => {
  return useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
};

export default Desktop;
