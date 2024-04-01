import React, { memo } from 'react';
import classes from './CalendarCeil.module.scss';
import classNames from 'classnames';
import { StyleCeil } from '../../types/ceil.ts';
import { CalendarDay } from '../../types/calendar.ts';

interface CalendarCeilProps {
    children?: React.ReactNode;
    day: CalendarDay;
    styleCeil?: StyleCeil;
    onClick?: (day: CalendarDay) => void;
}

export const CalendarCeil = memo(({ children, day, onClick, styleCeil }: CalendarCeilProps) => {
    const classesCeil = classNames(classes.ceil, classes[`ceil__${styleCeil}`]);

    return (
        <td
            className={classes.ceil__wrapper}
            onClick={() => onClick?.(day)}
        >
            <div className={classesCeil}>
                <div className={classes.dayNumber}>{day.dayNumber}</div>
                {children}
            </div>
        </td>
    );
});

CalendarCeil.displayName = 'CalendarCeil';
