import React from 'react';
import {useMediaQuery} from '@mui/material';

const MIN_WIDTH = 769;
const MAX_WIDTH = 992;

const Tablet: React.FC = ({children}) => {
  const min = useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
  const max = useMediaQuery(`(max-width:${MAX_WIDTH}px)`);
  const isTablet = min && max;
  return isTablet ? <>{children}</> : null;
};

export const useIsTablet = () => {
  const min = useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
  const max = useMediaQuery(`(max-width:${MAX_WIDTH}px)`);
  return min && max;
};

export default Tablet;
