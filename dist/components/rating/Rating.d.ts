import React from 'react';
import { CSSProperties, KeyboardEvent, MouseEvent, ReactElement } from 'react';
interface RatingChangeEvent {
    value: number | null;
    originalEvent: MouseEvent | KeyboardEvent;
}
interface RatingRef {
    getElement: () => HTMLDivElement | null;
}
interface RatingProps {
    id?: string;
    value?: number;
    disabled?: boolean;
    readOnly?: boolean;
    stars?: number;
    cancel?: boolean;
    style?: CSSProperties;
    className?: string;
    tooltip?: string;
    onChange?: (e: RatingChangeEvent) => void;
    onIcon?: ReactElement;
    offIcon?: ReactElement;
    cancelIcon?: ReactElement;
}
declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<RatingRef>>;
export default Rating;
//# sourceMappingURL=Rating.d.ts.map