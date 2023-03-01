import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

type StateType = string[];

const tabSlice = createSlice({
  name: 'tabSlice',
  initialState: ['Portfolio'] as StateType,
  reducers: {
    addTab: (state: StateType, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeTab: (state: StateType, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);
      state.splice(1, index);
    },
  },
});

export default tabSlice.reducer;
export const { addTab, removeTab } = tabSlice.actions;
