"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Sandeep Sirohi: Logger.
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.info = function (msg) {
        console.log("%c ".concat(msg), 'color: green');
    };
    Logger.error = function (msg) {
        console.log("%c ".concat(msg), 'color: red');
    };
    Logger.warn = function (msg) {
        console.log("%c ".concat(msg), 'color: black; background: yellow');
    };
    return Logger;
}());
exports.Logger = Logger;
