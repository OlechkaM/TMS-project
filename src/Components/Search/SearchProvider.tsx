import { useState } from "react"
import React from "react";


export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchString, setSearchString] = useState('cat')

    return <SearchContext.Provider value={{ searchString, setSearchString }}>
        {children}
    </SearchContext.Provider>
}


export const SearchContext = React.createContext<{ searchString: string, setSearchString: (s: string) => void } >({searchString: '', setSearchString: ()=>{}})

