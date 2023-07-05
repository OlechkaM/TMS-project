import { Content } from '../Content/Content'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/SideBar'
import style from './MainPage.module.css'

export const MainPage = () => {
    return <div className={style.mainPage_container}>
        <div className={style.wrapper}>
            <Header />
            <SideBar />
            <Content />
        </div>
    </div>
}