import { Platform } from "./types";

export enum YieldTime{
    WEEK = 7,
    MONTH = 30,
    YEAR = 365
}

export const calculateYield = (apy: number, investment: number, time: YieldTime) => {
    return Number((investment + (apy/100 / 365) * investment * time).toFixed(2));
}

export const getPerformance = (platform: Platform, investment: number, time: YieldTime) => {
    const platformPrice = platform.price ?? 1;
    platform.currency === "ARS" ? investment : investment = investment * (1 / platformPrice);
    return calculateYield(platform.APY, investment, time);
}