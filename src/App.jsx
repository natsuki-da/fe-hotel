import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import HomePage from "./components/Home/HomePage"
import RoomDetail from "./components/Room/DetailPage/RoomDetail"
import RoomList from "./components/Room/List/RoomList"
import BookingPage from "./components/Booking/Booking/BookingPage"
import Layout from "./Layout"
import BookingConfirmation from "./components/Booking/Booking/BookingConfirmation"
import LayoutWithoutNav from "./LayoutWithoutNav"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/room-list" element={<RoomList />} />
            <Route path="/room/:roomId" element={<RoomDetail />} />
            <Route path="/room/:roomId/booking" element={<BookingPage />} />
          </Route>
          <Route element={<LayoutWithoutNav />}>
            <Route path="/booking/confirmation" element={<BookingConfirmation />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
