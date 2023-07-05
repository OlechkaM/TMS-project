import { useContext, useEffect, useState } from "react"
import React from "react";
import { PropsMovie, getMovies } from "./getMovies";
import { SearchContext } from "../Search/SearchProvider";


export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
    const [moviesArray, setMoviesArray] = useState<PropsMovie[]>([])
    console.log("🚀 ~ file: MoviesProvider.tsx:9 ~ MoviesProvider ~ moviesArray:", moviesArray)
    const { searchString } = useContext(SearchContext)

    useEffect(() => { searchString && getMovies(searchString).then(movies => setMoviesArray(movies)) }, [searchString])

    return <MoviesContext.Provider value={{ moviesArray, setMoviesArray }}>
        {children}
    </MoviesContext.Provider>
}

export const MoviesContext = React.createContext<{ 
    moviesArray: PropsMovie[], setMoviesArray: (a: []) => void } >({
        moviesArray: [], setMoviesArray: ()=>{}})
