import { createContext, useContext, useMemo, useState } from "react";
import { getTheme } from "./theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ initialMode = "light", children }) {
  const [mode, setMode] = useState(initialMode);

  const value = useMemo(() => {
    const theme = getTheme(mode);
    return {
      mode,
      theme,
      setMode,
      toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    };
  }, [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
