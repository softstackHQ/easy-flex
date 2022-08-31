import { ElementSize, Height, Width } from '../types';
export interface SizeProps {
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: Height | ElementSize;
    /** Component's maximum height. */
    maxHeight?: Height | ElementSize;
    /** Component's maximum width. */
    maxWidth?: Width | ElementSize;
    /** Component's miniumum height. */
    minHeight?: Height | ElementSize;
    /** Component's minimum width. */
    minWidth?: Width | ElementSize;
    /** Component's width. */
    width?: Width | ElementSize;
}
export interface SizeStyleProps {
    'data-height'?: ElementSize;
    'data-height-max'?: ElementSize;
    'data-height-min'?: ElementSize;
    'data-width'?: ElementSize;
    'data-width-max'?: ElementSize;
    'data-width-min'?: ElementSize;
}
export declare const useSize: ({ fullHeight, fullWidth, height, maxHeight, maxWidth, minHeight, minWidth, width, }: SizeProps) => {
    height: ElementSize | undefined;
    maxHeight: ElementSize | undefined;
    maxWidth: ElementSize | undefined;
    minHeight: ElementSize | undefined;
    minWidth: ElementSize | undefined;
    width: ElementSize | undefined;
};
export declare const useSizeStyleProps: (props: SizeProps) => SizeStyleProps;
export declare const sizeStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SizeStyleProps, any>>;