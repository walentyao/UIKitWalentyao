import { useState } from 'react';
import { Calendar } from '../../lib/Calendar/Calendar';
import { CeilChildren } from '../../lib/Calendar/components/CeilChildren/CeilChildren';

export const CalendarPage = () => {
    const [selectedDay, setSelectedDay] = useState<Date>();
    return (
        <div className="page">
            <div className="block page__block">
                <h3>Calendar</h3>
                <div>Выбранный день: {selectedDay?.toLocaleDateString()}</div>
                <div className="content block__content">
                    <Calendar
                        value={selectedDay}
                        onSelect={setSelectedDay}
                    >
                        {[
                            <CeilChildren date={new Date()}>
                                <div>
                                    Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Autem, ad? Expedita, repellendus magnam! Velit explicabo
                                    recusandae hic cupiditate consectetur quisquam dolores,
                                    distinctio harum quae necessitatibus, quis impedit aliquid rem
                                    laborum reprehenderit praesentium pariatur ea ipsum reiciendis
                                    libero nihil voluptatum. Perspiciatis dolores quod iure quisquam
                                    enim officia non harum quia sapiente repudiandae corporis
                                    perferendis optio minima praesentium veniam, minus voluptate?
                                    Repudiandae aspernatur enim voluptatem rerum accusantium sit
                                    fugiat voluptates. Repudiandae dolor voluptate obcaecati sint
                                    aliquid, distinctio architecto magnam possimus quas in saepe sed
                                    nihil vitae aspernatur unde excepturi totam illo amet molestiae!
                                    Nemo, voluptas voluptatem explicabo debitis dolorem neque
                                    reiciendis maiores?
                                </div>
                            </CeilChildren>,
                            <CeilChildren date={new Date('2024-04-011')}>
                                <span>Передаём что угодно</span>
                            </CeilChildren>,
                        ]}
                    </Calendar>
                </div>
            </div>
        </div>
    );
};
