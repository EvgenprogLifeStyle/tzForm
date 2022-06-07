import React from 'react';
import styled from "styled-components";
import TabForm from "./components/TabForm/TabForm";
import ListBtn from "./components/ListBtn/ListBtn";
import FormAuthContainer from "./components/FormAuth/FormAuthContainer";
import MyContext, { store} from "./state/MyContext";
import {Reducer} from "./state/Reducer";

const AppWrapper = styled.div`
  width: 449px;
  height: 657px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 52px 41px 18px 39px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12),
  0px 6px 12px rgba(0, 0, 0, 0.12), 0px 1px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

const FormBottom = styled.div`
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: center;

  span {
    color: #1B1B1B;
    display: inline-block;
    margin-right: 12px;
  }

  a {
    font-weight: 700;
    color: #5578F6;
    transition: 0.3s;

    &:hover {
      color: #2d54f1;
    }
  }`

function App() {
    const [state, dispatch] = React.useReducer( Reducer,store)

    return (
        <MyContext.Provider value={{state, dispatch}}>
            <AppWrapper>
                <TabForm/>
                <FormWrapper>
                    <FormAuthContainer/>
                    <ListBtn/>
                </FormWrapper>
                <FormBottom>
                    <span>No account?</span> <a href="#">Create one</a>
                </FormBottom>
            </AppWrapper>
        </MyContext.Provider>
    );
}



export default App;
