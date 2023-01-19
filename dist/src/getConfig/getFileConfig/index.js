"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getFileConfig = void 0;
var fs = require("fs");
var configFilePath = '.gqlScaffold.json';
var defaultFileConfig = {
    beforeCommands: [],
    afterCommands: [],
    baseFilePath: '.',
    testType: 'spec'
};
function getFileConfig() {
    var _a;
    var exists = fs.existsSync(configFilePath);
    if (!exists) {
        return defaultFileConfig;
    }
    var overrides = JSON.parse(fs.readFileSync(configFilePath).toString());
    if ((_a = overrides.baseFilePath) === null || _a === void 0 ? void 0 : _a.endsWith('/')) {
        overrides.baseFilePath = overrides.baseFilePath.replace(/\/$/, '');
    }
    return __assign(__assign({}, defaultFileConfig), overrides);
}
exports.getFileConfig = getFileConfig;
