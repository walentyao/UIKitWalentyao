import React, { memo } from 'react';
import classes from './CalendarCeil.module.scss';
import classNames from 'classnames';
import { StyleCeil } from '../../types/ceil.ts';

interface CalendarCeilProps {
    children?: React.ReactNode;
    day: number;
    onClick?: (day: number) => void;
    styleCeil?: StyleCeil;
}

export const CalendarCeil = memo(({ children, day, onClick, styleCeil }: CalendarCeilProps) => {
    const classesCeil = classNames(classes.ceil, classes[`ceil__${styleCeil}`]);

    // console.log('render ceil', day);
    return (
        <td
            className={classes.ceil__wrapper}
            onClick={() => onClick?.(day)}
        >
            <div className={classesCeil}>
                <div className={classes.dayNumber}>{day}</div>
                {children}
            </div>
        </td>
    );
});

CalendarCeil.displayName = 'CalendarCeil';
