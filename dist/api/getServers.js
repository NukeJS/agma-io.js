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
const constants_2 = require("../constants");
const getServers = (region) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield constants_1.API.get('https://agma.io/php_hscores_file.php', {
        params: {
            type: 3
        }
    });
    if (region) {
        return data.filter((server) => constants_2.regions[parseInt(server.serverLocation)] == region ? server : null).map((server) => ({
            id: parseInt(server.serverId),
            name: server.serverName,
            region: constants_2.regions[parseInt(server.serverLocation)],
            online: Boolean(Number(server.active))
        }));
    }
    else {
        return data.map((server) => ({
            id: parseInt(server.serverId),
            name: server.serverName,
            region: constants_2.regions[parseInt(server.serverLocation)],
            online: Boolean(Number(server.active))
        }));
    }
});
exports.default = getServers;
