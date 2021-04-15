import { MassLeaderboardUser } from "../models";
declare const getMassLeaderboard: (serverId: number) => Promise<MassLeaderboardUser[]>;
export default getMassLeaderboard;
