export interface IFilter {
    key: string;
    values: string[];
}
export interface NamedFilter {
    name: string;
    filters: IFilter[];
}

export interface IChartMargin {
    top: number;
    bottom: number;
    right: number;
    left: number;
}
