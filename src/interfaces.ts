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

export type PeriodStatistics = {
  updated: boolean;
  data: Array<CategoryStatistics>;
};

export type Statistics = {
  dayPeriod: PeriodStatistics;
  monthPeriod: PeriodStatistics;
};
