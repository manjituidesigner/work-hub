import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function OnboardingScreen({ onGoLogin, onGoSignup }) {
  const [step, setStep] = useState(0);

  const pages = useMemo(
    () => [
      {
        title: "Welcome to WorkBoard",
        subtitle: "Organize your tasks and projects in one place.",
      },
      {
        title: "Stay on track",
        subtitle: "Create boards, set priorities, and keep momentum.",
      },
      {
        title: "Work better together",
        subtitle: "Share updates and collaborate with your team.",
      },
    ],
    []
  );

  const page = pages[step];
  const isLast = step === pages.length - 1;

  function next() {
    setStep((s) => Math.min(s + 1, pages.length - 1));
  }

  return (
    <View className="flex-1 bg-white px-5 pt-14">
      <View className="flex-1">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-600">
          <Text className="font-interSemiBold text-white">WB</Text>
        </View>

        <View className="mt-10">
          <Text className="text-3xl font-interSemiBold text-gray-900">{page.title}</Text>
          <Text className="mt-3 font-inter text-gray-700">{page.subtitle}</Text>
        </View>

        <View className="mt-8 flex-row items-center">
          {pages.map((_, idx) => (
            <View
              key={idx}
              className={`mr-2 h-2 rounded-full ${idx === step ? "w-8 bg-primary-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </View>

        <View className="mt-10">
          <PrimaryButton title={isLast ? "Get started" : "Next"} onPress={next} />
        </View>

        <View className="mt-3">
          <Pressable onPress={onGoLogin} className="rounded-xl border border-gray-200 px-4 py-3">
            <Text className="text-center font-interSemiBold text-gray-900">Login</Text>
          </Pressable>
        </View>
      </View>

      <View className="pb-10">
        <Text className="text-center font-inter text-gray-700">Don’t have an account?</Text>
        <View className="mt-3 flex-row items-center justify-center">
          <Pressable onPress={onGoSignup} className="px-3 py-2">
            <Text className="font-interSemiBold text-primary-600">Sign up</Text>
          </Pressable>
          <Text className="font-inter text-gray-400">|</Text>
          <Pressable onPress={onGoLogin} className="px-3 py-2">
            <Text className="font-interSemiBold text-primary-600">Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
