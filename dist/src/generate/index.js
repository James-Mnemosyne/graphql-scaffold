'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
exports.generate = void 0;
var runBeforeCommands_1 = require('../commands/runBeforeCommands');
var runAfterCommands_1 = require('../commands/runAfterCommands');
var generateAuthorizer_1 = require('./generateAuthorizer');
var generateResolver_1 = require('./generateResolver');
var generateResolverTestFile_1 = require('./generateResolverTestFile');
var generateE2ETestFile_1 = require('./generateE2ETestFile');
var generateTypes_1 = require('./generateTypes');
function generate(config) {
  return __awaiter(this, void 0, void 0, function () {
    var fixture;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log('Starting.');
          console.log('Running before commands.');
          return [4 /*yield*/, (0, runBeforeCommands_1.runBeforeCommands)(config)];
        case 1:
          _a.sent();
          console.log('Before commands complete.');
          (0, generateAuthorizer_1.generateAuthorizer)(config);
          console.log('Generated authorizer file in '.concat(config.authorizerFilePath, '.'));
          (0, generateResolver_1.generateResolver)(config);
          console.log('Generated resolver file in '.concat(config.resolverFilePath, '.'));
          return [4 /*yield*/, (0, generateTypes_1.generateFixture)(config)];
        case 2:
          fixture = _a.sent();
          console.log('Generated fixture for tests.');
          (0, generateResolverTestFile_1.generateResolverTestFile)(config, fixture);
          console.log('Generated resolver test file in '.concat(config.resolverTestFilePath, '.'));
          (0, generateE2ETestFile_1.generateE2ETestFile)(config, fixture);
          console.log('Generated e2e test file in '.concat(config.resolverE2ETestFilePath, '.'));
          console.log('Running after commands.');
          return [4 /*yield*/, (0, runAfterCommands_1.runAfterCommands)(config)];
        case 3:
          _a.sent();
          console.log('After commands complete.');
          console.log('Finished.');
          return [2 /*return*/];
      }
    });
  });
}
exports.generate = generate;
