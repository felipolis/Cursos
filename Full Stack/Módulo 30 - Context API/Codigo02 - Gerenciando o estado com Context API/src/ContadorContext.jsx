import React, {useState, createContext} from 'react'


export const ContadorContext = createContext()

export const ContadorProvider = (props) => {
    const [contagem, setContagem] = useState(0)

    return (
        <ContadorContext.Provider value={{contagem, setContagem}}>
            {props.children}
        </ContadorContext.Provider>
    )
}



