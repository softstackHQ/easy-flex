export type IDeepPartial<T> = T extends object
	? {
			[P in keyof T]?: IDeepPartial<T[P]>;
	  }
	: T;

// Base start

type IBaseSize =
	| '8xs'
	| '7xs'
	| '6xs'
	| '5xs'
	| '4xs'
	| '3xs'
	| 'xxs'
	| 'xs'
	| 's'
	| 'm'
	| 'l'
	| 'xl'
	| 'xxl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl';

interface IBaseSizeNumber {
	'8xs': number;
	'7xs': number;
	'6xs': number;
	'5xs': number;
	'4xs': number;
	'3xs': number;
	xxs: number;
	xs: number;
	s: number;
	m: number;
	l: number;
	xl: number;
	xxl: number;
	'3xl': number;
	'4xl': number;
	'5xl': number;
	'6xl': number;
	'7xl': number;
	'8xl': number;
}

type ISizeType = 'px' | 'rem';

// Base end

// CSS start

export type IAlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IAlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type IJustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

export type ITextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';

export type IWordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';

// CSS end

// Custom start

export type IBaseFlexElement =
	| 'article'
	| 'aside'
	| 'div'
	| 'figure'
	| 'footer'
	| 'header'
	| 'main'
	| 'nav'
	| 'section'
	| 'summary';

export type IBorderRadius = IBaseSize;

export type IBorderWidth = IBaseSize;

export type IColor =
	| 'inherit'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'quaternary'
	| 'quinary'
	| 'senary'
	| 'warning'
	| 'error'
	| 'header'
	| 'footer'
	| 'modal'
	| 'primaryText'
	| 'secondaryText'
	| 'tertiaryText'
	| 'quaternaryText'
	| 'quinaryText'
	| 'senaryText'
	| 'warningText'
	| 'errorText'
	| 'headerText'
	| 'footerText'
	| 'modalText'
	| 'primaryBackground'
	| 'secondaryBackground'
	| 'tertiaryBackground'
	| 'quaternaryBackground'
	| 'quinaryBackground'
	| 'senaryBackground'
	| 'warningBackground'
	| 'errorBackground'
	| 'headerBackground'
	| 'footerBackground'
	| 'modalBackground'
	| 'onPrimary'
	| 'onSecondary'
	| 'onTertiary'
	| 'onQuaternary'
	| 'onQuinary'
	| 'onSenary'
	| 'onWarning'
	| 'onError'
	| 'onHeader'
	| 'onFooter'
	| 'onModal'
	| 'primaryBorder'
	| 'secondaryBorder'
	| 'tertiaryBorder'
	| 'quanternaryBorder'
	| 'senaryBorder'
	| 'warningBorder'
	| 'errorBorder'
	| 'headerBorder'
	| 'footerBorder'
	| 'modalBorder';

export type IDistance = IBaseSize;

export type IFlipDirection = 'flip' | 'flip-reverse' | 'reverse';

export type IFlipThreshold = IBaseSize;

export type IFontSize = IBaseSize;

export type IFontStyle = 'italic' | 'normal';

export type IFontWeight = 'bold' | 'normal' | 'semibold';

export type IHeight = IBaseSize;

export type ITextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type IWidth = IBaseSize;

// Custom end

export interface IEasyFlexTheme {
	border: {
		radius: IBaseSizeNumber;
		width: IBaseSizeNumber;
	};
	color: {
		primary: string;
		secondary: string;
		tertiary: string;
		quaternary: string;
		quinary: string;
		senary: string;
		warning: string;
		error: string;
		header: string;
		footer: string;
		modal: string;
		primaryText: string;
		secondaryText: string;
		tertiaryText: string;
		quaternaryText: string;
		quinaryText: string;
		senaryText: string;
		warningText: string;
		errorText: string;
		headerText: string;
		footerText: string;
		modalText: string;
		primaryBackground: string;
		secondaryBackground: string;
		tertiaryBackground: string;
		quaternaryBackground: string;
		quinaryBackground: string;
		senaryBackground: string;
		warningBackground: string;
		errorBackground: string;
		headerBackground: string;
		footerBackground: string;
		modalBackground: string;
		onPrimary: string;
		onSecondary: string;
		onTertiary: string;
		onQuaternary: string;
		onQuinary: string;
		onSenary: string;
		onWarning: string;
		onError: string;
		onHeader: string;
		onFooter: string;
		onModal: string;
		primaryBorder: string;
		secondaryBorder: string;
		tertiaryBorder: string;
		quanternaryBorder: string;
		quinaryBorder: string;
		senaryBorder: string;
		warningBorder: string;
		errorBorder: string;
		headerBorder: string;
		footerBorder: string;
		modalBorder: string;
	};
	distance: IBaseSizeNumber;
	flip: {
		fallbackThreshold: number;
		threshold: IBaseSizeNumber;
	};
	font: {
		sizeType: ISizeType;
		size: IBaseSizeNumber;
		weight: {
			normal: number | string;
			semibold: number | string;
			bold: number | string;
		};
	};
	height: IBaseSizeNumber;
	modal: {
		backgroundColor: string;
		blur: number;
	};
	width: IBaseSizeNumber;
}

export type IPartialEasyFlexTheme = IDeepPartial<IEasyFlexTheme>;
