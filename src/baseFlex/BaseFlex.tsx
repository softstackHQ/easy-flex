import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseFlexElement, CustomName, Falsifiable } from '../types';
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

const style = css<
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
`;

const StyledArticle = styled.article`
	${style}
`;

const StyledAside = styled.aside`
	${style}
`;

const StyledDiv = styled.div`
	${style}
`;

const StyledFigure = styled.figure`
	${style}
`;

const StyledFooter = styled.footer`
	${style}
`;

const StyledHeader = styled.header`
	${style}
`;

const StyledMain = styled.main`
	${style}
`;

const StyledNav = styled.nav`
	${style}
`;

const StyledSection = styled.section`
	${style}
`;

const StyledSummary = styled.summary`
	${style}
`;

export interface BaseFlexProps<
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
> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		DistanceProps<CustomDistance>,
		FlexContainerProps<CustomDistance>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		GridItemProps,
		MiscProps,
		OverflowProps,
		SizeProps<CustomHeight, CustomWidth> {
	/** Component's html tag. */
	element?: Falsifiable<BaseFlexElement>;
}

export const createBaseFlex = <
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
	const BaseFlex = memo(
		forwardRef<
			HTMLDivElement,
			BaseFlexProps<
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
					backgroundColor,
					basis,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					children,
					color,
					displayNone,
					element = 'div',
					flex,
					direction,
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

				const colorStyleProps = useColorStyleProps({ backgroundColor, color, opacity });

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

				const flexContainerStyleProps = useFlexContainerStyleProps({ align, direction, gap, justify });

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const miscStyleProps = useMiscStyleProps({ displayNone, visibility });

				const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

				const sizeStyleProps = useSizeStyleProps({
					fullHeight,
					fullWidth,
					height,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					width,
				});

				const Element = useMemo(() => {
					switch (element) {
						case 'article':
							return StyledArticle;
						case 'aside':
							return StyledAside;
						case 'div':
						case false:
							return StyledDiv;
						case 'figure':
							return StyledFigure;
						case 'footer':
							return StyledFooter;
						case 'header':
							return StyledHeader;
						case 'main':
							return StyledMain;
						case 'nav':
							return StyledNav;
						case 'section':
							return StyledSection;
						case 'summary':
							return StyledSummary;
					}
				}, [element]);

				return (
					<Element
						{...borderStyleProps}
						{...colorStyleProps}
						{...distanceStyleProps}
						{...fontStyleProps}
						{...flexContainerStyleProps}
						{...flexItemStyleProps}
						{...gridItemStyleProps}
						{...miscStyleProps}
						{...overflowStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					>
						{children}
					</Element>
				);
			}
		)
	);
	BaseFlex.displayName = 'BaseFlex';
	return BaseFlex;
};
