export interface SourceModel {
  platform?: any;
  logo?: any;
  logocolor?: any;
  badge?: {
    value?: any;
    color: any;
    direction?: any;
  };
  visitors?: {
    count?: number;
    unit?: string;
  };
}

export interface campaignModel {
  source?: any,
  impression?: any,
  clicks?: any,
  cost?: any,
  conversation?: any
}