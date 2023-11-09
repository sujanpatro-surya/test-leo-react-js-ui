import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ThemeConfig } from "@surya-digital/leo-reactjs-material-ui";
import { darkColorPalette } from "./theme/color-palette/darkColorPalette";
import { lightColorPalette } from "./theme/color-palette/lightColorPalette";
import { typographyStyles } from "./theme/typography/typographyStyles";

export default function App() {
  return (
    <ThemeConfig
      theme="light"
      baseColorTokens={[
        { name: "light", colorTokens: lightColorPalette },
        { name: "dark", colorTokens: darkColorPalette },
      ]}
      typography={typographyStyles}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeConfig>
  );
}
