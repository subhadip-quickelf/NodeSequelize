"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app_1 = __importDefault(require("./app"));
try {
    promise_1.default.createConnection({});
}
catch (_) { }
exports.handler = (0, serverless_http_1.default)(app_1.default);
