import React from 'react';
import {useMediaQuery} from '@mui/material';
import { useIsMobile } from './mobile';

const MIN_WIDTH = 769;

const Default: React.FC = ({children}) => {
  const isMobile = useIsMobile();
  return isMobile ? null : <>{children}</>;
};

export const useIsDefault = () => {
  return useMediaQuery(`(min-width:${MIN_WIDTH}px)`);
};

export default Default;
