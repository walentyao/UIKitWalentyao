import classes from './CalendarFilter.module.scss';
import { useCalendarFilter } from '../../hooks/useCalendarFilter.ts';
import { ICalendarFilter } from '../../types/filter.ts';

interface CalendarFilterProps {
    filter: ICalendarFilter;
    setFilter?: (filter: { year: number; month: number }) => void;
}
export const CalendarFilter = ({ filter, setFilter }: CalendarFilterProps) => {
    const { yearsInterval, monthsInterval } = useCalendarFilter(filter);

    return (
        <div className={classes.filter}>
            <select
                name="years"
                id="years"
                value={filter.year}
                onChange={(event) => setFilter?.({ ...filter, year: Number(event.target.value) })}
            >
                {yearsInterval.map((year) => {
                    return (
                        <option
                            value={year.value}
                            key={year.value}
                        >
                            {year.label}
                        </option>
                    );
                })}
            </select>
            <select
                name="months"
                id="months"
                value={filter.month}
                onChange={(event) => setFilter?.({ ...filter, month: Number(event.target.value) })}
            >
                {monthsInterval.map((month) => {
                    return (
                        <option
                            value={month.value}
                            key={month.value}
                        >
                            {month.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
