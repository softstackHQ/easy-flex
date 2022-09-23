import { createContext } from 'react';
import { EasyFlexTheme } from './types';

export const themeColors = [
	'primary',
	'secondary',
	'tertiary',
	'warning',
	'error',
	'header',
	'footer',
	'modal',
	'rise',
	'decline',
	'brand1',
	'brand2',
	'brand3',
	'brand4',
	'brand5',
	'brand6',
	'brand7',
	'brand8',
	'primaryText',
	'secondaryText',
	'tertiaryText',
	'warningText',
	'errorText',
	'headerText',
	'footerText',
	'modalText',
	'riseText',
	'declineText',
	'text1',
	'text2',
	'text3',
	'text4',
	'text5',
	'text6',
	'text7',
	'text8',
	'primaryBackground',
	'secondaryBackground',
	'tertiaryBackground',
	'warningBackground',
	'errorBackground',
	'headerBackground',
	'footerBackground',
	'modalBackground',
	'riseBackground',
	'declineBackground',
	'background1',
	'background2',
	'background3',
	'background4',
	'background5',
	'background6',
	'background7',
	'background8',
	'onPrimary',
	'onSecondary',
	'onTertiary',
	'onWarning',
	'onError',
	'onHeader',
	'onFooter',
	'onModal',
	'onRise',
	'onDecline',
	'onBrand1',
	'onBrand2',
	'onBrand3',
	'onBrand4',
	'onBrand5',
	'onBrand6',
	'onBrand7',
	'onBrand8',
	'primaryBorder',
	'secondaryBorder',
	'tertiaryBorder',
	'warningBorder',
	'errorBorder',
	'headerBorder',
	'footerBorder',
	'modalBorder',
	'riseBorder',
	'declineBorder',
	'border1',
	'border2',
	'border3',
	'border4',
	'border5',
	'border6',
	'border7',
	'border8',
];

export const themeSizes = [
	'8xs',
	'7xs',
	'6xs',
	'5xs',
	'4xs',
	'3xs',
	'xxs',
	'xs',
	's',
	'm',
	'l',
	'xl',
	'xxl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
];

