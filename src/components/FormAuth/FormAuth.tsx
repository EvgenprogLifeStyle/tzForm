import React, {FC, useState} from 'react';
import styled from "styled-components";
import {useForm} from "react-hook-form";

const FormControl = styled.div`
  margin-bottom: 14px;
`

const FormControlBottom = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ResetLink = styled.a`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #818181;
`

const FormSend = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 76px;
  background: #D2D2D2;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  transition: 0.3s;

  &:hover {
    background: #b0b0b0;
  }
`

const InputForm = styled.input`
  border: 0;
  border-bottom: 1px solid rgba(27, 27, 27, 0.38);
  width: 100%;
  height: 54px;
  border-radius: 4px 4px 0px 0px;
  padding: 15px 16px;
  font-size: 16px;
  letter-spacing: 0.44px;
  color: #4f4f4f;
  transition: 0.3s;

  &:focus {
    border-color: #1877F2;
  }

  &::placeholder {
    color: #818181;
    opacity: 0.38;
  }
`

type FormInputs = {
    email: string;
    password: string;
};


const FormAuth:FC = () => {
    const [auth, setIsAuth] = useState(false)
    const {register, handleSubmit, setError, formState: {errors}} = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        setIsAuth(true)
    };

    return <>
        {!auth ?
            <form onSubmit={handleSubmit(onSubmit)} className="form__body">
                <FormControl>
                    <InputForm type="text" placeholder="E-mail" {...register("email", {required: true})} />
                    {errors.email && <p>{errors.email.message}</p>}
                </FormControl>
                <FormControl>
                    <InputForm type="password" placeholder="Password" {...register("password", {required: true})}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </FormControl>
                <FormControlBottom>
                    <ResetLink href="#">Reset password</ResetLink>
                    <FormSend>Log in</FormSend>
                </FormControlBottom>
            </form>
            : <div>Вы авторизованы</div>}
    </>
};

export default FormAuth;