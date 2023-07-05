import React, { useState } from "react"

export const TypeProvider = ({ children }: { children: React.ReactNode }) => {
    const [type, setType] = useState('')

    return <TypeContext.Provider value={{ type, setType }}>
        {children}
    </TypeContext.Provider>
}


export const TypeContext = React.createContext<{ type: string, setType: (s: string) => void } >({type: '', setType: ()=>{}})