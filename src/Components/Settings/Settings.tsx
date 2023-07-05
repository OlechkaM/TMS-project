import style from './Settings.module.css'

export const Settings = () => {
    return <div className={style.set_container}>
        <p className={style.profile_title}>Profile</p>
        <div className={style.set_profile}>
            <div className={style.profile_wrap}>
                <p className={style.set_profile_wrap_text}>Name</p>
                <input type="text" placeholder='Name Surname' className={style.set_profile_wrap_input} />
            </div>
            <div className={style.profile_email}></div>

            <div className={style.profile_wrap}>
                <p className={style.set_profile_wrap_text}>Email</p>
                <input type="text" placeholder='email' className={style.set_profile_wrap_input} />
            </div>
        </div>

        <p className={style.profile_title}>Password</p>
        <div className={style.set_password}>
            <div className={style.profile_wrap}>
                <p className={style.set_profile_wrap_text}>Password</p>
                <input type="text" placeholder='Your password' className={style.set_profile_wrap_input} />
            </div>
            <div className={style.profile_email}></div>

            <div>
                <div className={style.profile_wrap}>
                    <p className={style.set_profile_wrap_text}>New password</p>
                    <input type="text" placeholder='New password' className={style.set_profile_wrap_input} />
                </div>

                <div className={style.profile_wrap}>
                    <p className={style.set_profile_wrap_text}>Confirm password</p>
                    <input type="text" placeholder='Confirm password' className={style.set_profile_wrap_input} />
                </div>
            </div>
        </div>

        <div className={style.set_color}>
            <div>Dark <p className={style.text}> Use dark thema</p></div>
            <div className={style.round}></div>

        </div>

        <div className={style.set_buttons}>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    </div>
}