// TODO: Use the style overwrite in the theme file
// Once done, this file will be deprecated

import React from 'react';
import { alpha, Button, styled } from '@mui/material';

interface Props {
    muiButtonType: 'primary' | 'secondary', 
    onClick: () => void,
    type?: 'submit'
}

const StyledButton = styled(Button)<{buttontype: string}>(({theme, buttontype}) => ({
    fontSize: '16px',
    textTransform: 'none',
    borderRadius: '3px',
    height: '42px',
    width: '100%',
    backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.3) : '',
    color: buttontype === 'secondary' ? theme.palette.primary.main : '',
    transition: 'filter 300ms',

    '&:hover': {
        backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.3) : theme.palette.primary.main,
        color: buttontype === 'secondary' ? theme.palette.primary.main : '',
        filter: 'brightness(0.90) ! important',
    }
}));

const MUIButton: React.FC<Props> = (props) => {

    return(
        <StyledButton 
            variant='contained'
            disableRipple
            disableElevation
            onClick={props.onClick}
            buttontype={props.muiButtonType}
            type={props.type}
        >
                {props.children}
        </StyledButton>
    );
};

export default MUIButton;