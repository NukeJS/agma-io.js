import axios from "axios";

import { API } from "../constants";

import { LevelsLeaderboardUser } from "../models";

const getLevelsLeaderboard = async (): Promise<LevelsLeaderboardUser[]> => {
  const pages = await axios.all([
    API.get("/php_hscores_file.php", { params: { type: 2, page: 1 } }),
    API.get("/php_hscores_file.php", { params: { type: 2, page: 6 } }),
    API.get("/php_hscores_file.php", { params: { type: 2, page: 21 } }),
  ]);

  const data = pages.reduce((acc, { data }) => acc.concat(data), []);
  return data.map((user: any) => new LevelsLeaderboardUser(user));
};

export default getLevelsLeaderboard;
