export const initialState = {
    loading:false,
    error:false,
    errorMessages:'',
};

export const actions = {
    
}
const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    
    
    default:
      return state;
  }
};

export default reducer;