import { getWeekDaysNames } from '../../../../utils/date';
import classes from './CalendarHeader.module.scss';
interface CalendarHeaderProps {
    locale?: string;
    firstWeekDay?: number;
}
export const CalendarHeader = ({ locale = 'default', firstWeekDay = 2 }: CalendarHeaderProps) => {
    const headers = getWeekDaysNames(firstWeekDay, locale);
    return (
        <tr>
            {headers.map((head) => (
                <th key={head.day}>
                    <div className={classes.title}>
                        <span className={classes.title__text}>
                            {head.day[0].toUpperCase() + head.day.slice(1)}
                        </span>
                    </div>
                </th>
            ))}
        </tr>
    );
};
