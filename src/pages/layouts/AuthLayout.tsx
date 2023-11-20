import { Box, Link, Stack } from "@mui/material";
import {
  TextInputField,
  PasswordInputField,
  Button,
} from "@surya-digital/leo-reactjs-material-ui";
import { ReactElement, useState } from "react";
import { typographyStyles } from "../../theme/typography/typographyStyles";
import { lightColorPalette } from "../../theme/color-palette/lightColorPalette";

const AuthLayout = (): ReactElement => {
  const [authSelection, setAuthSelection] = useState<authType>("SignIn");
  const fieldWidth = "360px";
  const contentPadding = "32px";
  const fieldStyle = { width: fieldWidth };

  const getAuthTypeText = (reverse: boolean = false): string => {
    let isSignIn: Boolean = authSelection === "SignIn";
    if (reverse) isSignIn = !isSignIn;
    return isSignIn ? "Sign In" : "Sign Up";
  };

  const AuthLayoutHeader = (): ReactElement => {
    return <Box sx={typographyStyles.h5}>{getAuthTypeText()}</Box>;
  };

  const ConfirmPasswordConditionalField = (): ReactElement => {
    const [confirmPassword, setConfirmPassword] = useState("");
    return authSelection === "SignUp" ? (
      <PasswordInputField
        name="Confirm Password Field"
        value={confirmPassword}
        onTextChange={setConfirmPassword}
        label="Confirm Password"
        style={fieldStyle}
      />
    ) : (
      <></>
    );
  };

  const AuthFields = (): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <Stack spacing="16px">
        <TextInputField
          name="Email Field"
          value={email}
          type="email"
          onTextChange={(value): void => setEmail(value)}
          label="Email"
          style={fieldStyle}
        />
        <PasswordInputField
          name="Password Field"
          value={password}
          onTextChange={setPassword}
          label="Password"
          style={{ ...fieldStyle, maskType: "luminance" }}
        />
        <ConfirmPasswordConditionalField />
      </Stack>
    );
  };

  const AuthSubmitButton = (): ReactElement => {
    return (
      <Button
        name="Sign Up Button"
        title={getAuthTypeText()}
        size="medium"
        variant={"filled"}
        style={fieldStyle}
        onClick={(): void => {}}
      />
    );
  };

  const AuthLayoutFooter = (): ReactElement => {
    const prefixText = (
      <Box sx={typographyStyles.body3} display={"inline"}>
        {authSelection === "SignUp"
          ? "Already have an account?"
          : "Don't have an account?"}
      </Box>
    );
    const suffixTextButton = (
      // <Button
      //   name={""}
      //   title={getAuthTypeText()}
      //   size={"small"}
      //   variant="plain-color"
      //   onClick={(): void => {}}
      //   style={{
      //     padding: "0px",
      //     height: "0px",
      //   }}
      // />
      <Link
        underline="none"
        color={lightColorPalette.primary[400]}
        style={{ ...typographyStyles.button3, cursor: "pointer" }}
        onClick={() => {
          setAuthSelection(authSelection === "SignUp" ? "SignIn" : "SignUp");
        }}
      >
        {getAuthTypeText(true)}
      </Link>
    );
    return (
      <>
        <Box>
          {prefixText}
          &nbsp;
          {suffixTextButton}
        </Box>
      </>
    );
  };

  return (
    <Stack
      spacing={contentPadding}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="45%"
    >
      <AuthLayoutHeader />
      <AuthFields />
      <AuthSubmitButton />
      <AuthLayoutFooter />
    </Stack>
  );
};

type authType = "SignUp" | "SignIn";
interface authLayoutProps {
  authType: authType;
}
export default AuthLayout;
