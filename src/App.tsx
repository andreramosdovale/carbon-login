import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import Login from "./pages/login"
import useToggleTheme from "./hooks/useToggleTheme";
import CustomHeader from "./components/CustomHeader";

function App() {
  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <CustomHeader />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;