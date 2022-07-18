import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IDistance, IFlipThreshold } from '../types';
import { getDistance, getFlipThreshold, toPx, useDimension, useEasyFlexTheme } from '../utils';

const StyledSpacing = styled.div<{ 'data-height': string; 'data-width': string }>`
	display: flex;
	box-sizing: border-box;
	background-color: transparent;
	margin: 0;
	padding: 0;
	min-height: ${({ 'data-height': height }) => height};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height': height }) => height};
	min-width: ${({ 'data-width': width }) => width};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width': width }) => width};
`;

export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
	/** If true, height and width are flipped if flipping has been enabled. */
	flip?: boolean;
	/** Enables flipping. */
	flipEnabled?: boolean;
	/** Sets the flip threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
	flipThreshold?: IFlipThreshold;
	/** Component's height. */
	height?: IDistance | number;
	/** Component's width. */
	width?: IDistance | number;
}

export const Spacing: FC<ISpacingProps> = ({
	flip,
	flipEnabled = false,
	flipThreshold,
	height = 0,
	width = 0,
	...props
}) => {
	const theme = useEasyFlexTheme();
	const { width: displayWidth } = useDimension();

	const processedHeight = useMemo<string>(
		() =>
			flipEnabled &&
			(flip ||
				(flip === undefined &&
					(flipThreshold !== undefined
						? displayWidth < getFlipThreshold(theme, flipThreshold)
						: displayWidth < theme.flip.fallbackThreshold)))
				? toPx(getDistance(theme, width))
				: toPx(getDistance(theme, height)),
		[displayWidth, flip, flipEnabled, flipThreshold, height, theme, width]
	);

	const processedWidth = useMemo<string>(
		() =>
			flipEnabled &&
			(flip ||
				(flip === undefined &&
					(flipThreshold !== undefined
						? displayWidth < getFlipThreshold(theme, flipThreshold)
						: displayWidth < theme.flip.fallbackThreshold)))
				? toPx(getDistance(theme, height))
				: toPx(getDistance(theme, width)),
		[displayWidth, flip, flipEnabled, flipThreshold, height, theme, width]
	);

	return <StyledSpacing data-height={processedHeight} data-width={processedWidth} {...props} />;
};
