import { useState } from "react";
import { Auth } from "../Auth/Auth"
import { Registration } from "../Registration/Registration"
import { Title } from "../Title/Title"
import style from "./SignPage.module.css"
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";

type User = {
    login: string,
    password: string,
}

export const SignPage = () => {
    const [users, setUsers] = useState<User[]>([])

    const addUser = (login: string, password: string) => {
        setUsers([...users, { login, password }])
    }

    const checkUser = (login: string, password: string) => {
        (users.find(user => (user.login === login) && (user.password === password))) ? <MainPage/> : <Auth onSignIn={ checkUser }/>
    }

    return (
        <div className={style.sign_page}>
            <Title />
            <Routes>
                <Route path='/auth' element={<Auth onSignIn={checkUser} />} />
                <Route path='/reg' element={<Registration onReg={addUser}  />} />
            </Routes>
        </div >
    )
}