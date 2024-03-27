import { useEffect, useMemo, useState } from 'react';
import { getMonthesNames, getYearsInterval } from '../../../utils/date';
import { IOption } from '../../../interfaces/types.ts';

export interface useCalendarFilterParams {
    date?: Date;
}
export const useCalendarFilter = ({ date = new Date() }: useCalendarFilterParams) => {
    const [selectedYear, setSelectedYear] = useState<number>(date.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState<number>(date.getMonth() + 1);
    const monthsInterval: IOption[] = useMemo(() => {
        return getMonthesNames().map((month) => ({
            value: month.monthIndex + 1,
            label: month.month,
        }));
    }, []);
    const [yearsInterval, setYearsInterval] = useState<IOption[]>(
        getYearsInterval(selectedYear).map((year) => ({ value: year, label: year.toString() })),
    );

    useEffect(() => {
        if (selectedYear !== selectedYear)
            setYearsInterval(
                getYearsInterval(selectedYear).map((year) => ({
                    value: year,
                    label: year.toString(),
                })),
            );
    }, [selectedYear]);

    return {
        selectedYear,
        selectedMonth,
        setSelectedYear,
        setSelectedMonth,
        yearsInterval,
        monthsInterval,
    };
};
