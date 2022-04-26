import { alpha, styled } from '@mui/material';
import React, { ReactNode } from 'react';

const StyledButton = styled('button')(({theme}) => ({
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: '700',
    fontSize: '14px',
    width: 'fit-content',

    '&:hover': {
        color: alpha(theme.palette.primary.main, 0.8)
    }
}));

const ActionButton: React.FC<{onClick: () => void}> = (props) => {
    return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default ActionButton;