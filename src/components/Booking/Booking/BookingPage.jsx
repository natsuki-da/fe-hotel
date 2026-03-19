import { useState } from "react";
import BookingCalendar from "../Calendar/BookingCalendar";
import BookingForm from "../Form/BookingForm";
import * as S from "./BookingPage.styles"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";

const BookingPage = () => {
    const navigate = useNavigate();
    const {setBooking} = useAuth();
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
        setBooking(bookingDetails);
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
                        BOOK
                    </S.Button>
                </S.ButtonSection>
            </S.Container>
        </>
    )
}

export default BookingPage;