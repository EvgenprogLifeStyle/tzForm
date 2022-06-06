import React from 'react';
import googleImg from "../../assets/img/google.svg";
import facebookImg from "../../assets/img/facebook.svg";
import gitImg from "../../assets/img/git.svg";
import styled from "styled-components";
import Btn from "../UI/Btn/Btn";

const BtnItems = styled.div`margin-top: 40px;`

const ListBtn = () => {
    return (
        <BtnItems>
            <Btn srcImg={googleImg} text="Log in with Google"/>
            <Btn srcImg={facebookImg} text="Log in with Facebook"/>
            <Btn srcImg={gitImg} text="Log in with GitHub"/>
        </BtnItems>
    );
};

export default ListBtn;