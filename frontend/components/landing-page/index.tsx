import { styled } from "@mui/material";
import NewHobbies from '../../public/assets/new-hobbies.svg';
import SideIncome from '../../public/assets/side-income.svg';
import Discount from '../../public/assets/discount.svg';
import { useTranslation } from "next-i18next";
import MUIButton from "../mui-elements/mui-button";
import SlideShow from "../slide-show";

const Container = styled('div')({
    textAlign: 'center',
    paddingTop: '40px'
});

const Title = styled('p')(({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '36px',
    marginBottom: '80px'
}));

const CreateAccountLabel = styled('p')({
    fontSize: '12px',
    marginTop: '45px'
});

const ButtonContainer = styled('div')({
    width: '235px',
    margin: '90px auto'
});

const LandingPage: React.FC = () => {
    const {t} = useTranslation('landing');

    const images = [<NewHobbies key='new-hobbies'/>,  
                    <SideIncome key='side-income' />, 
                    <Discount key='discount' />];

    const labels = [t('landing:swiper.newHobbies.label'), 
                    t('landing:swiper.sideIncome.label'), 
                    t('landing:swiper.discount.label')];

    return(
        <Container>
            <Title>{t('landing:title')}</Title>

            <SlideShow images={images} labels={labels} />

            <ButtonContainer>
                <MUIButton 
                    title={t('landing:button.signIn.label')} 
                    type='primary' 
                    // TODO: Correct this link to open the sign in form process
                    onClick={() => console.log('Sign in')}/>

                <CreateAccountLabel>{t('landing:createAccount.label')}</CreateAccountLabel>

                <MUIButton 
                    title={t('landing:button.createAccount.label')}
                    type='secondary' 
                    // TODO: Correct this link to open the sign up form process
                    onClick={() => console.log('Create account')}/>
            </ButtonContainer>

        </Container>
    );
};

export default LandingPage;