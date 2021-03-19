"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LevelsLeaderboardUser {
    constructor(data) {
        this.username = data.username;
        this.memberType = Number(data.memberType);
        this.moderatorType = Number(data.moderatorType);
        this.donatorType = Number(data.dntn);
        this.level = Number(data.level);
    }
}
exports.default = LevelsLeaderboardUser;
