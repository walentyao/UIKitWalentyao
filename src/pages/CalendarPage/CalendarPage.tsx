import { Calendar } from '../../lib/Calendar/Calendar';

export const CalendarPage = () => {
    return (
        <div className="page">
            <div className="block page__block">
                <h3>Calendar</h3>
                <div className="content block__content">
                    <Calendar />
                </div>
            </div>
        </div>
    );
};
