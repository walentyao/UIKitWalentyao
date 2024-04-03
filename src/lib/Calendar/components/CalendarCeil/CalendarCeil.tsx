import { memo } from 'react';
import classes from './CalendarCeil.module.scss';
import classNames from 'classnames';
import { StyleCeil } from '../../types/ceil.ts';
import { CalendarDay } from '../../types/calendar.ts';

interface CalendarCeilProps {
    day: CalendarDay;
    styleCeil?: StyleCeil;
    onClick?: (day: CalendarDay) => void;
}

export const CalendarCeil = memo(({ day, onClick, styleCeil }: CalendarCeilProps) => {
    const classesCeil = classNames(classes.ceil, classes[`ceil__${styleCeil}`]);
    return (
        <td
            className={classes.ceil__wrapper}
            onClick={() => onClick?.(day)}
        >
            <div className={classesCeil}>
                <div className={classes.dayNumber}>{day.dayNumber}</div>
                <div className={classes.data}>{day.data}</div>
            </div>
        </td>
    );
});

CalendarCeil.displayName = 'CalendarCeil';
