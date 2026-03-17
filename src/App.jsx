import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import HomePage from "./components/Home/HomePage"
import RoomDetail from "./components/Room/DetailPage/RoomDetail"
import RoomList from "./components/Room/List/RoomList"
import BookingPage from "./components/Booking/Booking/BookingPage"
import Layout from "./Layout"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/room-list" element={<RoomList />} />
            <Route path="/room/:roomId" element={<RoomDetail />} />
            <Route path="/room/:roomId/booking" element={<BookingPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
