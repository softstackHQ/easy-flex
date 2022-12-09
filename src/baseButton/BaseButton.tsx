import React, { ButtonHTMLAttributes, forwardRef, memo } from 'react';
import styled from 'styled-components';
import { CustomName } from '../types';
import { defalsify } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import {
	FlexContainerProps,
	flexContainerStyle,
	FlexContainerStyleProps,
	useFlexContainerStyleProps,
} from '../utils/flexContainer';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledButton = styled.button<
	BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexContainerStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MiscStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: flex;
	border: none;
	cursor: pointer;
	background-color: transparent;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexContainerStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${miscStyle}
	${overflowStyle}
	${sizeStyle}
	
	&:disabled {
		cursor: not-allowed;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

export type BaseButtonProps<
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
> = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
	BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor> &
	ColorProps<CustomColor> &
	DistanceProps<CustomDistance> &
	FlexContainerProps<CustomDistance> &
	FlexItemProps &
	FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> &
	GridItemProps &
	MiscProps &
	OverflowProps &
	SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>;

export type ExternalBaseButtonProps<
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
> = Omit<
	BaseButtonProps<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>,
	| 'align'
	| 'backgroundColor'
	| 'borderColor'
	| 'borderRadius'
	| 'borderStyle'
	| 'borderWidth'
	| 'color'
	| 'direction'
	| 'fontFamily'
	| 'fontSize'
	| 'fontWeight'
	| 'gap'
	| 'italic'
	| 'justify'
	| 'lineHeight'
	| 'overflow'
	| 'overflowX'
	| 'overflowY'
	| 'padding'
	| 'paddingBottom'
	| 'paddingHorizontal'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingVertical'
	| 'round'
	| 'underline'
	| 'underlineColor'
>;

export const createBaseButton = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const BaseButton = memo(
		forwardRef<
			HTMLButtonElement,
			BaseButtonProps<
				CustomAspectRatio,
				CustomBorderRadius,
				CustomBorderWidth,
				CustomColor,
				CustomDistance,
				CustomFontFamily,
				CustomFontSize,
				CustomFontWeight,
				CustomHeight,
				CustomLineHeight,
				CustomWidth
			>
		>(
			(
				{
					align,
					alignSelf,
					aspectRatio,
					backgroundColor,
					basis,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					children,
					color,
					direction,
					displayNone,
					flex,
					fontFamily,
					fontSize,
					fontWeight,
					fullHeight,
					fullWidth,
					gap,
					grow,
					height,
					italic,
					justify,
					justifySelf,
					lineHeight,
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					opacity,
					overflow,
					overflowX,
					overflowY,
					padding,
					paddingBottom,
					paddingHorizontal,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingVertical,
					round,
					shrink,
					underline,
					visibility,
					whiteSpace,
					width,
					wordBreak,
					...props
				},
				ref
			) => {
				const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

				const colorStyleProps = useColorStyleProps({
					backgroundColor: defalsify(backgroundColor) ?? 'transparent',
					color,
				});

				const distanceStyleProps = useDistanceStyleProps({
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
					padding,
					paddingBottom,
					paddingHorizontal,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingVertical,
				});

				const fontStyleProps = useFontStyleProps({
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					lineHeight,
					underline,
					whiteSpace,
					wordBreak,
				});

				const flexContainerStyleProps = useFlexContainerStyleProps({
					align,
					direction: defalsify(direction) ?? 'row',
					gap,
					justify,
				});

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const miscStyleProps = useMiscStyleProps({ displayNone, opacity, visibility });

				const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

				const sizeStyleProps = useSizeStyleProps({
					aspectRatio,
					fullHeight,
					fullWidth,
					height,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					width,
				});

				return (
					<StyledButton
						{...borderStyleProps}
						{...colorStyleProps}
						{...distanceStyleProps}
						{...flexContainerStyleProps}
						{...flexItemStyleProps}
						{...fontStyleProps}
						{...gridItemStyleProps}
						{...miscStyleProps}
						{...overflowStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					>
						{children}
					</StyledButton>
				);
			}
		)
	);
	BaseButton.displayName = 'BaseButton';
	return BaseButton;
};
