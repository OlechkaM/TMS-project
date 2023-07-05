import { Name } from '../Name/Name'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import style from './Header.module.css'

export const Header = () => {
    return <>
        <div className={style.header_container}>
            <div className={style.header_wrapper}>
                <Title />
                <Search />
                {/* <Name /> */}
            </div>
        </div>
    </>
}