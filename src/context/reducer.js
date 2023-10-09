export const initialState = {
    loading:false,
    error:false,
    errorMessages:'',
    modeOption: "",
    
};



const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SETMODE':
      return { 
        ...state, 
        modeOption:action.payload, 
    };
    
    default:
      return state;
  }
};

export default reducer;