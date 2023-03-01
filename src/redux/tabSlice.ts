import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

type StateType = string[];

const tabSlice = createSlice({
  name: 'tabSlice',
  initialState: [] as StateType,
  reducers: {
    addTab: (state: StateType, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeTab: (state: StateType, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

export default tabSlice.reducer;
export const { addTab, removeTab } = tabSlice.actions;
