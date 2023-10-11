import {
    AppState,
    initialAppState,
    userDetail,
  } from "@/context/states/appState";
  import {
    
    SetOTP,
    
    
  } from "@/context/actions/appActions";
  import { Color } from "@material-ui/lab/Alert";
  import { boolean } from "yup/lib/locale";
  
  const appReducer = (state: AppState, action: AppActions): AppState => {
    switch (action.type) {

      case ActionType.SetOTP:
        return {
          ...state,
          otp: { message: action.payload.message },
        };
      
        default:
        return state;
    }
  };
  
  // helper functions to simplify the caller
  
  export const setOTP = (message: string): SetOTP => ({
    type: ActionType.SetOTP,
    payload: { message },
  });
  
  export default appReducer;
  