import { Color, CssColor, CustomName, Falsifiable } from '../types';
export interface ColorProps<CustomColor extends CustomName> {
    /** Component's background color. */
    backgroundColor?: Falsifiable<Color<CustomColor>>;
    /** Component's color. */
    color?: Falsifiable<Color<CustomColor>>;
}
export interface ColorStyleProps {
    'data-background-color': CssColor | undefined;
    'data-color': CssColor | undefined;
}
export declare const useColor: <CustomColor extends `_${string}`>(color: Falsifiable<Color<CustomColor>> | undefined) => CssColor | undefined;
export declare const useDefaultColor: <T extends CssColor | undefined, CustomColor extends `_${string}`>(color: Falsifiable<Color<CustomColor>> | undefined, defaultColor: T) => T extends CssColor ? CssColor : CssColor | undefined;
export declare const useColorStyleProps: <CustomColor extends `_${string}`>({ backgroundColor, color, }: ColorProps<CustomColor>) => ColorStyleProps;
export declare const colorStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ColorStyleProps, any>>;
