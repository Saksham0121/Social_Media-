import {createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
    "followings": [],
    "_id": "6841e6aef2f88ba78c58fb89",
    "username": "rolex",
    "email": "rolex@gmail.com",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [
        "68447c63d1a6629b459f292a"
    ],
    "following": [],
    "isAdmin": false,
    "createdAt": "2025-06-05T18:49:18.829Z",
    "updatedAt": "2025-06-23T17:35:56.847Z",
    "__v": 0,
    "city": "london",
    "desc": "I am the owner of rolex",
    "from": "mosko",
    "relationship": 2
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return(
        <AuthContext.Provider 
            value = {{user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}