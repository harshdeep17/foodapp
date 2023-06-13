import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addItem } from './cartAPI'

const initialState = {
  foods: [],
  status: false,
}

export const addItemAsync = createAsyncThunk(
    'cart/additem',
    async (foodProduct) => {
      const {data} = await addItem("", foodProduct);
      return data;
    }
)
  
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.pending, (state) => {
        state.status = false;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = true;
        state.foods = action.payload;
      })
  },
})

// export const {  } = foodSlice.actions

export default cartSlice.reducer

