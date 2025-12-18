import { View } from "react-native";
import { useTheme } from "../theme";

export default function ThemedView({ variant = "background", style, children, ...props }) {
  const { theme } = useTheme();

  const baseStyle = (() => {
    if (variant === "surface") {
      return { backgroundColor: theme.colors.surface };
    }
    return { backgroundColor: theme.colors.background };
  })();

  return (
    <View {...props} style={[baseStyle, style]}>
      {children}
    </View>
  );
}
