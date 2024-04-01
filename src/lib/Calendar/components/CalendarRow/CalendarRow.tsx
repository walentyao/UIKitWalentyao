import React, { memo } from 'react';
import { CalendarCeil } from '../CalendarCeil/CalendarCeil.tsx';
import { getStyleCeil } from '../../utils/getStyleCeil.ts';
import { CalendarWeek } from '../../hooks/useCalendarDays.ts';
import { CalendarDay } from '../../types/calendar.ts';

interface CalendarRowProps {
    children?: React.ReactNode;
    week: CalendarWeek;
    meta: {
        selectedDay: CalendarDay;
        currentDay: CalendarDay;
    };
    onClickCeil?: (day: CalendarDay) => void;
}
export const CalendarRow = memo(({ week, meta, onClickCeil }: CalendarRowProps) => {
    console.log(meta);
    return (
        <tr>
            {week.map((day) => {
                return (
                    <CalendarCeil
                        key={day.dayNumber}
                        day={day}
                        onClick={onClickCeil}
                        styleCeil={getStyleCeil(day, meta.currentDay, meta.selectedDay)}
                    />
                );
            })}
        </tr>
    );
});

CalendarRow.displayName = 'CalendarRow';
