export type AppChartType = 'bar' | 'pie' | 'line' | 'single' | 'table';

export interface AppChart {
  title: string;
  key: string;
  id: string;
  chartType: AppChartType;
  chartTypeInit: AppChartType;
  total: string;
  sold: string;
  isPremium: boolean;
  columnData: any[];
  color: string[];
  data: any[];
}
