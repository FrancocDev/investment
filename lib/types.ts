export interface Platform {
    platform: string
    currency: string
    APY: number
    price?: number
  }

 export interface CriptoYa {
    ask:      number;
    totalAsk: number;
    bid:      number;
    totalBid: number;
    time:     number;
}

export type InvestmentState = {
  investment: number;
  setInvestment: (investment: number) => void;
};