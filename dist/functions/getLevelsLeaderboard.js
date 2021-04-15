"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const models_1 = require("../models");
const getLevelsLeaderboard = () => __awaiter(void 0, void 0, void 0, function* () {
    const pages = yield axios_1.default.all([
        constants_1.API.get("/php_hscores_file.php", { params: { type: 2, page: 1 } }),
        constants_1.API.get("/php_hscores_file.php", { params: { type: 2, page: 6 } }),
        constants_1.API.get("/php_hscores_file.php", { params: { type: 2, page: 21 } }),
    ]);
    const data = pages.reduce((acc, { data }) => acc.concat(data), []);
    return data.map((user) => new models_1.LevelsLeaderboardUser(user));
});
exports.default = getLevelsLeaderboard;
