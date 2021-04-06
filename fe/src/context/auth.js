import {createContext} from "react"

const authCtx = createContext ({
    authUser: null,
    setAuthUser: () => {} 
})

export default authCtx