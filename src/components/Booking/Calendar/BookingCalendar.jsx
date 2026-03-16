import { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { StyledDayPicker } from "./DayPickerCalendar.styles"
import * as S from "./BookingCalendar.styles"
import { useAuth } from "../../../context/useAuth";
import { api } from "../../../api/axiosInstance";

const BookingCalendar = () => {
    const [range, setRange] = useState({ from: null, to: null });
    const [disabledDates, setDisabledDates] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const { room } = useAuth();
    const roomId = room?.roomId;

    useEffect(() => {
        if (roomId)
            fetchAllAvailableDays(roomId, currentMonth);
    }, [roomId, currentMonth])

    const formatYearMonth = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        return `${year}-${month}`;
    }

    const fetchAllAvailableDays = async (roomId, month) => {
        const monthString = formatYearMonth(month);
        try {
            const response = await api.get(
                `/room/${roomId}/availability?month=${monthString}`
            );
            const data = response.data.filter((d) => d.avaibale === false).map((d) => new Date(d.date));
            setDisabledDates(data);
        } catch (error) {
            console.log("Failed to fetch available days: ", error)
        }
    }

    const handleSelect = (range) => {
        setRange(range || { from: null, to: null });
    }

    const handleMonthChange = (month) => {
        setCurrentMonth(month)
        fetchAllAvailableDays(roomId, month)
    }

    //console.log("Hi, I'm gonna stay from ", range.from, " until ", range.to); 

    return (
        <S.Wrapper>
            <StyledDayPicker
                mode="range"
                selected={range}
                onSelect={handleSelect}
                disabled={disabledDates}
                numberOfMonths={2}
                min={1}
                defaultMonth={currentMonth}
                onMonthChange={handleMonthChange} />
            {range.from && range.to && (
                <p>Your checkin date: {range.from.toLocaleDateString()} <br />
                    Your checkout date: {range.to.toLocaleDateString()} </p>
            )}
        </S.Wrapper>
    )
}

export default BookingCalendar;