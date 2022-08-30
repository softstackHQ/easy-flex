import { AbsoluteSize, Distance } from '../types';
export interface PaddingProps {
    /** Padding of all sides. */
    padding?: Distance | AbsoluteSize;
    /** Component's bottom padding. */
    paddingBottom?: Distance | AbsoluteSize;
    /** Component's left and right padding. */
    paddingHorizontal?: Distance | AbsoluteSize;
    /** Component's left padding. */
    paddingLeft?: Distance | AbsoluteSize;
    /** Component's right padding. */
    paddingRight?: Distance | AbsoluteSize;
    /** Component's top padding. */
    paddingTop?: Distance | AbsoluteSize;
    /** Component's top and bottom padding. */
    paddingVertical?: Distance | AbsoluteSize;
}
export interface PaddingStyleProps {
    'data-padding-bottom': AbsoluteSize;
    'data-padding-left': AbsoluteSize;
    'data-padding-right': AbsoluteSize;
    'data-padding-top': AbsoluteSize;
}
export declare const usePadding: ({ padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical, }: PaddingProps) => {
    bottom: AbsoluteSize;
    left: AbsoluteSize;
    right: AbsoluteSize;
    top: AbsoluteSize;
};
export declare const usePaddingStyleProps: (props: PaddingProps) => PaddingStyleProps;
export declare const paddingStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<PaddingStyleProps, any>>;
