import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import RoomDetail from "./components/Room/DetailPage/RoomDetail"
import RoomList from "./components/Room/List/RoomList"
import { AuthProvider } from "./context/AuthProvider"
import BookingForm from "./components/Booking/Form/BookingForm"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room-list" element={<RoomList />} />
          <Route path="/room/:roomId" element={<RoomDetail />} />
          <Route path="booking" element={<BookingForm />}/>
          {/* <Route path="room/:roomId/booking" element={<BookingForm />}/> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
