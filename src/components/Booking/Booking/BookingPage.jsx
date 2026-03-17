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
            <S.Container>
                <BookingForm onChange={handleGuestInfo} />
                <BookingCalendar onDateChange={handleDateChange} />
                <S.ButtonSection>
                    <S.ButtonContainer>
                        <S.Button onClick={handleSubmit}>Review Your Reservation</S.Button>
                    </S.ButtonContainer>
                </S.ButtonSection>
            </S.Container>
        </>
    )
}

export default BookingPage;