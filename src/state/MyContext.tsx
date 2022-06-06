import React from "react";

export interface StoreProps {
    isAuth: boolean;
    email: string | null;
    password: string | null;
    toggle: () => void;

}

export const store: StoreProps = {
    isAuth: false,
    email: null,
    password: null,
    toggle: () => null
}
const MyContext = React.createContext<StoreProps | false>(false)
export default MyContext