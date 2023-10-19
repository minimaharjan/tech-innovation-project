export const initialState = {
    loading:false,
    error:false,
    errorMessages:'',
    modeOption: "",
    showModeModal: false,
    showParameterModal:false,
    tabOption:"files",
    
};



const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SETMODE':
      return { 
        ...state, 
        modeOption:action.payload.modeOption,
        showModeModal: action.payload.showModeModal, 
    };
    case 'SETPARAMETER':
      return { 
        ...state, 
        showParameterModal: action.payload.showParameterModal, 
    };
    case 'SETTABOPTION':
      return { 
        ...state, 
        tabOption: action.payload.tabOption, 
    };
    
    default:
      return state;
  }
};

export default reducer;