import { useState } from "react";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({});

    return (
        <AuthContext.Provider value={{rooms, setRooms, room, setRoom}}>
            {children}
        </AuthContext.Provider>
    )
}