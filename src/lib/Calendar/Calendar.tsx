import classes from './Calendar.module.scss';
import { CalendarFilter } from './components/CalendarFilter/CalendarFilter';
import { useCalendarFilter } from './hooks/useCalendarFilter.ts';
import { CalendarHeader } from './components/CalendarHeader/CalendarHeader.tsx';
import { useCalendarDays } from './hooks/useCalendarDays.ts';
import { CalendarRow } from './components/CalendarRow/CalendarRow.tsx';
import { CalendarCeil } from './components/CalendarCeil/CalendarCeil.tsx';
import { createDate } from '../../utils/date';
export const Calendar = () => {
    const currentDay = createDate({ date: new Date() });
    const {
        selectedYear,
        selectedMonth,
        setSelectedYear,
        setSelectedMonth,
        yearsInterval,
        monthsInterval,
    } = useCalendarFilter({ date: currentDay.date });
    const { calendarMonthWithWeek } = useCalendarDays({
        selectedYearNumber: selectedYear,
        selectedMonthNumber: selectedMonth - 1,
        firstWeekDayNumber: 2,
    });
    return (
        <div className={classes.calendar__wrapper}>
            <CalendarFilter
                years={yearsInterval}
                months={monthsInterval}
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
                setYear={setSelectedYear}
                setMonth={setSelectedMonth}
            />
            <div>
                <table className={classes.calendar__table}>
                    <thead>
                        <CalendarHeader />
                    </thead>
                    <tbody>
                        {calendarMonthWithWeek.map((week, index) => (
                            <CalendarRow key={index}>
                                {week.map((day) => {
                                    const stateCeil =
                                        day.monthNumber !== selectedMonth
                                            ? 'other'
                                            : day.dayNumber === currentDay.dayNumber &&
                                                day.monthNumber === currentDay.monthNumber &&
                                                day.year === currentDay.year
                                              ? 'current'
                                              : 'default';
                                    return (
                                        <CalendarCeil
                                            day={day}
                                            onClickCeil={(value) => console.log(value)}
                                            stateCeil={stateCeil}
                                            key={day.timestamp}
                                        />
                                    );
                                })}
                            </CalendarRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
