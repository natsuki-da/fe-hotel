import { useState } from "react";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({});
    const [booking, setBooking] = useState({});

    return (
        <AuthContext.Provider value={{rooms, setRooms, room, setRoom, booking, setBooking}}>
            {children}
        </AuthContext.Provider>
    )
}