import { useState } from "react";
import * as S from "./BookingForm.styles"
import { useAuth } from "../../../context/useAuth";
import BookingCalendar from "../Calendar/BookingCalendar";

const BookingForm = ({onChange}) => {
    const { room } = useAuth();
    const [userInfo, setUserInfo] = useState({
        guestFirstName: "",
        guestLastName: "",
        guestTelephoneNumber: "",
        guestEmail: "",
        guestCount: 0
    });

    const handleUserInfo = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        onChange({
            [name]: value
          });
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
                        <S.GuestForm>
                            <S.InputField>
                                <S.Label>First Name:</S.Label>
                                <S.Input name="guestFirstName" value={userInfo.guestFirstName} type="text" required onChange={handleUserInfo} />
                            </S.InputField>
                            <S.InputField>
                                <S.Label>Last Name:</S.Label>
                                <S.Input name="guestLastName" value={userInfo.guestLastName} type="text" required onChange={handleUserInfo} />
                            </S.InputField>
                            <S.InputField>
                                <S.Label>Telephone:</S.Label>
                                <S.Input name="guestTelephoneNumber" value={userInfo.guestTelephoneNumber} type="text" required onChange={handleUserInfo} />
                            </S.InputField>
                            <S.InputField>
                                <S.Label>Email:</S.Label>
                                <S.Input name="guestEmail" value={userInfo.guestEmail} type="email" required onChange={handleUserInfo} />
                            </S.InputField>
                            <S.InputField>
                                <S.Label>Guests:</S.Label>
                                <S.Input name="guestCount" value={userInfo.guestCount} type="number" min="1" required onChange={handleUserInfo} />
                            </S.InputField>
                        </S.GuestForm>
                    </S.GuestDetailContent>
                </S.GuestDetailsSection>

                <S.RoomInfoSection>
                    {room.imageUrl}
                    {room.PerNight}
                    {room.type}
                    {room.description}
                </S.RoomInfoSection>
            </S.FormWrapper>
        </S.Container>
    )
}

export default BookingForm;