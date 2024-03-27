import React from 'react';

interface CalendarRowProps {
    children?: React.ReactNode;
}
export const CalendarRow = ({ children }: CalendarRowProps) => {
    return <tr>{children}</tr>;
};
