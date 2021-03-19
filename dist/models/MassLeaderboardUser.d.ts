declare class MassLeaderboardUser {
    username: number;
    memberType: number;
    moderatorType: number;
    donatorType: number;
    date: Date;
    score: number;
    serverName: string;
    constructor(data: any);
}
export default MassLeaderboardUser;
