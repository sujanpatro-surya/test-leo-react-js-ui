import { Box, Link, Stack } from "@mui/material";
import {
  TextInputField,
  PasswordInputField,
  Button,
} from "@surya-digital/leo-reactjs-material-ui";
import { ReactElement, useState } from "react";
import { typographyStyles } from "../../theme/typography/typographyStyles";
import { lightColorPalette } from "../../theme/color-palette/lightColorPalette";

const AuthLayout = ({ authType }: authLayoutProps): ReactElement => {
  const fieldWidth = "360px";
  const contentPadding = "32px";
  const fieldStyle = { width: fieldWidth };

  const getAuthTypeText = (reverse: boolean = false): string => {
    let isSignIn: Boolean = authType === "SignIn";
    if (reverse) isSignIn = !isSignIn;
    return isSignIn ? "Sign In" : "Sign Up";
  };

  const AuthLayoutHeader = (): ReactElement => {
    return <Box sx={typographyStyles.h5}>{getAuthTypeText()}</Box>;
  };

  const ConfirmPasswordConditionalField = (): ReactElement => {
    const [confirmPassword, setConfirmPassword] = useState("");
    return authType === "SignUp" ? (
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
    const prefixText =
      authType === "SignUp"
        ? "Already have an account?"
        : "Don't have an account?";
    const SuffixTextButton = (
      <Link
        href=""
        underline="none"
        color={lightColorPalette.primary[400]}
        style={typographyStyles.button3}
      >
        {getAuthTypeText(true)}
      </Link>
    );
    return (
      <>
        <Box sx={typographyStyles.body3}>
          {prefixText}
          &nbsp;
          {SuffixTextButton}
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