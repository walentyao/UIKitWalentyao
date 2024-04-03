import { CeilChildren, CeilChildrenProps } from './../components/CeilChildren/CeilChildren';
import { ReactElement } from 'react';
import { CalendarDate } from '../../../utils/date';

export type CalendarCeilChild = ReactElement<CeilChildrenProps, typeof CeilChildren>;

export type CalendarCeilChildren = CalendarCeilChild[];
export interface CalendarDay extends CalendarDate {
    data?: CalendarCeilChild;
}
