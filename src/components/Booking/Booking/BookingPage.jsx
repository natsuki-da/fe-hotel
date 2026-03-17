import { useState } from "react";
import BookingCalendar from "../Calendar/BookingCalendar";
import BookingForm from "../Form/BookingForm";
import * as S from "./BookingPage.styles"
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
    const navigate = useNavigate();

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

    const handleDateChange = ({ checkIn, checkOut }) => {
        setBookingDetails(prev => ({
          ...prev,
          checkedInDate: checkIn,
          checkedOutDate: checkOut
        }));
      };

      const handleSubmit = () => {
        const {
          guestFirstName,
          guestLastName,
          guestTelephoneNumber,
          guestEmail,
          guestCount,
          checkedInDate,
          checkedOutDate
        } = bookingDetails;
        if (
          !guestFirstName ||
          !guestLastName ||
          !guestTelephoneNumber ||
          !guestEmail ||
          !guestCount ||
          !checkedInDate ||
          !checkedOutDate
        ) {
          alert("Please fill all required fields and select dates");
          return;
        }
        localStorage.setItem("guest", JSON.stringify(bookingDetails));
        navigate("/booking/confirmation");
      };

    const savedData = localStorage.getItem("guest");
    const parsedData = JSON.parse(savedData);

    console.log(parsedData);

    return (
        <>
            <S.Container>
                <BookingForm onChange={handleGuestInfo} onSubmit={handleSubmit} />
                <BookingCalendar onDateChange={handleDateChange} />
                <S.ButtonSection>
                    <S.Button type="submit" form="booking-form" onClick={handleSubmit}>
                        Review Your Reservation
                    </S.Button>
                </S.ButtonSection>
            </S.Container>
        </>
    )
}

export default BookingPage;