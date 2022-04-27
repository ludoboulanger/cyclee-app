import React from 'react';
import { alpha, styled } from '@mui/system';
import { Container } from '@mui/material';
import { DateTime } from 'luxon';

const FooterContainer = styled('div')(({theme}) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    height: '400px',
    textAlign: 'center'
}));

const Copyright = styled('span')({
    position: 'absolute',
    bottom: '10px',
    opacity: '0.66'
});

const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <Container>
                <Copyright>{'Cyclee'}{' '}{DateTime.now().toFormat('yyyy')}</Copyright>
            </Container>
        </FooterContainer>
    );
};

export default Footer;