import React, { FC, HTMLAttributes, MouseEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AbsoluteSize, Color, CssColor } from '../types';
import { isAbsoluteSize, useColor, useEasyFlexTheme } from '../utils/base';

const Background = styled.div<{
	'data-background-color': CssColor;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

export interface BaseModalProps extends HTMLAttributes<HTMLDivElement> {
	backgroundColor?: Color;
	/** Sets blur for the content covered by the modal background. */
	blur?: boolean | AbsoluteSize;
	blurElementId?: string;
	containerElementId?: string;
	/** Called if the modal background is clicked. */
	onClose: () => void;
}

export const BaseModal: FC<BaseModalProps> = ({
	children,
	backgroundColor,
	blur,
	blurElementId,
	containerElementId,
	onClose,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const backgroundElement = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target === backgroundElement.current) {
				onClose();
			}
		},
		[onClose]
	);

	const processedBackgroundColor = useColor(backgroundColor, theme.modal.backgroundColor);

	useEffect(() => {
		if (isAbsoluteSize(blur) || (blur !== false && theme.modal.blur)) {
			const styleElement = document.createElement('style');
			styleElement.textContent = `
				#${blurElementId ?? theme.modal.blurElementId} {
					filter: blur(${isAbsoluteSize(blur) ? blur : theme.modal.blur});
				}
			`;
			document.head.append(styleElement);

			return () => {
				document.head.removeChild(styleElement);
			};
		}
	}, [blur, blurElementId, theme]);

	const container = useMemo<HTMLElement>(
		() => document.getElementById(containerElementId ?? theme.modal.containerElementId) ?? document.body,
		[containerElementId, theme]
	);

	return createPortal(
		<Background
			ref={backgroundElement}
			data-background-color={processedBackgroundColor}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Background>,
		container
	);
};