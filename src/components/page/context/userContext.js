import React, { createContext } from "react"
export const  UserContext = createContext({
    users:[],
    sync:() => {}
})