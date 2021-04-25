class BattleRoyaleUser {
  username: string;
  matches: {
    total: number;
    daily: number;
    weekly: number;
  };
  wins: number;
  points: {
    total: number;
    daily: number;
    weekly: number;
  };
  kills: {
    total: number;
    daily: number;
    weekly: number;
  };
  saveDate: Date;
  nowDate: Date;
  foodConsumed: number;
  playersConsumed: number;
  virusesConsumed: number;
  mothercellsConsumed: number;
  splitsCount: number;
  deathsCount: number;
  totalAliveTime: number;
  level: number;
  memberType: number;

  constructor(data: any) {
    this.username = data.username;
    this.matches = {
      total: Number(data.matches),
      daily: Number(data.daily_matches),
      weekly: Number(data.weekly_matches)
    };
    this.wins = Number(data.wins);
    this.points = {
      total: Number(data.points),
      daily: Number(data.daily_points),
      weekly: Number(data.weekly_points)
    };
    this.kills = {
      total: Number(data.kills),
      daily: Number(data.daily_kills),
      weekly: Number(data.weekly_kills)
    };
    this.saveDate = new Date(data.save_date);
    this.nowDate = new Date(data.date_now);
    this.foodConsumed = Number(data.food_consumed);
    this.playersConsumed = Number(data.players_consumed);
    this.virusesConsumed = Number(data.viruses_consumed);
    this.mothercellsConsumed = Number(data.mothercells_consumed);
    this.splitsCount = Number(data.splits_count);
    this.deathsCount = Number(data.death_count);
    this.totalAliveTime = Number(data.total_time_alive);
    this.level = Number(data.level);
    this.memberType = Number(data.member_type);
  }
}

export default BattleRoyaleUser;
