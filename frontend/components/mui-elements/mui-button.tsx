import { alpha, Button, styled } from '@mui/material';

const StyledButton = styled(Button)<{buttontype: string}>(({theme, buttontype}) => ({
    textTransform: 'none',
    borderRadius: '3px',
    height: '42px',
    width: '100%',
    backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.3) : '',
    color: buttontype === 'secondary' ? theme.palette.primary.main : '',

    '&:hover': {
        backgroundColor: buttontype === 'secondary' ? alpha(theme.palette.primary.main, 0.5) : ''
    }
}));

const MUIButton: React.FC<{title: string, type: 'primary' | 'secondary', onClick: () => void}> = (props) => {
    const variant = props.type;

    return(
        <StyledButton 
            variant='contained'
            disableRipple
            disableElevation
            onClick={props.onClick}
            buttontype={props.type}>
                {props.title}
        </StyledButton>
    );
};

export default MUIButton;