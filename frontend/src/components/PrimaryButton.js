import { Pressable, Text } from "react-native";
import { useTheme } from "../theme";

export default function PrimaryButton({ title, onPress, disabled }) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="px-4 py-3"
      style={{
        borderRadius: theme.radius.xl,
        backgroundColor: disabled ? theme.colors.button.primaryBgDisabled : theme.colors.button.primaryBg,
      }}
    >
      <Text
        className="text-center"
        style={{
          color: theme.colors.button.primaryText,
          fontFamily: theme.typography.family.semibold,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
