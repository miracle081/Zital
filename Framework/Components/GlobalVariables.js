import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider({ children }) {
    // const [userUID, setUserUID] = useState("eOsP1rOIYxbm2oRu0IrdQ7EEIrD2");
    const [userUID, setUserUID] = useState("7TsqIbKWYXMkVtt87DljrYnYUCp2");
    const [userInfo, setUserInfo] = useState({ firstname: "", lastname: "", balance: 0 });
    const [preloader, setPreloader] = useState(false);


    return (
        <AppContext.Provider
            value={{
                userUID, setUserUID,
                userInfo, setUserInfo,
                preloader, setPreloader,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}