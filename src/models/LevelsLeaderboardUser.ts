class LevelsLeaderboardUser {
  username: number;
  memberType: number;
  moderatorType: number;
  donatorType: number;
  level: Number;

  constructor(data: any) {
    this.username = data.username.replace(" \n", "");
    this.memberType = Number(data.memberType);
    this.moderatorType = Number(data.moderatorType);
    this.donatorType = Number(data.dntn);
    this.level = Number(data.level);
  }
}

export default LevelsLeaderboardUser;
