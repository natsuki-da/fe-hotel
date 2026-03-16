import { useState } from "react";
import BookingCalendar from "../Calendar/BookingCalendar";
import BookingForm from "../Form/BookingForm";
import * as S from "./BookingPage.styles"

const BookingPage = () => {
    const [bookingDetails, setBookingDetails] = useState({
        guestFirstName: "",
        guestLastName: "",
        guestTelephoneNumber: "",
        guestEmail: "",
        guestCount: 0,
        checkedInDate: null,
        checkedOutDate: null
    });

    const handleGuestInfo = (data) => {
        setBookingDetails(prev => ({ ...prev, ...data }))
    };

    const handleDateChange = (dates) => {
        setBookingDetails(prev => ({ ...prev, dates }))
    }

    const handleSubmit = () => {
        localStorage.setItem("guest", JSON.stringify(bookingDetails))
    }

    const savedData = localStorage.getItem("guest");
    const parsedData = JSON.parse(savedData);

    console.log(parsedData);

    return (
        <>
            <BookingForm onChange={handleGuestInfo} />
            <BookingCalendar onDateChange={handleDateChange} />
            <S.ButtonContent>
                <S.Button onClick={handleSubmit}>Continue to Review</S.Button>
            </S.ButtonContent>
        </>
    )
}

export default BookingPage;