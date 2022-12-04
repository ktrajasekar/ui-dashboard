// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    peopleData: []
};

// ==============================|| SLICE - MENU ||============================== //

const api = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        savePeopleData(state, action) {
            state.peopleData = action.payload;
            console.log('Reducer Value', state.peopleData);
        }
    }
});

export default api.reducer;

export const { savePeopleData } = api.actions;
