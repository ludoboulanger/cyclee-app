import React, {ReactNode} from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import { TextField } from '@mui/material';
import { LoginFormValues } from '../landing-page/component/login-card';

type FormValues = LoginFormValues;

const Input: React.FC<{
    name: string; 
    label?: ReactNode; 
    placeholder?: string,
    icon?: ReactNode; 
    form: UseFormReturn<FormValues, any>;
    rules: any;
    type: 'search' | 'text' | 'email' | 'tel' | 'number' | 'password' | 'hidden';
}> = (props) => {
    return(
        <>
            {props.label}
            <Controller
                name={props.name}
                control={props.form.control}
                rules={props.rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        placeholder={props.placeholder}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type={props.type}
                        InputLabelProps={{
                            shrink: false
                        }}
                    />
                )}
            />
        </>
    );
};

export default Input;
