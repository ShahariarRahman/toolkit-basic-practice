## Toolkit Basic Practice
### folder structure in src
* app :
* * store.js
* features :
* * counter > counterSlice.js
### store.js
* import > configureStore
* configureStore({})
* *  devTools: true,
* *  reducer:{},
* * * counter : counterSlice,
* export
* *  store
### counterSlice.js 
* import > createSlice 
* initialState={};
* createSlice({});
* * name="",
* * initialState,
* * reducers:{},
* * * increment:(state,action)=>{},
* * * decrement:(state,action)=>{},
* export
* *  export counterSlice.reducer
* *  export const{increment,decrement} =  counterSlice.actions

### index.js
* wrap by provider
* send the store as props

### Counter.js/component
* onClick(()=>{})
* * dispatch(increment())
* * dispatch(decrement())
* show data by using useSelector() hook


