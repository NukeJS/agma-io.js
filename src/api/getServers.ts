import { API } from '../constants';

import { Region } from '../types';
import { Server } from '../models';
import { regions } from '../constants';

const getServers = async (region?: Region): Promise<Server[]> => {
  const { data } = await API.get('https://agma.io/php_hscores_file.php', {
    params: {
      type: 3
    }
  });

  if (region) {
    return data.filter((server: any) => regions[parseInt(server.serverLocation)] == region ? server : null).map((server: any) => ({
      id: parseInt(server.serverId),
      name: server.serverName,
      region: regions[parseInt(server.serverLocation)],
      online: Boolean(Number(server.active))
    }))
  } else {
    return data.map((server: any) => ({
      id: parseInt(server.serverId),
      name: server.serverName,
      region: regions[parseInt(server.serverLocation)],
      online: Boolean(Number(server.active))
    }))
  }
}

export default getServers;
