import {
    OTP,
    
  } from "@/context/states/appState";
  
  export enum ActionType {
    
    SetOTP,
      }
  

  
  export interface SetOTP {
    type: ActionType.SetOTP;
    payload: OTP;
  }
  
    
  export type AppActions =
    | SetOTP
    ;
  