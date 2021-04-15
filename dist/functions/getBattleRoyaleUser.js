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
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const models_1 = require("../models");
const getBattleRoyaleUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    if (!username || !username.length) {
        throw new TypeError(`Expected username, but didn't get.`);
    }
    const { data } = yield constants_1.API.get("/royale_stats.php", {
        params: {
            user: username,
        },
    });
    if (data === "noUser") {
        throw new Error(`User with username ${username} does not exist or they haven't played Battle Royale yet.`);
    }
    return new models_1.BattleRoyaleUser(Object.assign(Object.assign({}, data), { username }));
});
exports.default = getBattleRoyaleUser;
