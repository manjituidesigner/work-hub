import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const PRIMARY = "#137fec";

export default function OnboardingScreen2({ onNext, onSkip }) {
  return (
    <LinearGradient colors={["#ffffff", "#F0F7FF"]} style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.skipBtn} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationWrapper}>
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc-1RnehrdebC2VOY2RDqUmiAOgO049gMLOSUaNbn966t7T2SjeoKvzakAYaELLgJe7CK-cSvVg1olfYRn3dcxJ1R0SE7PpCUXgPd6V_lEGiZZVtShwUxu2CfnFvPmk6w9wmTz8Np8Qi0y9T4s034hmSpz02-gMbW1k_1WPt_hen7YBsyZf-sSEKsUTF1j45uFAjYtXh5eObpIWWD-FaOaVs0X1LWEcW_iEf_cMk7ME2sPlBAmOef0AzzpKgpBV1CvwamUc77sO6g",
            }}
            style={styles.illustration}
            imageStyle={styles.illustrationImage}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>Total HR Management</Text>
          <Text style={styles.subtitle}>
            From recruitment to payroll, manage your entire organization's lifecycle effortlessly from your pocket.
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.indicators}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
          <Text style={styles.nextText}>Next</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 6 }} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBar: {
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "flex-end",
  },

  skipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  skipText: {
    fontSize: 16,
    color: "#64748b",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  illustrationWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 320,
    paddingVertical: 24,
  },

  illustration: {
    width: Math.min(width - 80, 320),
    height: Math.min(width - 80, 320),
  },

  illustrationImage: {
    borderRadius: 24,
    resizeMode: "cover",
  },

  textBlock: {
    alignItems: "center",
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#0f172a",
    lineHeight: 38,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#64748b",
    lineHeight: 24,
    maxWidth: 320,
  },

  bottom: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: "center",
  },

  indicators: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 28,
  },

  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 8,
    backgroundColor: PRIMARY,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e2e8f0",
  },

  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY,
    width: "100%",
    maxWidth: 420,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: PRIMARY,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 6,
  },

  nextText: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 0.4,
  },
});
