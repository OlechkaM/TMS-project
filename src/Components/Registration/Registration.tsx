import { Link } from 'react-router-dom'
import style from './Registartion.module.css'
import { useState } from 'react'

type RegProps = {
    onReg: (login: string, password: string, email: string) => void
}

export const Registration = ({ onReg }: RegProps) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    
    return (<>
        <div className={style.reg_wrapper}>
            <div className={style.reg_item}>
                <p className={style.reg_signUp}>Sign Up</p>
                <p className={style.reg_text}>Email</p>
                <input type="text" className={style.reg_input} placeholder='Your name' onChange={(e) => setLogin(e.currentTarget.value)} value={login} />
                <p className={style.reg_text}>Password</p>
                <input type="text" className={style.reg_input} placeholder='Your email' onChange={(e) => setEmail(e.currentTarget.value)} value={email} />
                <p className={style.reg_text}>Forgot password</p>
                <input type="text" className={style.reg_input} placeholder='Your password' onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
                <p className={style.reg_text}>Forgot password</p>
                <input type="text" className={style.reg_input} placeholder='Confirm password' onInput={(e) => setCheckPassword(e.currentTarget.value)} value={checkPassword} />
                <button className={style.reg_button} onClick={()=>onReg}>Sign up</button>
                <p className={style.text}>Already have an account? <span className={style.link_text}><Link to={'/auth'}> Sign In</Link></span></p>
            </div>
        </div>
    </>
    )
}