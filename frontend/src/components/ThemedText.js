import { Text } from "react-native";
import { useTheme } from "../theme";

export default function ThemedText({ variant = "body", style, children, ...props }) {
  const { theme } = useTheme();

  const baseStyle = (() => {
    if (variant === "title") {
      return {
        color: theme.colors.text.primary,
        fontFamily: theme.typography.family.semibold,
        fontSize: 24,
      };
    }

    if (variant === "subtitle") {
      return {
        color: theme.colors.text.secondary,
        fontFamily: theme.typography.family.regular,
        fontSize: 16,
      };
    }

    if (variant === "muted") {
      return {
        color: theme.colors.text.muted,
        fontFamily: theme.typography.family.regular,
        fontSize: 14,
      };
    }

    return {
      color: theme.colors.text.primary,
      fontFamily: theme.typography.family.regular,
      fontSize: 16,
    };
  })();

  return (
    <Text {...props} style={[baseStyle, style]}>
      {children}
    </Text>
  );
}
