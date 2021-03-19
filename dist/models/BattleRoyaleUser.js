"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleRoyaleUser {
    constructor(data) {
        this.username = data.username;
        this.matches = Number(data.matches);
        this.wins = Number(data.wins);
        this.points = Number(data.points);
        this.kills = Number(data.kills);
        this.dailyMatches = Number(data.daily_matches);
        this.dailyWins = Number(data.daily_wins);
        this.dailyPoints = Number(data.daily_points);
        this.dailyKills = Number(data.daily_kills);
        this.weeklyMatches = Number(data.weekly_matches);
        this.weeklyPoints = Number(data.weekly_points);
        this.weeklyKills = Number(data.weekly_kills);
        this.saveDate = new Date(data.save_date);
        this.nowDate = new Date(data.date_now);
        this.foodConsumed = Number(data.food_consumed);
        this.playersConsumed = Number(data.players_consumed);
        this.virusesConsumed = Number(data.viruses_consumed);
        this.mothercellsConsumed = Number(data.mothercells_consumed);
        this.splitsCount = Number(data.splits_count);
        this.deathsCount = Number(data.death_count);
        this.totalAliveTime = Number(data.total_time_alive);
        this.level = Number(data.level);
        this.memberType = Number(data.member_type);
    }
}
exports.default = BattleRoyaleUser;
