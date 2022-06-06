import React, {FC} from 'react';
import styled from "styled-components";

const BtnSocial = styled.button`
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  span {
    font-size: 16px;
    line-height: 19px;
    color: #818181;
    margin-left: 16px;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`

interface BtnProps {
    srcImg: string;
    text: string;
}

const Btn: FC<BtnProps> = ({srcImg, text}) => {
    return <BtnSocial>
        <img src={srcImg} alt={text}/>
        <span>{text}</span>
    </BtnSocial>

};

export default Btn;