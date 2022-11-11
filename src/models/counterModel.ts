import { defineModel } from 'foca';

export const counterModel = defineModel('counter', {
  initialState: { count: 0 },
  reducers: {
    plus(state, value: number, scale: number = 1) {
      state.count += value * scale;
    },
    minus(state, value: number) {
      state.count -= value;
    },
  },
  computed: {
    double() {
      return this.state.count * 2;
    },
  },
});
