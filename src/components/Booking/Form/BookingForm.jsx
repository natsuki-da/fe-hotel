import { useState } from "react";
import * as S from "./BookingForm.styles"
import { useAuth } from "../../../context/useAuth";

const BookingForm = () => {
    const { room } = useAuth();
    const [userInfo, setUserInfo] = useState({
        guestFirstName: "",
        guestLastName: "",
        guestTelephoneNumber: "",
        guestEmail: "",
        guestCount: 1
    });

    const handleUserInfo = (e) => {
        setUserInfo((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    return (
        <S.Container>
            <S.FormWrapper>
                <S.GuestDetailsSection>
                    <h1>Payment and Guest Details</h1>
                    <S.PaymentContent>
                        <h2>Payment</h2>
                    </S.PaymentContent>

                    <S.GuestDetailContent>
                        <h2>Guest Information</h2>
                        <S.InputLabel>First Name:</S.InputLabel>
                        <S.InputField name="firstName" onChange={handleUserInfo} type="text" />

                        <S.InputLabel>Last Name:</S.InputLabel>
                        <S.InputField name="lastName" onChange={handleUserInfo} type="text" />

                        <S.InputLabel>Telephone:</S.InputLabel>
                        <S.InputField name="telephoneNumber" onChange={handleUserInfo} type="text" />

                        <S.InputLabel>Email:</S.InputLabel>
                        <S.InputField name="email" onChange={handleUserInfo} type="email" />

                        <S.InputLabel>Guests:</S.InputLabel>
                        <S.InputField name="guestCount" onChange={handleUserInfo} type="number" min="1" />
                    </S.GuestDetailContent>
                </S.GuestDetailsSection>
                <S.RoomInfoSection>
                    {room.description}
                </S.RoomInfoSection>
            </S.FormWrapper>
        </S.Container>
    )
}

export default BookingForm;