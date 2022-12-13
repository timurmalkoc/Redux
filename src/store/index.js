import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0};
// shorter than redux way
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter+=action.payload;
        }
    }
});


// const counterReducer = (state = { counter: 0}, action) => {
//     if (action.type === "increment"){
//         return {
//             // creating new object over any update cus overwriting immutables may cause some unpredictable errors
//             counter: state.counter + 1
//         };
//     }

//     if (action.type === "increase"){
//         return {
//             counter: state.counter + action.amount
//         };
//     }

//     if (action.type === "decrement"){
//         return {
//             counter: state.counter - 1
//         };
//     }

//     if (action.type === "decrease"){
//         return {
//             counter: state.counter - state.amount
//         };
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// ========= multiple reducers =============== 
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;