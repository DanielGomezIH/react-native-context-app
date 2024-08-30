import {create} from 'zustand';

export interface CounterState {
  count: number;
  incrementBy: (value?: number) => void;
  decrementBy: (value?: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  count: 0,

  // incrementBy: (value = 1) => set(state => ({count: state.count + value})),

  // decrementBy: (value = 1) => set(state => ({count: state.count - value})),

  incrementBy: (value = 1) => set({count: get().count + value}),

  decrementBy: (value = 1) => set({count: get().count - value}),

  reset: () => set({count: 0}),
}));
