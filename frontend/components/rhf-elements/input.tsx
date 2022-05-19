import React, {ReactNode} from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import { styled, TextField } from '@mui/material';
import { LoginFormValues } from '../landing-page/component/login-card';

interface Props {
    // TODO: Find a way to set name as string. The compiler say: Type 'string' is not assignable to type '"email" | "password"'. 
    // name: string;
    name: "email" | "password"; 
    label?: ReactNode; 
    placeholder?: string,
    icon?: ReactNode; 
    form: UseFormReturn<FormValues, any>;
    rules: any;
    inputType: 'search' | 'text' | 'email' | 'tel' | 'number' | 'password' | 'hidden';
}

type FormValues = LoginFormValues;

const Label = styled('span')({
    textAlign: 'start'
});

const Input: React.FC<Props> = ({
    name,
    label,
    placeholder,
    icon,
    form,
    rules,
    inputType,
}) => {
    return(
        <>
            {label && <Label>{label}</Label>}
            <Controller
                name={name}
                control={form.control}
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        placeholder={placeholder}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type={inputType}
                        InputLabelProps={{
                            shrink: false
                        }}
                        InputProps={{
                            endAdornment: icon
                        }}
                    />
                )}
            />
        </>
    );
};

export default Input;
