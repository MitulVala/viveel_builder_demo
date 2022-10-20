import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenDetails: {
    name: "",
    symbol: "",
    distribution: [],
    chains: []
  },
  tokenResume: ""
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

const tokenSlice = createSlice({
  name: 'manageToken',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.tokenDetails.name = action.payload;
    },
    addSymbol: (state, action) => {
      state.tokenDetails.symbol = action.payload;
    },
    addDistribution: (state, action) => {
      state.tokenDetails.distribution = action.payload;
    },
    addChains: (state, action) => {
      state.tokenDetails.chains = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { addName, addSymbol, addDistribution, addChains } = tokenSlice.actions;
export const getTokenDetails = ({ manageToken }) => manageToken.tokenDetails;
export default tokenSlice.reducer;