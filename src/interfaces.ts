export enum TimePeriod {
  Day,
  Month
}

export type Country = {
  name: string;
  isoId: string;
} | null;

export enum Category {
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
  country: string | null;
  timePeriod: TimePeriod | null;
  data: Statistics;
};

export type Statistics = {
  country: string;
  data: Array<CategoryStatistics>;
};

export type HappyMoment = {
  text: string;
  category: Category;
};
export type HappyMoments = {
  total: number;
  data: Array<HappyMoment>;
} | null;
