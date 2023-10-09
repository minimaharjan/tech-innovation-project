export const initialState = {
    loading:false,
    error:false,
    errorMessages:'',
    modeOption: "",
    
};

export const actions = {

}

const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SETSIMULATION':
      return { ...state, modeOption: 'option1' };
    
    default:
      return state;
  }
};

export default reducer;