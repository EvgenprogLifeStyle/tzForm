import React from "react";
import {StoreProps} from "../types/types";

export const store: StoreProps = {
    isAuth: false,
    email: null,
    password: null,
}

export const MyContext = React.createContext<{
    state: StoreProps;
    dispatch: React.Dispatch<any>;
}>
({
    state: store,
    dispatch: () => null
})


export default MyContext