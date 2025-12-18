import { Pressable, Text } from "react-native";

export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-xl px-4 py-3 ${disabled ? "bg-primary-600/50" : "bg-primary-600"}`}
    >
      <Text className="text-white text-center font-interSemiBold">{title}</Text>
    </Pressable>
  );
}
