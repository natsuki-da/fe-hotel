import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { fonts } from "../../../styles/fonts";

export const StyledDayPicker = styled(DayPicker)`
    --rdp-day-width: 5rem;
    --rdp-day-height: 5rem;

    font-family: ${fonts.secondary};
    font-size: 1rem;
    background-color: #ffff;
    padding: 1.5rem;
    border-radius: 12px;
   
   .rdp-months {
    //background-color: rgba(225, 76, 126, 0.4);
   }

    .rdp-caption_label {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    text-align: center;
  }

  .rdp-weekday {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85)
    padding-bottom: 0.5rem;
    text-align: center;
    
  }

  .rdp-day {
    width: 5rem;
    height: 5rem;
    font-family:  ${fonts.secondary};
    font-size: 1rem;
    transition: all 0.2s ease;
    background-color: rgba(225, 76, 126, 0.4);
    // display: flex;
    // justify-content: center;
    // align-items: center;  
  }

  .rdp-day:hover {
    background: #f3f4f6;
  }

  .rdp-selected {
    background: black;
    color: white;
  }

  .rdp-range_start {
    background: black;
    color: white;
    border-radius: 50%;
  }

  .rdp-range_end {
    background: black;
    color: white;
    border-radius: 50%;
  }
`;