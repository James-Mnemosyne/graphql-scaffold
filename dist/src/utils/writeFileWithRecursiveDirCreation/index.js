"use strict";
exports.__esModule = true;
exports.writeFileWithRecursiveDirCreation = void 0;
var fs = require("fs");
function writeFileWithRecursiveDirCreation(filePath, contents) {
    var _a;
    var splitFilePath = filePath.split('/');
    var dirName = ((_a = splitFilePath === null || splitFilePath === void 0 ? void 0 : splitFilePath.slice(0, -1)) !== null && _a !== void 0 ? _a : []).join('/');
    fs.mkdirSync(dirName, { recursive: true });
    fs.writeFileSync(filePath, contents);
}
exports.writeFileWithRecursiveDirCreation = writeFileWithRecursiveDirCreation;
