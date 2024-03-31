import classes from './Calendar.module.scss';
import { CalendarFilter } from './components/CalendarFilter/CalendarFilter';
import { CalendarHeader } from './components/CalendarHeader/CalendarHeader.tsx';
import { useCalendarDays } from './hooks/useCalendarDays.ts';
import { CalendarRow } from './components/CalendarRow/CalendarRow.tsx';
import { createDate } from '../../utils/date';
import { useEffect, useState } from 'react';
import { ICalendarFilter } from './types/filter.ts';
import { CalendarData, CalendarDay } from './types/calendar.ts';

export interface CalendarProps {
    value?: Date;
    onSelect?: (value: Date) => void;
    data?: CalendarData;
}
export const Calendar = ({ value, onSelect, data }: CalendarProps) => {
    const currentDay = createDate({ date: new Date() });
    const [selectedDay, setSelectedDay] = useState<CalendarDay>(currentDay);
    const [filter, setFilter] = useState<ICalendarFilter>({
        year: selectedDay.year,
        month: selectedDay.monthIndex,
    });

    const { calendarMonthWithWeek } = useCalendarDays({
        filter,
        firstWeekDayNumber: 2,
    });
    useEffect(() => {
        if (selectedDay.monthIndex != filter.month)
            setFilter({ ...filter, month: selectedDay.monthIndex });
    }, [selectedDay]);

    return (
        <div className={classes.calendar__wrapper}>
            <CalendarFilter
                filter={filter}
                setFilter={setFilter}
            />
            <div>
                <table className={classes.calendar__table}>
                    <thead>
                        <CalendarHeader />
                    </thead>
                    <tbody>
                        {calendarMonthWithWeek.map((week, index) => (
                            <CalendarRow
                                key={index}
                                week={week}
                                onClickCeil={setSelectedDay}
                                meta={{ selectedDay, currentDay }}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
