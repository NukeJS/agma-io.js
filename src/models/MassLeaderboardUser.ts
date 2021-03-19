class MassLeaderboardUser {
  username: number;
  memberType: number;
  moderatorType: number;
  donatorType: number;
  date: Date;
  score: number;
  serverName: string;

  constructor(data: any) {
    this.username = data.username;
    this.memberType = Number(data.memberType);
    this.moderatorType = Number(data.moderatorType);
    this.donatorType = Number(data.dntn);
    this.date = new Date(data.date);
    this.score = Number(data.score);
    this.serverName = data.serverName;
  }
}

export default MassLeaderboardUser;