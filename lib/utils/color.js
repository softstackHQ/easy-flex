"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorStyle = exports.useColorStyleProps = exports.useDefaultColor = exports.useColor = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useColor = function (color) {
    var theme = (0, base_1.useEasyFlexTheme)();
    return (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(color, function (color) { return (0, base_1.getColor)(theme, color); }); }, [color, theme]);
};
exports.useColor = useColor;
var useDefaultColor = function (color, defaultColor) {
    var theme = (0, base_1.useEasyFlexTheme)();
    return (0, react_1.useMemo)(function () { return (color === false || color === undefined ? defaultColor : (0, base_1.getColor)(theme, color)); }, [color, defaultColor, theme]);
};
exports.useDefaultColor = useDefaultColor;
var useColorStyleProps = function (_a) {
    var backgroundColor = _a.backgroundColor, color = _a.color;
    var processedBackgroundColor = (0, exports.useColor)(backgroundColor);
    var processedColor = (0, exports.useColor)(color);
    return (0, react_1.useMemo)(function () { return ({
        'data-background-color': processedBackgroundColor,
        'data-color': processedColor,
    }); }, [processedBackgroundColor, processedColor]);
};
exports.useColorStyleProps = useColorStyleProps;
exports.colorStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"], ["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var color = _a["data-color"];
    return color;
});
var templateObject_1;
