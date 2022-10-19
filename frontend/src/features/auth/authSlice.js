import {createSlice, createAsyncThunk} from "react-redux"
import authService from "./authService"


const user = JSON.parse(localStorage.getItem("user"))


const initialState = {
  user: user ? user: null,
  isError: false, 
  isSuccess: false, 
  isLoading: false, 
  message: ""
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


export const authSlice = createSlice({
  name: "auth", 
  initialState, 
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ""
},
},
  extraReducers: () => {

},})

export const {reset} = authSlice.actions
export default authSlice.reducer