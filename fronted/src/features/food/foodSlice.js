import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchfoods } from './foodAPI';

const initialState = {
  foods: [],
  status: false,
}

export const fetchfoodAsync = createAsyncThunk(
    'foods/fetchfoods',
    async (category) => {
      const {data} = await fetchfoods(category);
      return data;
    }
)
  
export const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchfoodAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(fetchfoodAsync.fulfilled, (state, action) => {
        state.status = true;
        state.foods = action.payload;
      })
  },
})

// export const {  } = foodSlice.actions

export default foodSlice.reducer

