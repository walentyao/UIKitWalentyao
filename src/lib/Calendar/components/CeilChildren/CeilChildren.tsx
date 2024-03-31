import { memo } from 'react';

export interface CeilChildrenProps {
    children: React.ReactNode;
    date: Date;
}
export const CeilChildren = memo(({ children, date }: CeilChildrenProps) => {
    return <div>{children}</div>;
});
CeilChildren.displayName = 'CeilChildren';
