class Server {
  id: number;
  name: string;
  region: string;
  online: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.region = data.region;
    this.online = data.online;
  }
}

export default Server;