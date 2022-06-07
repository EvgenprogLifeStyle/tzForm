export enum TypeAction {
    LOGIN = "LOGIN"
}
export interface StoreProps {
    isAuth: boolean;
    email: string | null;
    password: string | null;
}


export interface BtnProps {
    srcImg: string;
    text: string;
}
export interface FormInputs  {
    email: string;
    password: string;
};

