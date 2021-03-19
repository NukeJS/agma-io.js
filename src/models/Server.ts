import { regions } from '../constants';

class Server {
  id: number;
  name: string;
  region: string;
  online: boolean;

  constructor(data: any) {
    this.id = Number(data.serverId);
    this.name = data.serverName;
    this.region = regions[parseInt(data.serverLocation)];
    this.online = Boolean(Number(data.active));
  }
}

export default Server;