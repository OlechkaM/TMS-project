import React, { useContext } from 'react'
import style from './Filter.module.css'
import { useState } from 'react'
import { FilterContext } from './FilterProvider'
import { TypeContext } from './TypeProvider'
import { SearchContext } from '../Search/SearchProvider'
import { getMovies } from '../Movies/getMovies'

export const Filter = () => {
    const { setYear } = useContext(FilterContext)
    const [inputYear, setInputYear] = useState('')
    const { type, setType } = useContext(TypeContext)
    const { setSearchString } = useContext(SearchContext)
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);

    const showType1 = () => {
        setActive1(!active1)
        setActive2(true)
        setActive3(true)
        setType(active1 ? 'movies' : '')

    }
    const showType2 = () => {
        setActive2(!active2)
        setActive1(true)
        setActive3(true)
        setType(active2 ? 'series' : '')
    }
    const showType3 = () => {
        setActive3(!active3)
        setActive1(true)
        setActive2(true)
        setType(active3 ? 'episode' : '')
    }

    const showAll = () => {
        setYear(inputYear)
    }

    const resetAll = ()=> {
        setYear('')
        setActive1(true)
        setActive2(true)
        setActive3(true)
        setInputYear('')
        setSearchString('cat')
        setType('')
        // getMovies('home', 1)
    }

    return <div className={style.filter_container}>
        <div className={style.filter_year}>
            <p className={style.filter_text}>Sort by year</p>
            <input className={style.year_input} type="number" min={1900} onChange={(e) => setInputYear(e.currentTarget.value)} value={inputYear} placeholder='Write a year' />
        </div>

        <div className={style.filter_type}>
            <p className={style.filter_text}>Sort by type</p>
            <div className={style.type_wrap}>
                <div onClick={() => showType1()} className={type === "TypeName1" ? style.movie_type : style.movie_type_active}>movie</div>
                <div onClick={() => showType2()} className={active2 ? style.movie_type : style.movie_type_active}>series</div>
                <div onClick={() => showType3()} className={active3 ? style.movie_type : style.movie_type_active}>episode</div>
            </div>
        </div>
        <button className={style.btn} onClick={() => showAll()}>Show all</button>
        <button className={style.btn} onClick={() => resetAll()}>Reset filters</button>
    </div>
}