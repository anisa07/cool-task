import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    text: {
      primary: "#020617",
      secondary: "#71717A",
    },
    divider: "#E2E8F0",
    info: {
      main: "#939BAA",
    },
  },
});
