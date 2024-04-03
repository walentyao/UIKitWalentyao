import { useEffect, useMemo, useState } from 'react';
import { getMonthesNames, getYearsInterval } from '../../../utils/date';
import { IOption } from '../../../interfaces/types.ts';

export interface useCalendarFilterParams {
    year: number;
    month: number;
}
export const useCalendarFilter = ({ year }: useCalendarFilterParams) => {
    const monthsInterval: IOption[] = useMemo(() => {
        return getMonthesNames().map((month) => ({
            value: month.monthIndex,
            label: month.month,
        }));
    }, []);
    const [yearsInterval, setYearsInterval] = useState<IOption[]>(
        getYearsInterval(year).map((year) => ({ value: year, label: year.toString() })),
    );

    useEffect(() => {
        setYearsInterval(
            getYearsInterval(year).map((year) => ({
                value: year,
                label: year.toString(),
            })),
        );
    }, [year]);

    return {
        yearsInterval,
        monthsInterval,
    };
};
