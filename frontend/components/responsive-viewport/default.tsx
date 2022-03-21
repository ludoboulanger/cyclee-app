import React from 'react';
import {useMediaQuery} from '@mui/material';

const MIN_WIDTH = 769;

const Default: React.FC = ({children}) => {
  const isNotMobile = useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
  return isNotMobile ? <>{children}</> : null;
};

export const useIsDefault = () => {
  return useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
};

export default Default;
