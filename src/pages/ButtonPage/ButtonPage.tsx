import { Button } from '../../lib/Button/Button';
import { PlusIcon } from '@heroicons/react/24/solid';

export const ButtonPage = () => {
    return (
        <div className="page">
            <div className="block page__block">
                <h3>Filled buttons</h3>
                <div className="content block__content">
                    <Button label={'label'} />
                    <Button
                        label={'label'}
                        disabled
                    />
                </div>
                <div className="content block__content">
                    <Button
                        label={'label'}
                        icon={<PlusIcon />}
                    />
                    <Button
                        label={'label'}
                        icon={<PlusIcon />}
                        disabled
                    />
                </div>
            </div>
            <div className="block page__block">
                <h3>Outlined buttons</h3>
                <div className="content block__content">
                    <Button
                        label={'label'}
                        styled="outline"
                    />
                    <Button
                        label={'label'}
                        styled="outline"
                        disabled
                    />
                </div>
            </div>
            <div className="content block__content">
                <Button
                    label={'label'}
                    styled="outline"
                    icon={<PlusIcon />}
                />
                <Button
                    label={'label'}
                    styled="outline"
                    icon={<PlusIcon />}
                    disabled
                />
            </div>
            <div className="block page__block">
                <h3>Text buttons</h3>
                <div className="content block__content">
                    <Button
                        label={'label'}
                        styled="text"
                    />
                    <Button
                        label={'label'}
                        styled="text"
                        disabled
                    />
                </div>
            </div>
            <div className="content block__content">
                <Button
                    label={'label'}
                    styled="text"
                    icon={<PlusIcon />}
                />
                <Button
                    label={'label'}
                    styled="text"
                    icon={<PlusIcon />}
                    disabled
                />
            </div>
            <div className="block page__block">
                <h3>Icon buttons</h3>
                <div className="content block__content">
                    <Button
                        styled="icon"
                        icon={<PlusIcon />}
                    />
                    <Button
                        styled="icon"
                        icon={<PlusIcon />}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};
