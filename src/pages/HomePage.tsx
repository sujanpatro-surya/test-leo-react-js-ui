import { ReactElement } from "react";
import logo from "../logo.svg";
import AuthLayout from "./common/AuthLayout";

export const HomePage = (): ReactElement => {
  return (
    <div className="App">
      <div className="Logo-section">
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <AuthLayout authType="SignUp" />
    </div>
  );
};
