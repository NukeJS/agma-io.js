import { API } from "../constants";

import { Region } from "../types";
import { Server } from "../models";
import { availableRegions } from "../constants";

async function getServers(region?: Region): Promise<Server[]> {
  const { data } = await API.get("https://agma.io/php_hscores_file.php", {
    params: {
      type: 3,
    },
  });

  if (region) {
    return data
      .filter((server: any) =>
        availableRegions[parseInt(server.serverLocation)] == region
          ? server
          : null
      )
      .map((server: any) => new Server(server));
  } else {
    return data.map((server: any) => new Server(server));
  }
}

export default getServers;
