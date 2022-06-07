import {StoreProps, TypeAction} from "../types/types";

export function Reducer(state: StoreProps, action: any): StoreProps {
    switch (action.type) {
        case TypeAction.LOGIN: {
            return {
                ...state,
                isAuth: true,
                email: action.state.email,
                password: action.state.password
            }
        }
        default:
            return state
    }
}

export const loginDispatch = (state: StoreProps) => ({type: TypeAction.LOGIN, state})
