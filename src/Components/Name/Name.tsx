import style from './Name.module.css'

const userName = 'Name Surname'

export const Name = () => {
    return <div className={style.name_wrapper}>
        <div className={style.first_letters}>{userName.split(' ').map(index => index[0]).join('').toUpperCase()}</div>
        <div className={style.full_name}>{userName} </div>
        <div>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1L6 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
        </div>
    </div>
}