"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class Server {
    constructor(data) {
        this.id = Number(data.serverId);
        this.name = data.serverName;
        this.region = constants_1.availableRegions[parseInt(data.serverLocation)];
        this.online = Boolean(Number(data.active));
    }
}
exports.default = Server;
