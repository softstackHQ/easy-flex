export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type AlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type ColorCode = `#${string}` | `hsl(${number}, ${number}%, ${number}%)` | `hsl(${number}deg, ${number}%, ${number}%)` | `hsl(${number}turn, ${number}%, ${number}%)` | `hsl(${number}, ${number}%, ${number}%, ${number})` | `hsl(${number}deg, ${number}%, ${number}%, ${number})` | `hsl(${number}turn, ${number}%, ${number}%, ${number})` | `hsl(${number}, ${number}%, ${number}%, ${number}%)` | `hsl(${number}deg, ${number}%, ${number}%, ${number}%)` | `hsl(${number}turn, ${number}%, ${number}%, ${number}%)` | `hsl(${number} ${number}% ${number}%)` | `hsl(${number}deg ${number}% ${number}%)` | `hsl(${number}turn ${number}% ${number}%)` | `hsl(${number} ${number}% ${number}% / ${number})` | `hsl(${number}deg ${number}% ${number}% / ${number})` | `hsl(${number}turn ${number}% ${number}% / ${number})` | `hsl(${number} ${number}% ${number}% / ${number}%)` | `hsl(${number}deg ${number}% ${number}% / ${number}%)` | `hsl(${number}turn ${number}% ${number}% / ${number}%)` | `hsla(${number}, ${number}%, ${number}%)` | `hsla(${number}deg, ${number}%, ${number}%)` | `hsla(${number}turn, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})` | `hsla(${number}deg, ${number}%, ${number}%, ${number})` | `hsla(${number}turn, ${number}%, ${number}%, ${number})` | `hsla(${number}, ${number}%, ${number}%, ${number}%)` | `hsla(${number}deg, ${number}%, ${number}%, ${number}%)` | `hsla(${number}turn, ${number}%, ${number}%, ${number}%)` | `hsla(${number} ${number}% ${number}%)` | `hsla(${number}deg ${number}% ${number}%)` | `hsla(${number}turn ${number}% ${number}%)` | `hsla(${number} ${number}% ${number}% / ${number})` | `hsla(${number}deg ${number}% ${number}% / ${number})` | `hsla(${number}turn ${number}% ${number}% / ${number})` | `hsla(${number} ${number}% ${number}% / ${number}%)` | `hsla(${number}deg ${number}% ${number}% / ${number}%)` | `hsla(${number}turn ${number}% ${number}% / ${number}%)` | `rgb(${number}, ${number}, ${number})` | `rgb(${number}%, ${number}%, ${number}%)` | `rgb(${number}, ${number}, ${number}, ${number})` | `rgb(${number}, ${number}, ${number}, ${number}%)` | `rgb(${number}%, ${number}%, ${number}%, ${number})` | `rgb(${number}%, ${number}%, ${number}%, ${number}%)` | `rgb(${number} ${number} ${number})` | `rgb(${number}% ${number}% ${number}%)` | `rgb(${number} ${number} ${number} / ${number})` | `rgb(${number} ${number} ${number} / ${number}%)` | `rgb(${number}% ${number}% ${number}% / ${number})` | `rgb(${number}% ${number}% ${number}% / ${number}%)` | `rgba(${number}, ${number}, ${number})` | `rgba(${number}%, ${number}%, ${number}%)` | `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number}%)` | `rgba(${number}%, ${number}%, ${number}%, ${number})` | `rgba(${number}%, ${number}%, ${number}%, ${number}%)` | `rgba(${number} ${number} ${number})` | `rgba(${number}% ${number}% ${number}%)` | `rgba(${number} ${number} ${number} / ${number})` | `rgba(${number} ${number} ${number} / ${number}%)` | `rgba(${number}% ${number}% ${number}% / ${number})` | `rgba(${number}% ${number}% ${number}% / ${number}%)`;
export declare type ColorKeyword = 'currentColor' | 'inherit' | 'transparent';
export declare type ColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export declare type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type CssFontWeight = 'bold' | 'bolder' | 'lighter' | 'normal';
export declare type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
export declare type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible';
export declare type Percent = `${number}%`;
export declare type Px = `${number}px`;
export declare type Rem = `${number}rem`;
export declare type TextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';
export declare type Vh = `${number}vh`;
export declare type Vw = `${number}vw`;
export declare type WordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type CssColor = ColorCode | ColorKeyword | ColorName;
export declare type AbsoluteSize = Px | Rem | Vh | Vw;
export declare type Size = Percent | AbsoluteSize | 'fit-content';
export declare type CssLineHeight = 'normal' | Percent | number;
export declare type ThemeSize = '8xs' | '7xs' | '6xs' | '5xs' | '4xs' | '3xs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export declare type BaseFlexElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BorderRadius = ThemeSize;
export declare type BorderWidth = ThemeSize;
export declare type ThemeColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'warning' | 'error' | 'header' | 'footer' | 'modal' | 'primaryText' | 'secondaryText' | 'tertiaryText' | 'quaternaryText' | 'quinaryText' | 'senaryText' | 'warningText' | 'errorText' | 'headerText' | 'footerText' | 'modalText' | 'primaryBackground' | 'secondaryBackground' | 'tertiaryBackground' | 'quaternaryBackground' | 'quinaryBackground' | 'senaryBackground' | 'warningBackground' | 'errorBackground' | 'headerBackground' | 'footerBackground' | 'modalBackground' | 'onPrimary' | 'onSecondary' | 'onTertiary' | 'onQuaternary' | 'onQuinary' | 'onSenary' | 'onWarning' | 'onError' | 'onHeader' | 'onFooter' | 'onModal' | 'primaryBorder' | 'secondaryBorder' | 'tertiaryBorder' | 'quaternaryBorder' | 'quinaryBorder' | 'senaryBorder' | 'warningBorder' | 'errorBorder' | 'headerBorder' | 'footerBorder' | 'modalBorder';
export declare type Color = ThemeColor | CssColor;
export declare type Distance = ThemeSize;
export declare type FlipDirection = 'flip' | 'flip-reverse' | 'reverse';
export declare type FontFamily = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'warning' | 'error' | 'header' | 'footer' | 'modal';
export declare type FontSize = ThemeSize;
export declare type FontStyle = 'italic' | 'normal';
export declare type FontWeight = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black' | 'extraBlack';
export declare type Height = ThemeSize;
export declare type LineHeight = ThemeSize;
export declare type StyleElement = 'b' | 'cite' | 'code' | 'em' | 'i' | 'kbd' | 'mark' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'u' | 'var';
export declare type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare type ViewportThreshold = ThemeSize;
export declare type Width = ThemeSize;
export interface EasyFlexTheme {
    border: {
        radius: Record<ThemeSize, AbsoluteSize>;
        width: Record<ThemeSize, AbsoluteSize>;
    };
    color: Record<ThemeColor, CssColor>;
    distance: Record<ThemeSize, AbsoluteSize>;
    font: {
        family: Record<FontFamily, string>;
        lineHeight: Record<ThemeSize, CssLineHeight>;
        size: Record<ThemeSize, Size>;
        weight: Record<FontWeight, CssFontWeight | number>;
    };
    modal: {
        backgroundColor: CssColor;
        blur: AbsoluteSize;
        blurElementId: string;
        containerElementId: string;
    };
    size: {
        height: Record<ThemeSize, AbsoluteSize>;
        width: Record<ThemeSize, AbsoluteSize>;
    };
    viewport: {
        fallbackThreshold: number;
        threshold: Record<ThemeSize, number>;
    };
}
export declare type PartialEasyFlexTheme = DeepPartial<EasyFlexTheme>;
