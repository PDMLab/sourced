"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.Entity = exports.SourcedValue = exports.SourcedEntity = void 0;
const entity_1 = __importDefault(require("./entity"));
exports.SourcedEntity = entity_1.default;
const entityProxy_1 = __importDefault(require("./entityProxy"));
exports.Entity = entityProxy_1.default;
const value_1 = __importDefault(require("./value"));
exports.Value = value_1.default;
const SourcedValue = value_1.default;
exports.SourcedValue = SourcedValue;
//# sourceMappingURL=index.js.map