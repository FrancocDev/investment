import { create } from 'zustand'
import { InvestmentState } from './types'

export const useInvestment = create<InvestmentState>((set) => ({
  investment: 0,
  setInvestment: (investment: number) => set({ investment }),
}))