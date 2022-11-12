import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.get('/users/signup', credentials);
    return data;
  } catch (error) {}
});
export const authOperations = { register };
