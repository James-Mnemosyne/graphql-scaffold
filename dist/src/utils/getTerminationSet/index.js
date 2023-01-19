"use strict";
exports.__esModule = true;
exports.getTerminationSet = void 0;
function getTerminationSet(config) {
    return new Set(["".concat(config.baseFilePath), "".concat(config.baseFilePath, "/resolvers")]);
}
exports.getTerminationSet = getTerminationSet;
