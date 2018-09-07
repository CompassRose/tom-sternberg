export interface IFilter {
    key: string;
    values: string[];
}
export interface NamedFilter {
    filters: IFilter[];
}

export interface IChartMargin {
    top: number;
    bottom: number;
    right: number;
    left: number;
}
