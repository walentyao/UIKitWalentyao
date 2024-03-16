import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { InputText } from '../../lib/Inputs/InputText/InputText';
import { useState } from 'react';
export const InputPage = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div className="page">
            <div className="block page__block">
                <h3>Inputs text</h3>
                <div className="content block__content">
                    <InputText
                        id="input1"
                        label="Label"
                        icon={<MagnifyingGlassIcon />}
                        placeholder="Placeholder"
                        value={value}
                        autoComplete="off"
                        supportText="Support text"
                        onChange={(value) => setValue(value)}
                    />
                    <InputText
                        id="input2"
                        label="Label"
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </div>
            </div>
        </div>
    );
};
