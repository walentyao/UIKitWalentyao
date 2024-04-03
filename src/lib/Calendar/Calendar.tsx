import classes from './Calendar.module.scss';
import { CalendarFilter } from './components/CalendarFilter/CalendarFilter';
import { CalendarHeader } from './components/CalendarHeader/CalendarHeader.tsx';
import { useCalendarDays } from './hooks/useCalendarDays.ts';
import { CalendarRow } from './components/CalendarRow/CalendarRow.tsx';
import { createDate } from '../../utils/date';
import { useCallback, useState } from 'react';
import { ICalendarFilter } from './types/filter.ts';
import { CalendarCeilChildren, CalendarDay } from './types/calendar.ts';

export interface CalendarProps {
    value?: Date;
    onSelect?: (value: Date) => void;
    children?: CalendarCeilChildren;
}
export const Calendar = ({ value, onSelect, children: dataDays }: CalendarProps) => {
    const currentDay = createDate({ date: new Date() });
    const [selectedDay, setSelectedDay] = useState<CalendarDay | undefined>(
        value ? createDate({ date: value }) : undefined,
    );
    const [filter, setFilter] = useState<ICalendarFilter>({
        year: selectedDay?.year ?? currentDay.year,
        month: selectedDay?.monthIndex ?? currentDay.monthIndex,
    });

    const { calendarMonthWithWeek } = useCalendarDays({
        filter,
        firstWeekDayNumber: 2,
        dataDays,
    });

    const handleClickCeil = useCallback(
        (day: CalendarDay) => {
            if (
                day.dayNumber === selectedDay?.dayNumber &&
                day.monthNumber === selectedDay?.monthNumber &&
                day.year === selectedDay?.year
            ) {
                setSelectedDay(undefined);
            } else {
                if (day.monthIndex !== filter.month)
                    setFilter({ ...filter, month: day.monthIndex });
                setSelectedDay(day);
                onSelect?.(day.date);
            }
        },
        [filter, selectedDay, onSelect],
    );

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
                                onClickCeil={handleClickCeil}
                                meta={{ monthIndex: filter.month, selectedDay, currentDay }} // TODO Вынести стиль в CalendarDay
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
