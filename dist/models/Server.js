"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.region = data.region;
        this.online = data.online;
    }
}
exports.default = Server;
