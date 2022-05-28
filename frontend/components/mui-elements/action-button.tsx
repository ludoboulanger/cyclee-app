import React from 'react';
import { Button, styled } from '@mui/material';

interface Props {
    onClick: () => void
}

const StyledButton = styled(Button)(({theme}) => ({
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: '700',
    fontSize: '14px',
    width: 'fit-content',
    textTransform: 'none',
    transition: 'filter 300ms',

    '&:hover': {
        filter: 'brightness(90%)',
        backgroundColor: 'transparent',
    }
}));

const ActionButton: React.FC<Props> = (props) => {
    return <StyledButton variant='text' disableRipple={true} onClick={props.onClick}>{props.children}</StyledButton>;
};

export default ActionButton;