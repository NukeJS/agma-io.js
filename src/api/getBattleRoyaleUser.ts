import { API } from '../constants';

import { BattleRoyaleUser } from '../models'

const getBattleRoyaleUser = async (username: string): Promise<BattleRoyaleUser> => {
  const { data } = await API.get("/royale_stats.php", {
    params: {
      user: username,
    },
  });

  if (data === 'noUser') {
    throw new Error(`User with username ${username} does not exist or they haven't played Battle Royale yet.`);
  }

  return new BattleRoyaleUser({ ...data, username })
};

export default getBattleRoyaleUser;