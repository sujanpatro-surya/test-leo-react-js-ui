import { ReactElement } from "react";
import AuthLayout from "./layouts/AuthLayout";
import { LogoLayout } from "./layouts/LogoLayout";
import { Box } from "@mui/material";

export const HomePage = (): ReactElement => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <LogoLayout />
      <AuthLayout />
    </Box>
  );
};
