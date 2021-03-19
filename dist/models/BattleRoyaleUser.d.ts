declare class BattleRoyaleUser {
    username: string;
    matches: number;
    wins: number;
    points: number;
    kills: number;
    dailyMatches: number;
    dailyWins: number;
    dailyPoints: number;
    dailyKills: number;
    weeklyMatches: number;
    weeklyPoints: number;
    weeklyKills: number;
    saveDate: Date;
    nowDate: Date;
    foodConsumed: number;
    playersConsumed: number;
    virusesConsumed: number;
    mothercellsConsumed: number;
    splitsCount: number;
    deathsCount: number;
    totalAliveTime: number;
    level: number;
    memberType: number;
    constructor(data: any);
}
export default BattleRoyaleUser;
