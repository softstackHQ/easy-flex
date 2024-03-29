import { useMemo } from 'react';
import { css } from 'styled-components';
import {
	AbsoluteSize,
	BorderRadius,
	BorderStyle,
	BorderWidth,
	Color,
	CssColor,
	CustomName,
	Falsifiable,
	Size,
} from '../types';
import { defalsify, getBorderRadius, getBorderWidth, ifDefined, useEasyFlexTheme } from './base';
import { useColor } from './color';

export interface BorderProps<
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName
> {
	/** Component's border color. */
	borderColor?: Falsifiable<Color<CustomColor>>;
	/** Component's border radius. */
	borderRadius?: Falsifiable<BorderRadius<CustomBorderRadius>>;
	borderStyle?: Falsifiable<BorderStyle>;
	/** Component's border width. */
	borderWidth?: Falsifiable<BorderWidth<CustomBorderWidth>>;
}

export interface BorderStyleProps {
	'data-border-color': CssColor | undefined;
	'data-border-radius': Size | undefined;
	'data-border-style': BorderStyle | undefined;
	'data-border-width': AbsoluteSize | undefined;
}

export const useBorder = <
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName
>({
	borderColor,
	borderRadius,
	borderStyle,
	borderWidth,
}: BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>): {
	color: CssColor | undefined;
	radius: Size | undefined;
	style: BorderStyle | undefined;
	width: AbsoluteSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedBorderColor = useColor(borderColor);

	const processedBorderRadius = useMemo<Size | undefined>(
		() => ifDefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius)),
		[borderRadius, theme]
	);

	const processedBorderStyle = useMemo<BorderStyle | undefined>(
		() =>
			(borderStyle !== false && borderStyle !== undefined) || (borderWidth !== false && borderWidth !== undefined)
				? defalsify(borderStyle) ?? theme.border.defaultStyle
				: undefined,
		[borderStyle, borderWidth, theme]
	);

	const processedBorderWidth = useMemo<AbsoluteSize | undefined>(
		() => ifDefined(borderWidth, (borderWidth) => getBorderWidth(theme, borderWidth)),
		[borderWidth, theme]
	);

	return useMemo<{
		color: CssColor | undefined;
		radius: Size | undefined;
		style: BorderStyle | undefined;
		width: AbsoluteSize | undefined;
	}>(
		() => ({
			color: processedBorderColor,
			radius: processedBorderRadius,
			style: processedBorderStyle,
			width: processedBorderWidth,
		}),
		[processedBorderColor, processedBorderRadius, processedBorderStyle, processedBorderWidth]
	);
};

export const useBorderStyleProps = <
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName
>(
	props: BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>
): BorderStyleProps => {
	const border = useBorder(props);

	return useMemo<BorderStyleProps>(
		() => ({
			'data-border-color': border.color,
			'data-border-radius': border.radius,
			'data-border-style': border.style,
			'data-border-width': border.width,
		}),
		[border]
	);
};

export const borderStyle = css<BorderStyleProps>`
	border-color: ${({ 'data-border-color': borderColor }) => borderColor};
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	border-style: ${({ 'data-border-style': borderStyle }) => borderStyle};
	border-width: ${({ 'data-border-width': borderWidth }) => borderWidth};
`;
