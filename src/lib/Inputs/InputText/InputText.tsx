import classNames from 'classnames';
import { BaseInput, IBaseInputProps } from '../BaseInput/BaseInput';
import classes from './InputText.module.scss';
import { useCallback, useState } from 'react';

interface IProps extends IBaseInputProps {
    icon?: React.ReactNode;
    supportText?: string;
    label?: string;
    autoComplete?: 'off' | 'on';
}

const styledIcon = classNames(classes.inputText__icon, classes.icon);

export const InputText = ({
    id,
    disabled,
    label,
    icon,
    supportText,
    value,
    autoComplete,
    onChange,
}: IProps) => {
    const [labelOnLegend, setLabelOnLegend] = useState(false);
    const styledLabel = classNames(classes.inputText__label, {
        [classes.inputText__label_legend]: labelOnLegend,
        [classes.inputText__label_placehplder]: !labelOnLegend,
    });
    const styledLegend = classNames(classes.inputText__legend, {
        [classes.inputText__legend_active]: labelOnLegend,
    });

    const handleFocusAndBlur = useCallback(
        (state: boolean) => {
            if (!value) {
                setLabelOnLegend(state);
            }
        },
        [value],
    );
    return (
        <div className={classes.wrapper}>
            <fieldset
                className={classNames(classes.inputText, {
                    [classes.inputText__active]: labelOnLegend,
                })}
            >
                {label && (
                    <>
                        <legend className={styledLegend}>{label}</legend>
                        <label
                            htmlFor={id}
                            className={styledLabel}
                        >
                            {label}
                        </label>
                    </>
                )}
                {icon && <span className={styledIcon}>{icon}</span>}
                <BaseInput
                    id={id}
                    disabled={disabled}
                    value={value}
                    type="text"
                    autoComplete={autoComplete}
                    className={classes.input}
                    onChange={onChange}
                    onFocus={() => handleFocusAndBlur(true)}
                    onBlur={() => handleFocusAndBlur(false)}
                />
            </fieldset>
            {supportText && <span className={classes.inputText__supportText}>{supportText}</span>}
        </div>
    );
};
