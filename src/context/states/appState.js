
import { SetChangeTransactionPassword } from "../actions/appActions";

export interface AppState {
  otp: OTP;
  
}


export interface OTP {
  message: string;
}

export const initialAppState: AppState = {
  
  otp: {
    message: "OTP has not been generated yet",
  },
  
};
