"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderStyle = exports.useBorderStyleProps = exports.useBorder = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var color_1 = require("./color");
var useBorder = function (_a) {
    var borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedBorderColor = (0, color_1.useColor)(borderColor);
    var processedBorderRadius = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(borderRadius, function (borderRadius) { return (0, base_1.getBorderRadius)(theme, borderRadius); }); }, [borderRadius, theme]);
    var processedBorderStyle = (0, react_1.useMemo)(function () {
        var _a;
        return (borderStyle !== false && borderStyle !== undefined) || (borderWidth !== false && borderWidth !== undefined)
            ? (_a = (0, base_1.defalsify)(borderStyle)) !== null && _a !== void 0 ? _a : theme.border.defaultStyle
            : undefined;
    }, [borderStyle, borderWidth, theme]);
    var processedBorderWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(borderWidth, function (borderWidth) { return (0, base_1.getBorderWidth)(theme, borderWidth); }); }, [borderWidth, theme]);
    return (0, react_1.useMemo)(function () { return ({
        color: processedBorderColor,
        radius: processedBorderRadius,
        style: processedBorderStyle,
        width: processedBorderWidth,
    }); }, [processedBorderColor, processedBorderRadius, processedBorderStyle, processedBorderWidth]);
};
exports.useBorder = useBorder;
var useBorderStyleProps = function (props) {
    var border = (0, exports.useBorder)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-border-color': border.color,
        'data-border-radius': border.radius,
        'data-border-style': border.style,
        'data-border-width': border.width,
    }); }, [border]);
};
exports.useBorderStyleProps = useBorderStyleProps;
exports.borderStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tborder-color: ", ";\n\tborder-radius: ", ";\n\tborder-style: ", ";\n\tborder-width: ", ";\n"], ["\n\tborder-color: ", ";\n\tborder-radius: ", ";\n\tborder-style: ", ";\n\tborder-width: ", ";\n"])), function (_a) {
    var borderColor = _a["data-border-color"];
    return borderColor;
}, function (_a) {
    var borderRadius = _a["data-border-radius"];
    return borderRadius;
}, function (_a) {
    var borderStyle = _a["data-border-style"];
    return borderStyle;
}, function (_a) {
    var borderWidth = _a["data-border-width"];
    return borderWidth;
});
var templateObject_1;
