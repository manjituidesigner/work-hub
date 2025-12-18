import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const PRIMARY = "#137fec";

export default function OnboardingEmployeeScreen({ onNext, onSkip }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255,255,255,0.6)", "transparent"]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <View style={styles.topBar}>
        <TouchableOpacity style={styles.skipBtn} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationWrapper}>
          <View style={styles.glowBlob} />

          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-xtyQcnt-2AsMwNOklUf7KhcBb4MaXHHUl_ZHHRTPHzfGFj0WwRbmhsHn_PJMNhX_EZ0Lv_wN807ukl-CxNyyXrnvSyE8JWuZ2zRdFhp5kpVJDRzyrTMls_Mfwl25mzUXVAQPlWD-fTKf7AAGf2WpUIr-t3I8S_u26lD_tNMphNoPqHwxXc_1813I6i9i5Pj6wijXRs-nqX9W9EG0chkqX5CLW41gvdEPlIOcAdjrfUVD6ek1zYP34Lrw56elBZ21cbd7pooNWbM",
            }}
            style={styles.illustration}
            imageStyle={styles.illustrationImage}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>Employee Self-Service</Text>
          <Text style={styles.subtitle}>
            Track your performance, apply for leaves, and access your salary slips instantly. Everything you need, right at your fingertips.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicators}>
          <View style={styles.dot} />
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
          <Text style={styles.nextText}>Next</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f8",
  },

  topBar: {
    paddingTop: 50,
    paddingHorizontal: 24,
    alignItems: "flex-end",
  },

  skipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  skipText: {
    fontSize: 16,
    color: "#617589",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  illustrationWrapper: {
    width: "100%",
    maxWidth: 380,
    aspectRatio: 1,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  glowBlob: {
    position: "absolute",
    width: "85%",
    height: "85%",
    borderRadius: 999,
    backgroundColor: "rgba(19,127,236,0.1)",
  },

  illustration: {
    width: "100%",
    height: "100%",
    zIndex: 2,
  },

  illustrationImage: {
    resizeMode: "contain",
  },

  textBlock: {
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#111418",
    lineHeight: 38,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#617589",
    lineHeight: 24,
  },

  footer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    gap: 28,
    alignItems: "center",
  },

  indicators: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#dbe0e6",
  },

  activeDot: {
    width: 32,
    height: 8,
    borderRadius: 8,
    backgroundColor: PRIMARY,
  },

  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    maxWidth: 420,
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    shadowColor: PRIMARY,
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 6,
  },

  nextText: {
    fontSize: 18,
    color: "#fff",
    letterSpacing: 0.4,
  },
});
