import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import "./App.css";
import { GroceryView } from "./view/GroceryView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GroceryView />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
