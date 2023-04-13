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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getConfig = void 0;
var fs = require("fs");
var types_1 = require("../types");
var minimist = require("minimist");
var getFileConfig_1 = require("./getFileConfig");
var configSchema_1 = require("./configSchema");
var getSchemaFilePath_1 = require("./getSchemaFilePath");
function getConfig() {
    return __awaiter(this, void 0, void 0, function () {
        var args, fileConfig, schemaFilePath, testType, schemaSplit, baseFilePath, endDirectory, endPath, resolverName, testEndPath, resolverType, resolverFilePath, resolverTestFilePath, resolverE2ETestFilePath, authorizerFilePath, exists, file, config;
        return __generator(this, function (_a) {
            args = minimist(process.argv.slice(2));
            fileConfig = (0, getFileConfig_1.getFileConfig)();
            schemaFilePath = (0, getSchemaFilePath_1.getSchemaFilePath)(fileConfig.baseFilePath, args.resolver.trim());
            testType = fileConfig.testType;
            schemaSplit = schemaFilePath.split('/schemas/');
            if ((schemaSplit === null || schemaSplit === void 0 ? void 0 : schemaSplit.length) !== 2) {
                throw new Error('Invalid schema path. /schemas/ is not unary.');
            }
            if (!schemaSplit[1].endsWith('/schema.graphql')) {
                throw new Error('Invalid schema path. schema is not schema.graphql');
            }
            baseFilePath = schemaSplit[0];
            endDirectory = schemaSplit[1].replace(/\/schema.graphql$/, '');
            endPath = "".concat(endDirectory, "/index.ts");
            resolverName = endDirectory.split('/')[endDirectory.split('/').length - 1];
            testEndPath = schemaSplit[1].replace(/\/schema.graphql$/, "/index.".concat(testType, ".ts"));
            resolverType = endPath.startsWith('mutations')
                ? types_1.ResolverType.Mutation
                : endPath.startsWith('queries')
                    ? types_1.ResolverType.Query
                    : types_1.ResolverType.Unknown;
            resolverFilePath = "".concat(baseFilePath, "/resolvers/").concat(endPath);
            resolverTestFilePath = "".concat(baseFilePath, "/resolvers/").concat(testEndPath);
            resolverE2ETestFilePath = "".concat(baseFilePath, "/testing/e2eTests/").concat(testEndPath);
            authorizerFilePath = "".concat(baseFilePath, "/authorizers/").concat(endPath);
            exists = fs.existsSync(schemaFilePath);
            if (!exists) {
                throw new Error("".concat(schemaFilePath, " does not exist."));
            }
            file = fs.readFileSync(schemaFilePath).toString();
            // TODO (Orange): figure out a better way to do this (or at least add validation on only one export)
            if (!file.toLowerCase().includes(resolverType.toLowerCase())) {
                throw new Error("Invalid schema file. ".concat(resolverType, " is not contained in resolverType directory."));
            }
            if (!file.includes(resolverName)) {
                throw new Error("Invalid schema file. ".concat(resolverName, " is not contained in schema file."));
            }
            config = __assign(__assign({}, fileConfig), { 
                // We override this to be the container for the schema directory.
                baseFilePath: baseFilePath, resolverFilePath: resolverFilePath, resolverTestFilePath: resolverTestFilePath, resolverE2ETestFilePath: resolverE2ETestFilePath, authorizerFilePath: authorizerFilePath, resolverType: resolverType, resolverName: resolverName, schemaFilePath: schemaFilePath });
            configSchema_1.configSchema.validateSync(config);
            return [2 /*return*/, config];
        });
    });
}
exports.getConfig = getConfig;
