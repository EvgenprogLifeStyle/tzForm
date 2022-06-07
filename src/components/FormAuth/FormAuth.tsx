import React, {FC} from 'react';
import styled from "styled-components";
import {useForm} from "react-hook-form";
import MyContext from "../../state/MyContext";

import {loginDispatch} from "../../state/Reducer";
import {FormInputs} from "../../types/types";

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
  transition: 0.3s;

  &:hover {
    color: #505050;
  }

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
  cursor: pointer;

  &:hover {
    border-color: rgba(27, 27, 27, 0.6);
  }

  &:focus {
    border-color: #1877F2;
  }

  &::placeholder {
    color: #818181;
    opacity: 0.38;
  }
`
const WrapperSuccess = styled.div`
  font-size: 26px;
  color: #282c34;
  height: 182.98px;
  display: flex;
  align-items: center;
  justify-content: center;
`


const FormAuth: FC = () => {

    const context = React.useContext(MyContext)

    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) =>
        context.dispatch(loginDispatch({isAuth: true, email: data.email, password: data.password}))


    return <>
        {!context.state.isAuth ?
            <form onSubmit={handleSubmit(onSubmit)} className="form__body">
                <FormControl>
                    <InputForm type="email" placeholder="E-mail" {...register("email", {required: true})} />
                    {/*{errors.email && <p>{errors.email.message}</p>}*/}
                </FormControl>
                <FormControl>
                    <InputForm type="password" placeholder="Password" {...register("password", {required: true})}/>

                </FormControl>
                <FormControlBottom>
                    <ResetLink href="#">Reset password</ResetLink>
                    <FormSend>Log in</FormSend>
                </FormControlBottom>
            </form>
            : <WrapperSuccess>Вы авторизованы</WrapperSuccess>}
    </>
};

export default FormAuth;