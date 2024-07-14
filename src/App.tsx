import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { GroceryTable } from "./components/GroceryTable";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GroceryTable />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
