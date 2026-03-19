import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";
import * as S from "./BookingConfirmation.styles"

const BookingConfirmation = () => {
    const { room, booking } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`)
    }

    const calculateNights = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return 0;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        const diffTime = end - start;
        return diffTime / (1000 * 60 * 60 * 24);
    };

    const nights = calculateNights(
        booking.checkedInDate, booking.checkedOutDate
    )

    return (
        <S.Container>
            <S.ConfirmationMailBody>
                <S.Header>
                    <h1>Booking Confirmation</h1>
                    <p>Thank you for your reservation!</p>
                </S.Header>
                <S.BookingDetails>
                    <h2>Booking Details</h2>
                    <ul>
                        <li>Guest Name:   {booking.guestFirstName} {booking.guestLastName}</li>
                        <li>Confirmation Number:   123456</li>
                        <li>Hotel Name:   <i>kyoto hideaway</i></li>
                        <li>Room Type:   {room.type}</li>
                        <li>Number of Guests:   {booking.guestCount}</li>
                        <li>Check-in Date:   {new Date(booking.checkedInDate).toLocaleDateString()}</li>
                        <li>Check-out Date:   {new Date(booking.checkedOutDate).toLocaleDateString()}</li>
                        <li>Number of Nights:   {nights}</li>
                        <li>Total:   {room.pricePerNight * nights} SEK</li>
                    </ul>
                </S.BookingDetails>
                <S.ButtonSection>
                    <S.Button onClick={handleClick}>
                        HOME
                    </S.Button>
                </S.ButtonSection>
            </S.ConfirmationMailBody>

        </S.Container>
    )
}

export default BookingConfirmation;