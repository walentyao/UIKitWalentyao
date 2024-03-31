import { createContext } from 'react';
import { CalendarDay } from '../../../../utils/date';
export interface CalendarContextProps {
    currentDay: CalendarDay;
    selectedDay: CalendarDay;
    selectedYear: number;
    selectedMonth: number;
}

export const CalendarContext = createContext<CalendarContextProps | undefined>(undefined);
