import React from 'react';
import { Divider, styled } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ActionButton from '../../mui-elements/action-button';
import MUIButton from '../../mui-elements/mui-button';
import Input from '../../rhf-elements/input';
import { useTranslation } from 'next-i18next';

export type LoginFormValues = {
    email: string;
    password: string;
};

const Card = styled('div')({
    borderRadius: '10px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    width: '400px',
    padding: '16px',
    textAlign: 'center'
});

const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const InvisibleDivider = styled('div')({
    margin: '15px 0'
});

const StyledDivider = styled(Divider)({
    margin: '20px 0'
});

const LoginCard: React.FC = () => {
    const {t} = useTranslation(['landing']);

    const form = useForm<LoginFormValues>({
        defaultValues: {
          email: '',
          password: ''
        },
        mode: 'onSubmit'
      });
    

    const onSubmit: SubmitHandler<LoginFormValues> = (submittedData) => {
        window.alert(submittedData.email + submittedData.password);

        form.reset();
    };

    return(
        <Card>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <Input 
                            name={'email'} 
                            placeholder={t('landing:form.field.email.placeholder')}
                            form={form} 
                            rules={{required: t('landing:form.field.email.error.required')}} 
                            inputType='email'
                        />
                        
                        <InvisibleDivider />

                        <Input 
                            name={'password'} 
                            placeholder={t('landing:form.field.password.placeholder')} 
                            form={form} 
                            rules={{required: t('landing:form.field.password.error.required')}}
                            inputType='password'
                        />

                        <InvisibleDivider />

                        <MUIButton 
                            type='submit' 
                            onClick={form.handleSubmit(onSubmit)} 
                            muiButtonType='primary'
                        >
                            {t('landing:form.button.signIn')} 
                        </MUIButton>

                    </FormContainer>
                </form>
            </FormProvider>

            <InvisibleDivider />

            <ActionButton onClick={() => window.alert('TODO: Open Forgot password process')}>
                {t('landing:button.forgotPassword.label')}
            </ActionButton>

            <StyledDivider />

            <MUIButton
                onClick={() => window.alert('TODO: Open Create account form process')} 
                muiButtonType={'secondary'}
            >
                {t('landing:button.createAccount.label')} 
            </MUIButton>
        </Card>
    );
};

export default LoginCard;