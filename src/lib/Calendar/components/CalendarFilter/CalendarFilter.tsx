import classes from './CalendarFilter.module.scss';
import { IOption } from '../../../../interfaces/types.ts';
interface CalendarFilterProps {
    years: IOption[];
    months: IOption[];
    selectedYear: number;
    selectedMonth: number;
    setYear?: (year: number) => void;
    setMonth?: (month: number) => void;
}
export const CalendarFilter = ({
    years,
    months,
    selectedYear,
    selectedMonth,
    setYear,
    setMonth,
}: CalendarFilterProps) => {
    return (
        <div className={classes.filter}>
            <select
                name="years"
                id="years"
                value={selectedYear}
                onChange={(event) => setYear?.(Number(event.target.value))}
            >
                {years.map((year) => {
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
                value={selectedMonth}
                onChange={(event) => setMonth?.(Number(event.target.value))}
            >
                {months.map((month) => {
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
