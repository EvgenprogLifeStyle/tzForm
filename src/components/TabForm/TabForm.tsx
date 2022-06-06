import React, {FC} from 'react';
import styled from "styled-components";

interface Props {
    color?: string;
    marginRight?: string
}

const WrapperTop = styled.div`
  display: flex;
`
const TabForm: FC<Props> = (props) => {
    const LinkTab = styled.a`
              color: ${(props: Props) => props.color || "#D2D2D2"};
              margin-right: ${(props: Props) => props.marginRight || null};
              font-size: 34px;
              line-height: 40px;
              letter-spacing: 0.25px;
        `
    ;
    return <WrapperTop>
        <LinkTab color="#1B1B1B" marginRight="16px">Log in</LinkTab>
        <LinkTab>Sign up</LinkTab>
    </WrapperTop>
};

export default TabForm;