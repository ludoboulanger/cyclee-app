import { alpha, Container, styled } from "@mui/material";
import Logo from '../../public/assets/logo/logo.svg';
import { useTranslation } from "next-i18next";
import LoginCard from "./component/login-card";

const GridContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '500px',
    padding: '100px 0'
});

const PresentationContainer = styled('div')({
    gridColumn: '1 / 1',
    textAlign: 'left'
});

const StyledLogo = styled(Logo)({
    width: '50px',
    height: 'auto',
    marginRight: '5px'
});

const LoginContainer = styled('div')({
    gridColumn: '2 / 2',
    justifySelf: 'end'
});

const Title = styled('p')(({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '50px',
    fontWeight: '700'
}));

const Text = styled('p')({
    fontSize: '25px',
    fontWeight: '700',
    width: '500px'
});

const GreenSection = styled('div')(({theme}) => ({
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    height: '300px'
}));

const DesktopLandingPage: React.FC = () => {
    const {t} = useTranslation('landing');

    return(
        <>
            <Container>
                <GridContainer>
                    <PresentationContainer>
                        <Title><StyledLogo />{'yclee'}</Title>
                        <Text>{t('landing:swiper.sideIncome.label')}</Text>
                    </PresentationContainer>
                    <LoginContainer>
                        <LoginCard />
                    </LoginContainer>
                </GridContainer>
            </Container>
            <GreenSection>
                
            </GreenSection>
        </>
    );
};

export default DesktopLandingPage;