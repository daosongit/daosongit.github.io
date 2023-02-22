import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchGitHubUser from './api/github-api';
import { IFetchGitHubUserResponce } from './api/types';

export const fetchGitData = createAsyncThunk('git/gitHubUser', async () => {
  try {
    const response = await fetchGitHubUser();
    return response;
  } catch (error) {
    return null;
  }
});

const initialState = {
  data: {
    pinned: {},
    totalContribution: 0,
    languagesUsage: [{}],
  } as IFetchGitHubUserResponce | null,
};

const gitSlice = createSlice({
  name: 'git',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGitData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default gitSlice.reducer;
