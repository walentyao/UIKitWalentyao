import classNames from 'classnames';
import classes from './Button.module.scss';
import { useMemo } from 'react';

type SyledButton = 'primary' | 'outline' | 'icon' | 'text';

interface IProps {
    label?: string;
    disabled?: boolean;
    styled?: SyledButton;
    icon?: React.ReactNode;
}

const getStyledClassesButton = (styled: SyledButton, disabled: boolean) => {
    return classNames(classes[`btn__${styled}`], {
        [classes[`btn__${styled}_disabled`]]: disabled,
    });
};

export const Button = ({ icon, label, styled = 'primary', disabled = false }: IProps) => {
    const buttonClasses = useMemo(
        () => classNames(classes.btn, getStyledClassesButton(styled, disabled)),
        [styled, disabled],
    );

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
        >
            {icon && <span className={classes.icon}>{icon}</span>}
            {label && <span>{label}</span>}
        </button>
    );
};
