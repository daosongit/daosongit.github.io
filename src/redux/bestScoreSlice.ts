import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

type StateType = { bestScore: number };

const bestScoreSlice = createSlice({
  name: 'tabSlice',
  initialState: { bestScore: 0 } as StateType,
  reducers: {
    setBestScore: (state: StateType, action: PayloadAction<number>) => {
      state.bestScore = action.payload;
    },
  },
});

export default bestScoreSlice.reducer;
export const { setBestScore } = bestScoreSlice.actions;
