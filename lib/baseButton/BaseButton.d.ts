import React, { ButtonHTMLAttributes } from 'react';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export declare type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BorderProps & ColorProps & DistanceProps & FlexContainerProps & FlexItemProps & FontProps & OverflowProps & SizeProps;
export declare type ExternalBaseButtonProps = Omit<BaseButtonProps, 'align' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'color' | 'justify' | 'padding' | 'paddingBottom' | 'paddingHorizontal' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingVertical'>;
export declare const BaseButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & BorderProps & ColorProps & import("..").MarginProps & import("..").PaddingProps & FlexContainerProps & FlexItemProps & FontProps & OverflowProps & SizeProps & React.RefAttributes<HTMLButtonElement>>;
