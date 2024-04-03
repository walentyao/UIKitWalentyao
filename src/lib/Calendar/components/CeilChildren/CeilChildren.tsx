import { memo } from 'react';

export interface CeilChildrenProps {
    children: React.ReactNode;
    date: Date;
}
export const CeilChildren = memo(({ children, date }: CeilChildrenProps) => {
    console.debug(date);
    return <>{children}</>;
});
CeilChildren.displayName = 'CeilChildren';
