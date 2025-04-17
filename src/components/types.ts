export interface IDataTagItem {
    value: string;
    count: number;
}
  
export interface IDataTrafficItem {
    value: string;
    count: number;
}
  
export interface IDataSnippetNews {
    ID: number;
    TI: string;
    AB: string;
    URL: string;
    DOM: string;
    DP: string;
    LANG: string;
    REACH: number;
    KW: IDataTagItem[];
    AU: string[];
    CNTR: string;
    CNTR_CODE: string;
    SENT: 'positive' | 'negative' | 'neutral';
    TRAFFIC: IDataTrafficItem[];
    FAV: string;
    HIGHLIGHTS: string[];
}
  
export interface SnippetNewsProps {
    data: IDataSnippetNews;
}