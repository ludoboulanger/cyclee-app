import React from 'react';
import { alpha, Button, styled } from '@mui/material';

const StyledButton = styled(Button)<{buttontype: string}>(({theme, buttontype}) => ({
    fontSize: '16px',
    textTransform: 'none',
    borderRadius: '3px',
    height: '42px',
    width: '100%',
    backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.3) : '',
    color: buttontype === 'secondary' ? theme.palette.primary.main : '',

    '&:hover': {
        backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.9),
        color:  buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.8) : '',
    }
}));

const MUIButton: React.FC<{
    muiButtonType: 'primary' | 'secondary', 
    onClick: () => void,
    type?: 'submit'
}> = (props) => {

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