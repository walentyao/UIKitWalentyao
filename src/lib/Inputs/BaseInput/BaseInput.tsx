export interface IBaseInputProps {
    id: string;
    disabled?: boolean;
    placeholder?: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
    className?: string;
    [key: string]: unknown;
}
export const BaseInput = ({
    id,
    disabled,
    placeholder,
    value,
    type,
    onChange,
    className,
    ...props
}: IBaseInputProps) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange && onChange(e.target.value)}
            className={className ?? ''}
            {...props}
        />
    );
};
