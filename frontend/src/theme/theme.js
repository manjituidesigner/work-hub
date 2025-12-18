import { colors as baseColors } from "./colors";
import { typography } from "./typography";

const shared = {
  typography,
  radius: {
    sm: 10,
    md: 14,
    lg: 18,
    xl: 24,
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },
};

export const themes = {
  light: {
    ...shared,
    mode: "light",
    colors: {
      ...baseColors,
      background: "#FFFFFF",
      surface: "#FFFFFF",
      text: {
        primary: baseColors.gray[900],
        secondary: baseColors.gray[700],
        muted: "#9CA3AF",
        inverse: "#FFFFFF",
      },
      border: baseColors.gray[200],
      button: {
        primaryBg: baseColors.primary[600],
        primaryBgDisabled: "rgba(37, 99, 235, 0.5)",
        primaryText: "#FFFFFF",
        secondaryBg: "#FFFFFF",
        secondaryText: baseColors.gray[900],
        secondaryBorder: baseColors.gray[200],
      },
    },
    gradient: {
      main: {
        colors: [
          "rgba(214, 235, 255, 1)",
          "rgba(195, 232, 242, 1)",
          "rgba(230, 198, 248, 1)",
        ],
        locations: [0, 0.5, 0.99],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      },
    },
  },
  dark: {
    ...shared,
    mode: "dark",
    colors: {
      ...baseColors,
      background: "#0B1220",
      surface: "#111A2E",
      text: {
        primary: "#F9FAFB",
        secondary: "#CBD5E1",
        muted: "#94A3B8",
        inverse: "#111827",
      },
      border: "rgba(148, 163, 184, 0.25)",
      button: {
        primaryBg: baseColors.primary[700],
        primaryBgDisabled: "rgba(29, 78, 216, 0.45)",
        primaryText: "#FFFFFF",
        secondaryBg: "rgba(255, 255, 255, 0.06)",
        secondaryText: "#F9FAFB",
        secondaryBorder: "rgba(148, 163, 184, 0.25)",
      },
    },
    gradient: {
      main: {
        colors: [
          "rgba(15, 23, 42, 1)",
          "rgba(30, 41, 59, 1)",
          "rgba(88, 28, 135, 1)",
        ],
        locations: [0, 0.5, 0.99],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      },
    },
  },
};

export function getTheme(mode) {
  return mode === "dark" ? themes.dark : themes.light;
}
