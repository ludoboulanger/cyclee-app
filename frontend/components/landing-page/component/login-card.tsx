import React from 'react';
import { Divider, styled } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ActionButton from '../../mui-elements/action-button';
import MUIButton from '../../mui-elements/mui-button';
import Input from '../../rhf-elements/input';

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
                            name='email' 
                            placeholder={'Email or phone number'}
                            form={form} 
                            rules={{required: 'Email is required'}} 
                            inputType='email'
                        />
                        
                        <InvisibleDivider />

                        <Input 
                            name='password' 
                            placeholder={'Password'} 
                            form={form} 
                            rules={{required: 'Password is required'}}
                            inputType='password'
                        />

                        <InvisibleDivider />

                        <MUIButton 
                            type='submit' 
                            onClick={form.handleSubmit(onSubmit)} 
                            muiButtonType='primary'
                        >
                            {'Log In'} 
                        </MUIButton>

                    </FormContainer>
                </form>
            </FormProvider>

            <InvisibleDivider />

            <ActionButton onClick={() => window.alert('TODO: Open Forgot password process')}>
                {'Forgot password?'}
            </ActionButton>

            <StyledDivider />

            <MUIButton
                onClick={() => window.alert('TODO: Open Create account form process')} 
                muiButtonType={'secondary'}
            >
                    {'Create new account'} 
            </MUIButton>
        </Card>
    );
};

export default LoginCard;