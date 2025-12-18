import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const PRIMARY = "#137fec";

export default function SplashScreen({ onNext, onSkip }) {
  return (
    <View style={styles.container}>
      <View style={styles.bgIcons} pointerEvents="none">
        <MaterialIcons
          name="work"
          size={64}
          style={[
            styles.icon,
            { top: "15%", left: "10%", transform: [{ rotate: "-12deg" }] },
          ]}
        />
        <MaterialIcons
          name="search"
          size={90}
          style={[
            styles.icon,
            { top: "20%", right: "-5%", transform: [{ rotate: "15deg" }] },
          ]}
        />
        <MaterialIcons
          name="groups"
          size={160}
          style={[styles.icon, { top: "48%", left: "-10%" }]}
        />
        <MaterialIcons
          name="storefront"
          size={80}
          style={[
            styles.icon,
            { bottom: "18%", right: "10%", transform: [{ rotate: "-10deg" }] },
          ]}
        />

        <LinearGradient
          colors={["rgba(246,247,248,0.85)", "transparent"]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <View style={styles.logoWrapper}>
          <View style={styles.glow} />
          <View style={styles.logoBox}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCV69YaY3-Bh4w135rlZxTxuBduJ8j9XJH87e7H9agGhN0dRtoFDznmaw9OxiWPzYvNoZaoZ07ckSIJnNo8KKakEajH0Q9PHD_Qhz6z1hb3eCXfSDKUjRg2gNW6IT1hvj9lTVoGzmvcUfqaI7EpCRKCxwDxuQQUFR5Xii37NosbGsbEyzlE4NSH9CsT5fOPFjv_6_PPP_urLGoqr27XOG-ybPMMwsAEYGp29R0buyCQn-v3D4U6_i-qbTB8en4Q3LcSIzJZE0o4UA",
              }}
              style={styles.logo}
            />
          </View>
        </View>

        <Text style={styles.title}>HR Connect</Text>
        <Text style={styles.subtitle}>
          Empowering Workplaces with unified solutions for every role.
        </Text>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.dots}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
          <MaterialIcons name="arrow-forward" size={26} color="#fff" />
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

  bgIcons: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.08,
  },

  icon: {
    position: "absolute",
    color: PRIMARY,
  },

  topBar: {
    paddingTop: 50,
    paddingHorizontal: 24,
    alignItems: "flex-end",
  },

  skipText: {
    color: "#64748b",
    fontSize: 14,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoWrapper: {
    marginBottom: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  glow: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(19,127,236,0.2)",
  },

  logoBox: {
    width: 130,
    height: 130,
    borderRadius: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    elevation: 12,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    color: "#111418",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#64748b",
    maxWidth: 280,
    lineHeight: 22,
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingBottom: 30,
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  activeDot: {
    width: 32,
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
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: PRIMARY,
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 8,
  },
});
