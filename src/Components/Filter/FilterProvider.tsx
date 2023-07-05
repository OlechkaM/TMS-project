import React, { useState } from "react"

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [year, setYear] = useState('')

    return <FilterContext.Provider value={{ year, setYear }}>
        {children}
    </FilterContext.Provider>
}


export const FilterContext = React.createContext<{ year: string, setYear: (s: string) => void } >({year: '', setYear: ()=>{}})