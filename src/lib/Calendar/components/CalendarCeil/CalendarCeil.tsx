import React from 'react';
import classes from './CalendarCeil.module.scss';
import classNames from 'classnames';
import { createDate } from '../../../../utils/date';

type StateCeil = 'selected' | 'current' | 'other' | 'default';
interface CalendarCeilProps {
    children?: React.ReactNode;
    day: ReturnType<typeof createDate>;
    stateCeil?: StateCeil;
    onClickCeil?: (day: ReturnType<typeof createDate>) => void;
}

export const CalendarCeil = ({
    children,
    day,
    onClickCeil,
    stateCeil = 'default',
}: CalendarCeilProps) => {
    const classesCeil = classNames(classes.ceil, classes[`ceil__${stateCeil}`]);

    return (
        <td
            className={classes.ceil__wrapper}
            onClick={() => onClickCeil?.(day)}
        >
            <div className={classesCeil}>
                <div className={classes.dayNumber}>{day.dayNumber}</div>
                {children}
            </div>
        </td>
    );
};
