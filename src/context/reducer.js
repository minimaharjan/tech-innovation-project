export const initialState = {
    loading:false,
    error:false,
    errorMessages:'',
    modeOption: "",
    // showModeModal: false,
    
};



const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SETMODE':
      return { 
        ...state, 
        modeOption:action.payload,
        // showModeModal: action.showModeModal, 
    };
    
    default:
      return state;
  }
};

export default reducer;