import { API } from "../constants";

import { MassLeaderboardUser } from "../models";

async function getMassLeaderboard(
  serverId: number
): Promise<MassLeaderboardUser[]> {
  const { data } = await API.get("/php_hscores_file.php", {
    params: {
      type: 1,
      page: serverId,
    },
  });

  return data.map((user: any) => new MassLeaderboardUser(user));
}

export default getMassLeaderboard;
