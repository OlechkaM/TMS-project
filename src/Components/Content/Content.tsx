import { Routes, Route } from 'react-router-dom'
// import { Settings } from '../Settings/Settings'
// import { Trends } from '../Trends/Trends'
import style from './Content.module.css'
import { MoviesList } from '../Movies/MoviesList'
import { OneMovie } from '../OneMovie/OneMovie'

export const Content = () => {
    return (
        <div className={style.content_container}>

            <Routes>
                <Route path='/' element={<MoviesList/>}></Route>
                {/* <Route path='/Trends' element={<Trends />}></Route> */}
                {/* <Route path='/Favourites' element={<Favourites></Favourites>}></Route> */}
                {/* <Route path='/Settings' element={<Settings></Settings>}></Route> */}
                <Route path='/Filter' element={<MoviesList/>}></Route>
                <Route path='/:movieID' element={<OneMovie></OneMovie>}></Route>
            </Routes>
        </div>
    )
}