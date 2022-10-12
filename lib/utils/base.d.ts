import { AbsoluteSize, BorderRadius, BorderWidth, Color, ColorKeyword, ColorName, CssColor, CssFontWeight, CssLineHeight, CustomThemeSize, DeepPartial, Distance, EasyFlexTheme, ElementSize, Falsifiable, FontSize, FontWeight, GlobalValue, Height, LineHeight, Percent, Px, Rem, Size, ThemeSize, Vh, ViewportThreshold, Vw, Width } from '../types';
export declare const mergeEasyFlexThemes: <T>(a: T, b: DeepPartial<T>) => T;
export declare const isGlobalValue: (value: unknown) => value is GlobalValue;
export declare const isCustomName: (value: unknown) => value is `_${string}`;
export declare const isColorKeyword: <CustomColor extends `_${string}`>(color: Color<CustomColor>) => color is ColorKeyword;
export declare const isColorName: <CustomColor extends `_${string}`>(color: Color<CustomColor>) => color is ColorName;
export declare const isThemeSizeX: (size: unknown) => size is ThemeSize;
export declare const isThemeSize: <T extends `_${string}`>(size: unknown) => size is CustomThemeSize<T>;
export declare const isPercent: (value: unknown) => value is `${number}px`;
export declare const isPx: (value: unknown) => value is `${number}px`;
export declare const isRem: (value: unknown) => value is `${number}rem`;
export declare const isVh: (value: unknown) => value is `${number}vh`;
export declare const isVw: (value: unknown) => value is `${number}vw`;
export declare const isAbsoluteSize: (value: unknown) => value is AbsoluteSize;
export declare const isSize: (value: unknown) => value is Size;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, false | undefined>) => U) => T extends undefined ? undefined : U;
export declare const defalsify: <T>(value: false | T) => T | undefined;
export declare const toPercent: (value: number) => Percent;
export declare const toPx: (value: number) => Px;
export declare const toRem: (value: number) => Rem;
export declare const toVh: (value: number) => Vh;
export declare const toVw: (value: number) => Vw;
export declare const percentToNumber: (value: Percent) => number;
export declare const pxToNumber: (value: Px) => number;
export declare const remToNumber: (value: Rem) => number;
export declare const vhToNumber: (value: Vh) => number;
export declare const vwToNumber: (value: Vw) => number;
export declare const absoluteSizeToNumber: (value: AbsoluteSize) => number;
export declare const sizeToNumber: (value: Size) => number;
export declare const getBorderRadius: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, borderRadius: BorderRadius<CustomBorderRadius>) => Size;
export declare const getBorderWidth: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, borderWidth: BorderWidth<CustomBorderWidth>) => AbsoluteSize;
export declare const getColor: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, color: Color<CustomColor>) => CssColor;
export declare const getDistance: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, distance: Distance<CustomDistance>) => AbsoluteSize;
export declare const getFontSize: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, fontSize: FontSize<CustomFontSize>) => Size;
export declare const getFontWeight: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, fontWeight: FontWeight<CustomFontWeight>) => CssFontWeight;
export declare const getHeight: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, height: Height<CustomHeight>) => ElementSize;
export declare const getLineHeight: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, lineHeight: LineHeight<CustomLineHeight>) => CssLineHeight;
export declare const getViewportThreshold: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, viewportThreshold: ViewportThreshold<CustomViewportThreshold>) => number;
export declare const getWidth: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>(theme: EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>, width: Width<CustomWidth>) => ElementSize;
export declare const useEasyFlexTheme: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>() => EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useModalContainer: (containerElementId: Falsifiable<string> | undefined) => HTMLElement;
export declare const useViewport: () => Record<ThemeSize | 'default', boolean>;
