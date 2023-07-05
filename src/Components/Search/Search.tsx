import style from './Search.module.css'
import { useContext, useState } from 'react';
import { SearchContext } from './SearchProvider';

export const Search = () => {
    const {searchString, setSearchString} = useContext(SearchContext)
    const [search, setSearch] = useState(searchString)

    return <div className={style.search_container}>
        <input className={style.search_input} placeholder='Search' onChange={(e) => setSearch(e.currentTarget.value)}>
        </input>
    <button className={style.search_btn} onClick={()=>setSearchString(search)}>Search</button>
    </div>
}