export const defaultEasyFlexTheme: EasyFlexTheme = {
	border: {
		defaultStyle: 'solid',
		radius: {
			'8xs': '0px',
			'7xs': '0px',
			'6xs': '0px',
			'5xs': '0px',
			'4xs': '0px',
			'3xs': '0px',
			xxs: '0px',
			xs: '0px',
			s: '0px',
			m: '0px',
			l: '0px',
			xl: '0px',
			xxl: '0px',
			'3xl': '0px',
			'4xl': '0px',
			'5xl': '0px',
			'6xl': '0px',
			'7xl': '0px',
			'8xl': '0px',
		},
		width: {
			'8xs': '1px',
			'7xs': '1px',
			'6xs': '1px',
			'5xs': '1px',
			'4xs': '1px',
			'3xs': '1px',
			xxs: '1px',
			xs: '1px',
			s: '1px',
			m: '1px',
			l: '1px',
			xl: '1px',
			xxl: '1px',
			'3xl': '1px',
			'4xl': '1px',
			'5xl': '1px',
			'6xl': '1px',
			'7xl': '1px',
			'8xl': '1px',
		},
	},
	color: {
		primary: '#007bff',
		secondary: '#007bff',
		tertiary: '#007bff',
		warning: '#007bff',
		error: '#007bff',
		header: '#007bff',
		footer: '#007bff',
		modal: '#007bff',
		rise: '#28a745',
		decline: '#dc3545',
		brand1: '#007bff',
		brand2: '#007bff',
		brand3: '#007bff',
		brand4: '#007bff',
		brand5: '#007bff',
		brand6: '#007bff',
		brand7: '#007bff',
		brand8: '#007bff',
		primaryText: '#343a40',
		secondaryText: '#343a40',
		tertiaryText: '#343a40',
		warningText: '#343a40',
		errorText: '#343a40',
		headerText: '#343a40',
		footerText: '#343a40',
		modalText: '#343a40',
		riseText: '#28a745',
		declineText: '#dc3545',
		text1: '#343a40',
		text2: '#343a40',
		text3: '#343a40',
		text4: '#343a40',
		text5: '#343a40',
		text6: '#343a40',
		text7: '#343a40',
		text8: '#343a40',
		primaryBackground: '#fff',
		secondaryBackground: '#fff',
		tertiaryBackground: '#fff',
		warningBackground: '#ffc107',
		errorBackground: '#dc3545',
		headerBackground: '#fff',
		footerBackground: '#fff',
		modalBackground: '#fff',
		riseBackground: '#28a745',
		declineBackground: '#dc3545',
		background1: '#fff',
		background2: '#fff',
		background3: '#fff',
		background4: '#fff',
		background5: '#fff',
		background6: '#fff',
		background7: '#fff',
		background8: '#fff',
		onPrimary: '#fff',
		onSecondary: '#fff',
		onTertiary: '#fff',
		onWarning: '#343a40',
		onError: '#fff',
		onHeader: '#fff',
		onFooter: '#fff',
		onModal: '#fff',
		onRise: '#28a745',
		onDecline: '#dc3545',
		onBrand1: '#fff',
		onBrand2: '#fff',
		onBrand3: '#fff',
		onBrand4: '#fff',
		onBrand5: '#fff',
		onBrand6: '#fff',
		onBrand7: '#fff',
		onBrand8: '#fff',
		primaryBorder: '#aaa',
		secondaryBorder: '#aaa',
		tertiaryBorder: '#aaa',
		warningBorder: '#aaa',
		errorBorder: '#aaa',
		headerBorder: '#aaa',
		footerBorder: '#aaa',
		modalBorder: '#aaa',
		riseBorder: '#28a745',
		declineBorder: '#dc3545',
		border1: '#aaa',
		border2: '#aaa',
		border3: '#aaa',
		border4: '#aaa',
		border5: '#aaa',
		border6: '#aaa',
		border7: '#aaa',
		border8: '#aaa',
	},
	distance: {
		'8xs': '1px',
		'7xs': '2px',
		'6xs': '3px',
		'5xs': '5px',
		'4xs': '7px',
		'3xs': '10px',
		xxs: '15px',
		xs: '23px',
		s: '34px',
		m: '51px',
		l: '77px',
		xl: '115px',
		xxl: '173px',
		'3xl': '259px',
		'4xl': '389px',
		'5xl': '584px',
		'6xl': '876px',
		'7xl': '1314px',
		'8xl': '1971px',
	},
	font: {
		family: {
			primary: 'sans-serif',
			secondary: 'sans-serif',
			tertiary: 'sans-serif',
			quaternary: 'sans-serif',
			quinary: 'sans-serif',
			senary: 'sans-serif',
			warning: 'sans-serif',
			error: 'sans-serif',
			header: 'sans-serif',
			footer: 'sans-serif',
			modal: 'sans-serif',
		},
		lineHeight: {
			'8xs': 1.5,
			'7xs': 1.5,
			'6xs': 1.5,
			'5xs': 1.5,
			'4xs': 1.5,
			'3xs': 1.5,
			xxs: 1.5,
			xs: 1.5,
			s: 1.5,
			m: 1.5,
			l: 1.5,
			xl: 1.5,
			xxl: 1.5,
			'3xl': 1.5,
			'4xl': 1.5,
			'5xl': 1.5,
			'6xl': 1.5,
			'7xl': 1.5,
			'8xl': 1.5,
		},
		size: {
			'8xs': '0.4375rem', // 7px
			'7xs': '0.5rem', // 8px
			'6xs': '0.5625rem', // 9px
			'5xs': '0.625rem', // 10px
			'4xs': '0.6875rem', // 11px
			'3xs': '0.75rem', // 12px
			xxs: '0.8125rem', // 13px
			xs: '0.875rem', // 14px
			s: '0.9375rem', // 15px
			m: '1rem', // 16px
			l: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			xxl: '1.375rem', // 22px
			'3xl': '1.5rem', // 24px
			'4xl': '1.75rem', // 28px
			'5xl': '2rem', // 32px
			'6xl': '2.5rem', // 40px
			'7xl': '3rem', // 48px
			'8xl': '4rem', // 64px
		},
		weight: {
			thin: 100,
			extraLight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extraBold: 800,
			black: 900,
			extraBlack: 950,
		},
	},
	modal: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		blur: '0px',
		blurElementId: 'root',
		containerElementId: '',
	},
	size: {
		height: {
			'8xs': '1px',
			'7xs': '2px',
			'6xs': '3px',
			'5xs': '5px',
			'4xs': '7px',
			'3xs': '10px',
			xxs: '15px',
			xs: '23px',
			s: '34px',
			m: '51px',
			l: '77px',
			xl: '115px',
			xxl: '173px',
			'3xl': '259px',
			'4xl': '389px',
			'5xl': '584px',
			'6xl': '876px',
			'7xl': '1314px',
			'8xl': '1971px',
		},
		width: {
			'8xs': '1px',
			'7xs': '2px',
			'6xs': '3px',
			'5xs': '5px',
			'4xs': '7px',
			'3xs': '10px',
			xxs: '15px',
			xs: '23px',
			s: '34px',
			m: '51px',
			l: '77px',
			xl: '115px',
			xxl: '173px',
			'3xl': '259px',
			'4xl': '389px',
			'5xl': '584px',
			'6xl': '876px',
			'7xl': '1314px',
			'8xl': '1971px',
		},
	},
	viewport: {
		defaultThreshold: 0,
		threshold: {
			'8xs': 0,
			'7xs': 0,
			'6xs': 0,
			'5xs': 0,
			'4xs': 0,
			'3xs': 0,
			xxs: 0,
			xs: 0,
			s: 0,
			m: 0,
			l: 0,
			xl: 0,
			xxl: 0,
			'3xl': 0,
			'4xl': 0,
			'5xl': 0,
			'6xl': 0,
			'7xl': 0,
			'8xl': 0,
		},
	},
};

export const EasyFlexContext = createContext(defaultEasyFlexTheme);
