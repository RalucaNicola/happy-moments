export enum TimePeriod {
  Day,
  Month
}

enum Category {
  achievement,
  affection,
  leisure,
  bonding,
  nature,
  exercise,
  enjoy_the_moment
}

type CategoryStatistics = {
  category: Category;
  counts: number;
  percentage?: number;
  text?: number;
};

export type CachedStatistic = {
  country: string;
  timePeriod: TimePeriod | null;
  data: Statistics;
};

export type Statistics = Array<CategoryStatistics>;
