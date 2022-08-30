import { createContext } from 'react';
import { EasyFlexTheme } from './types';

export const themeColors = [
	'primary',
	'secondary',
	'tertiary',
	'quaternary',
	'quinary',
	'senary',
	'warning',
	'error',
	'header',
	'footer',
	'modal',
	'primaryText',
	'secondaryText',
	'tertiaryText',
	'quaternaryText',
	'quinaryText',
	'senaryText',
	'warningText',
	'errorText',
	'headerText',
	'footerText',
	'modalText',
	'primaryBackground',
	'secondaryBackground',
	'tertiaryBackground',
	'quaternaryBackground',
	'quinaryBackground',
	'senaryBackground',
	'warningBackground',
	'errorBackground',
	'headerBackground',
	'footerBackground',
	'modalBackground',
	'onPrimary',
	'onSecondary',
	'onTertiary',
	'onQuaternary',
	'onQuinary',
	'onSenary',
	'onWarning',
	'onError',
	'onHeader',
	'onFooter',
	'onModal',
	'primaryBorder',
	'secondaryBorder',
	'tertiaryBorder',
	'quaternaryBorder',
	'senaryBorder',
	'warningBorder',
	'errorBorder',
	'headerBorder',
	'footerBorder',
	'modalBorder',
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

export const initialFlexTheme: EasyFlexTheme = {
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
		quaternary: '#007bff',
		quinary: '#007bff',
		senary: '#007bff',
		warning: '#007bff',
		error: '#007bff',
		header: '#007bff',
		footer: '#007bff',
		modal: '#007bff',
		primaryText: '#343a40',
		secondaryText: '#343a40',
		tertiaryText: '#343a40',
		quaternaryText: '#343a40',
		quinaryText: '#343a40',
		senaryText: '#343a40',
		warningText: '#343a40',
		errorText: '#343a40',
		headerText: '#343a40',
		footerText: '#343a40',
		modalText: '#343a40',
		primaryBackground: '#fff',
		secondaryBackground: '#fff',
		tertiaryBackground: '#fff',
		quaternaryBackground: '#fff',
		quinaryBackground: '#fff',
		senaryBackground: '#fff',
		warningBackground: '#ffc107',
		errorBackground: '#dc3545',
		headerBackground: '#fff',
		footerBackground: '#fff',
		modalBackground: '#fff',
		onPrimary: '#fff',
		onSecondary: '#fff',
		onTertiary: '#fff',
		onQuaternary: '#fff',
		onQuinary: '#fff',
		onSenary: '#fff',
		onWarning: '#343a40',
		onError: '#fff',
		onHeader: '#fff',
		onFooter: '#fff',
		onModal: '#fff',
		primaryBorder: '#aaa',
		secondaryBorder: '#aaa',
		tertiaryBorder: '#aaa',
		quaternaryBorder: '#aaa',
		quinaryBorder: '#aaa',
		senaryBorder: '#aaa',
		warningBorder: '#aaa',
		errorBorder: '#aaa',
		headerBorder: '#aaa',
		footerBorder: '#aaa',
		modalBorder: '#aaa',
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
			'8xs': '0.0625rem', // 1px
			'7xs': '0.125rem', // 2px
			'6xs': '0.1875rem', // 3px
			'5xs': '0.25rem', // 4px
			'4xs': '0.375rem', // 6px
			'3xs': '0.5rem', // 8px
			xxs: '0.625rem', // 10px
			xs: '0.75rem', // 12px
			s: '0.875rem', // 14px
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
			normal: 'normal',
			medium: 500,
			semibold: 600,
			bold: 'bold',
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

export const EasyFlexContext = createContext(initialFlexTheme);
