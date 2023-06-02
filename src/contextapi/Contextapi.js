const { createContext } = require("react");


const ContextCreate = createContext();


const AppProvider = ({ children }) => {
    return (
        <ContextCreate.Provider>
            {children}
        </ContextCreate.Provider>
    )
}


export { AppProvider, ContextCreate }