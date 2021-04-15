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
const getMassLeaderboard = (serverId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield constants_1.API.get("/php_hscores_file.php", {
        params: {
            type: 1,
            page: serverId,
        },
    });
    return data.map((user) => new models_1.MassLeaderboardUser(user));
});
exports.default = getMassLeaderboard;
