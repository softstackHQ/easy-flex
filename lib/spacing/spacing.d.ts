import { FC, HTMLAttributes } from 'react';
import { IDistance, IFlipThreshold } from '../types';
export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
    flip?: boolean;
    flipDirection?: boolean;
    flipThreshold?: IFlipThreshold;
    horizontal?: IDistance | number;
    vertical?: IDistance | number;
}
export declare const Spacing: FC<ISpacingProps>;
