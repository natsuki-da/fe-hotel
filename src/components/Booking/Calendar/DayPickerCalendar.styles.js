import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { fonts } from "../../../styles/fonts";
import { Colors } from "../../../styles/Global.styles";

export const StyledDayPicker = styled(DayPicker)`
    --rdp-day-width: 5rem;
    --rdp-day-height: 5rem;

    font-family: ${fonts.secondary};
    font-size: 1rem;
    background-color:  #ffff;
    padding: 1.5rem;
    border-radius: 12px;

   .rdp-months {
     display: flex;
     justify-content: left;
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
    color: rgba(0, 0, 0, 0.85);
    padding-bottom: 0.5rem;    
  }

  .rdp-day {
    width: 5rem;
    height: 5rem;
    font-family:  ${fonts.secondary};
    font-size: 1rem;
    transition: all 0.2s ease;
    background-color:  #ffff;
  }

  .rdp-day:hover {
    background: ${Colors.Secondary};
  }

  .rdp-selected {
    background: ${Colors.Secondary};
    color: white;
  }

  .rdp-range_start {
    background: ${Colors.Secondary};
    color: white;
    border-radius: 50%;
  }

  .rdp-range_end {
    background:  ${Colors.Secondary};
    color: white;
    border-radius: 50%;
  }
`;