import { useMemo } from 'react';
import { createDate, createMonth, getMonthNumberOfDays } from '../../../utils/date';

export type CalendarWeek = ReturnType<typeof createDate>;

export type CalendarMonthWithWeek = CalendarWeek[][];
export interface UseCalendarMonthParams {
    selectedMonthNumber: number;
    selectedYearNumber: number;
    firstWeekDayNumber: number;
    locale?: string;
}
const DAYS_IN_WEEK = 7;
export const useCalendarDays = ({
    selectedMonthNumber,
    selectedYearNumber,
    firstWeekDayNumber,
    locale = 'default',
}: UseCalendarMonthParams) => {
    const selectedMonth = useMemo(() => {
        return createMonth({ date: new Date(selectedYearNumber, selectedMonthNumber), locale });
    }, [selectedYearNumber, selectedMonthNumber, locale]);

    const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth]);

    const calendarDays = useMemo(() => {
        const monthNumberOfDays = getMonthNumberOfDays(
            selectedMonth.monthIndex,
            selectedYearNumber,
        );

        const prevMonthDays = createMonth({
            date: new Date(selectedYearNumber, selectedMonth.monthIndex - 1),
            locale,
        }).createMonthDays();

        const nextMonthDays = createMonth({
            date: new Date(selectedYearNumber, selectedMonth.monthIndex + 1),
            locale,
        }).createMonthDays();

        const firstDay = days[0];
        const lastDay = days[monthNumberOfDays - 1];

        const shiftIndex = firstWeekDayNumber - 1;
        const numberOfPrevDays =
            firstDay.dayNumberInWeek - 1 - shiftIndex < 0
                ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
                : firstDay.dayNumberInWeek - 1 - shiftIndex;

        const numberOfNextDays =
            DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
                ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
                : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;

        const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

        const result = [];

        for (let i = 0; i < numberOfPrevDays; i += 1) {
            const inverted = numberOfPrevDays - i;
            result[i] = prevMonthDays[prevMonthDays.length - inverted];
        }

        for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
            result[i] = days[i - numberOfPrevDays];
        }

        for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
            result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
        }

        return result;
    }, [selectedMonth, selectedYearNumber, days, firstWeekDayNumber, locale]);

    const calendarMonthWithWeek = useMemo<CalendarMonthWithWeek>(() => {
        const calendar: CalendarMonthWithWeek = [];

        for (let weekIndex = 0; weekIndex < calendarDays.length / DAYS_IN_WEEK; weekIndex++) {
            const week: CalendarWeek[] = [];
            for (
                let dayIndex = weekIndex * DAYS_IN_WEEK;
                dayIndex < (weekIndex + 1) * DAYS_IN_WEEK && dayIndex < calendarDays.length;
                dayIndex++
            ) {
                week.push(calendarDays[dayIndex]);
            }
            calendar.push(week);
        }

        return calendar;
    }, [calendarDays]);

    return {
        calendarDays,
        calendarMonthWithWeek,
    };
};
