import { CalendarDay } from '../types/calendar.ts';

export const getStyleCeil = (
    day: CalendarDay,
    currentDay: CalendarDay,
    selectedDay: CalendarDay,
) => {
    return day.monthNumber !== selectedDay.monthNumber
        ? 'other'
        : day.dayNumber === currentDay.dayNumber &&
            day.monthNumber === currentDay.monthNumber &&
            day.year === currentDay.year
          ? 'current'
          : day.dayNumber === selectedDay.dayNumber &&
              day.monthNumber === selectedDay.monthNumber &&
              day.year === selectedDay.year
            ? 'selected'
            : 'default';
};
