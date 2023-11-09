import {
  PasswordInputField,
  TextInputField,
} from "@surya-digital/leo-reactjs-material-ui";
import logo from "../logo.svg";
import { ReactElement, useState } from "react";
import { Stack } from "@mui/material";

export const HomePage = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="Logo-section">
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <Stack className="Form-section" spacing={elementPadding}>
        <TextInputField
          name="Email Field"
          value={email}
          type="email"
          onTextChange={setEmail}
          label="Email"
          style={{
            width: fieldWidth,
          }}
        />
        <PasswordInputField
          name="Password Field"
          value={password}
          onTextChange={setPassword}
          label="Password"
          style={{
            width: fieldWidth,
          }}
        />
      </Stack>
    </div>
  );
};

const fieldWidth = "360px";
const elementPadding = "16px";
