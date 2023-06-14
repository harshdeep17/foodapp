import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addItem, fetchItem, removeItem, updateItem } from './cartAPI'

const initialState = {
  items: [],
  status: "pending",
}

export const addItemAsync = createAsyncThunk(
    'cart/additem',
    async (cartItem) => {
      const {userId, foodProductId} = cartItem;
      await addItem(userId, foodProductId);
    }
)

export const fetchItemAsync = createAsyncThunk(
    'cart/fetchitem',
    async (userId) => {
    const {data} = await fetchItem(userId);
    return data;
    }
)

export const removeItemAsync = createAsyncThunk(
    'cart/removeitem',
    async ({userId, foodProductId}) => {
    // console.log("before api called",userId, foodProductId);
    await removeItem(userId, foodProductId);
    return foodProductId;
    }
)

export const updateItemAsync = createAsyncThunk(
    'cart/updateitem',
    async ({userId, foodProductId, updatedFoodObject}) => {
      console.log(userId, foodProductId, updatedFoodObject);
    const {data} = await updateItem(userId, foodProductId, updatedFoodObject);
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
        state.status = "pending";
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchItemAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload.cart.items;
      })
      .addCase(removeItemAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item => item.food._id.toString()===action.payload);
        state.items.splice(index, 1); 
      })
      .addCase(updateItemAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item => item.food._id.toString()===action.payload.cart.food._id.toString());
        state.items.splice(index, 1, action.payload.cart); 
      })
  },
})

// export const {  } = foodSlice.actions

export default cartSlice.reducer

