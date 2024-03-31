import { CalendarDate } from '../../../utils/date';
import React from 'react';

export type CalendarDay = CalendarDate;

export interface CeilData {
    date: Date;
    children: React.ReactNode;
}

export type CalendarData = CeilData[];
