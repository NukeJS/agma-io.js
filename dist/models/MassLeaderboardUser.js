"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MassLeaderboardUser {
    constructor(data) {
        this.username = data.username;
        this.memberType = Number(data.memberType);
        this.moderatorType = Number(data.moderatorType);
        this.donatorType = Number(data.dntn);
        this.date = new Date(data.date);
        this.score = Number(data.score);
        this.serverName = data.serverName;
    }
}
exports.default = MassLeaderboardUser;
