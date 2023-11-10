import { ReactElement } from "react";
import logo from "../../logo.svg";
import { Box, SvgIcon } from "@mui/material";

export const LogoLayout = (): ReactElement => {
  return (
    <Box
      sx={{
        backgroundColor: "#282c34",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "55%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
    </Box>
  );
};
