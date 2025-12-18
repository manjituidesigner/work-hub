import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  AccessibilityInfo,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme";

const MAX_CONTENT_WIDTH = 415;
const CARD_WIDTH = 150;
const CARD_GAP = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;

const sliderGif = require("../../assets/gif sliders.gif");

export default function SplashScreen({ onGoLogin, onGoSignup }) {
  const { theme } = useTheme();
  const PRIMARY = theme.colors.primary[600];

  const [contentWidth, setContentWidth] = React.useState(MAX_CONTENT_WIDTH);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

  const [heroIndex, setHeroIndex] = React.useState(0);
  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);

  const floatAnim = React.useRef(new Animated.Value(0)).current;
  const heroAnim = React.useRef(new Animated.Value(1)).current;

  const cards = [
    {
      title: "Admin Control",
      desc: "Full system oversight & analytics",
      icon: "admin-panel-settings",
      color: "#DBEAFE",
      iconColor: "#2563EB",
    },
    {
      title: "HR Tools",
      desc: "Recruiting & talent management",
      icon: "diversity-3",
      color: "#FCE7F3",
      iconColor: "#DB2777",
    },
    {
      title: "Employee Hub",
      desc: "Self service & benefits",
      icon: "badge",
      color: "#DCFCE7",
      iconColor: "#16A34A",
    },
    {
      title: "Vendor Connect",
      desc: "Suppliers & contracts",
      icon: "store",
      color: "#FFEDD5",
      iconColor: "#EA580C",
    },
    {
      title: "Job Search",
      desc: "Find jobs instantly",
      icon: "search",
      color: "#E0E7FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Attendance",
      desc: "Smart attendance tracking",
      icon: "event-available",
      color: "#F0FDFA",
      iconColor: "#0D9488",
    },
    {
      title: "Payroll",
      desc: "Salary & payslips",
      icon: "payments",
      color: "#FAE8FF",
      iconColor: "#9333EA",
    },
    {
      title: "Reports",
      desc: "Performance insights",
      icon: "monitoring",
      color: "#FEF3C7",
      iconColor: "#CA8A04",
    },
  ];

  const heroSlides = [
    {
      headlineA: "Faster hiring,",
      headlineAccent: " smoother",
      headlineB: " onboarding",
      caption: "Admin, HR, employees, vendors — all in one workspace.",
      bullets: ["Approve & onboard in minutes", "Track performance with insights"],
      miniIcons: [
        { name: "verified", color: "#16A34A" },
        { name: "monitoring", color: "#7C3AED" },
        { name: "payments", color: "#2563EB" },
      ],
    },
    {
      headlineA: "Attendance",
      headlineAccent: " +",
      headlineB: " payroll made easy",
      caption: "Mark attendance, generate payslips, and keep everything organized.",
      bullets: ["Smart check-in tracking", "One-tap salary & payslips"],
      miniIcons: [
        { name: "event-available", color: "#0D9488" },
        { name: "payments", color: "#2563EB" },
        { name: "receipt-long", color: "#CA8A04" },
      ],
    },
    {
      headlineA: "Recruit",
      headlineAccent: " faster",
      headlineB: " with HR tools",
      caption: "From job posts to interviews — keep the full hiring pipeline in one place.",
      bullets: ["Candidate tracking", "Interview scheduling"],
      miniIcons: [
        { name: "diversity-3", color: "#DB2777" },
        { name: "calendar-month", color: "#4F46E5" },
        { name: "check-circle", color: "#16A34A" },
      ],
    },
    {
      headlineA: "Vendors",
      headlineAccent: " connected",
      headlineB: " in one hub",
      caption: "Manage suppliers, contracts, and approvals without losing track.",
      bullets: ["Centralized contract records", "Faster purchase approvals"],
      miniIcons: [
        { name: "store", color: "#EA580C" },
        { name: "description", color: "#2563EB" },
        { name: "done-all", color: "#16A34A" },
      ],
    },
    {
      headlineA: "Reports",
      headlineAccent: " that",
      headlineB: " help decisions",
      caption: "Turn daily work into clear analytics for admins and HR.",
      bullets: ["Performance dashboards", "Role-based access"],
      miniIcons: [
        { name: "monitoring", color: "#7C3AED" },
        { name: "admin-panel-settings", color: "#2563EB" },
        { name: "insights", color: "#0D9488" },
      ],
    },
  ];

  React.useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled?.()
      .then((enabled) => {
        if (mounted) setReduceMotionEnabled(Boolean(enabled));
      })
      .catch(() => {
        if (mounted) setReduceMotionEnabled(false);
      });
    const sub = AccessibilityInfo.addEventListener?.("reduceMotionChanged", (enabled) => {
      setReduceMotionEnabled(Boolean(enabled));
    });
    return () => {
      mounted = false;
      sub?.remove?.();
    };
  }, []);

  React.useEffect(() => {
    if (!cards.length) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;
        const x = next * SNAP_INTERVAL;
        if (carouselRef.current?.scrollTo) {
          carouselRef.current.scrollTo({ x, animated: true });
        }
        return next;
      });
    }, 4200);

    return () => clearInterval(id);
  }, [cards.length]);

  React.useEffect(() => {
    if (!heroSlides.length) return;
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  React.useEffect(() => {
    if (reduceMotionEnabled) {
      heroAnim.setValue(1);
      return;
    }
    heroAnim.setValue(0);
    Animated.timing(heroAnim, {
      toValue: 1,
      duration: 420,
      useNativeDriver: true,
    }).start();
  }, [heroIndex, heroAnim, reduceMotionEnabled]);

  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: 1, duration: 1200, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1200, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [floatAnim]);

  const floatY = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });
  const floatY2 = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 6] });
  const fade = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] });

  const heroSlide = heroSlides[heroIndex] ?? heroSlides[0];
  const heroOpacity = heroAnim;
  const heroTranslateY = heroAnim.interpolate({ inputRange: [0, 1], outputRange: [8, 0] });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      bounces={false}
      onLayout={(e) => {
        const w = e?.nativeEvent?.layout?.width;
        if (typeof w === "number" && w > 0) {
          setContentWidth(Math.min(w, MAX_CONTENT_WIDTH));
        }
      }}
    >
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <MaterialIcons name="hub" size={28} color={PRIMARY} />
        </View>
        <View>
          <Text style={styles.logoTitle}>HR Connect</Text>
          <Text style={styles.logoSub}>Workforce Solutions</Text>
        </View>
      </View>

      <View style={[styles.hero, { width: contentWidth * 0.9 }]}>
        <View style={styles.heroRow}>
          <View style={styles.heroLeft}>
            <Image source={sliderGif} style={styles.heroGif} resizeMode="contain" />
          </View>

          <View style={styles.heroRight}>
            <Animated.View style={{ opacity: heroOpacity, transform: [{ translateY: heroTranslateY }] }}>
              <Text style={styles.heroHeadline}>
                {heroSlide.headlineA}
                <Text style={styles.heroHeadlineAccent}>{heroSlide.headlineAccent}</Text>
                {heroSlide.headlineB}
              </Text>
              <Text style={styles.heroCaption}>{heroSlide.caption}</Text>

              <View style={styles.heroBullets}>
                {(heroSlide.bullets ?? []).slice(0, 2).map((b, i) => (
                  <View key={i} style={styles.heroBulletRow}>
                    <MaterialIcons name="check-circle" size={14} color="#16A34A" />
                    <Text style={styles.heroBulletText}>{b}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.heroDots}>
                {heroSlides.map((_, idx) => (
                  <TouchableOpacity
                    key={idx}
                    activeOpacity={0.8}
                    onPress={() => setHeroIndex(idx)}
                    style={[styles.heroDot, idx === heroIndex ? styles.heroDotActive : null]}
                    accessibilityRole="button"
                    accessibilityLabel={`Hero slide ${idx + 1}`}
                  />
                ))}
              </View>
            </Animated.View>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Manage Your{"\n"}Workforce Effectively</Text>
      <Text style={styles.subtitle}>One platform for Admins, HR, Employees, and Vendors.</Text>

      <ScrollView
        ref={carouselRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="normal"
        snapToAlignment="start"
        contentOffset={{ x: activeIndex * SNAP_INTERVAL, y: 0 }}
        onMomentumScrollEnd={(e) => {
          const x = e?.nativeEvent?.contentOffset?.x ?? 0;
          const idx = Math.round(x / SNAP_INTERVAL);
          setActiveIndex(Math.max(0, Math.min(idx, cards.length - 1)));
        }}
        contentContainerStyle={styles.cardScroll}
      >
        {cards.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={[styles.iconWrap, { backgroundColor: item.color }]}>
              <MaterialIcons name={item.icon} size={22} color={item.iconColor} />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dots}>
        {cards.map((_, idx) => (
          <View key={idx} style={[styles.dot, idx === activeIndex ? styles.dotActive : null]} />
        ))}
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.loginBtn} onPress={onGoLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn} onPress={onGoSignup}>
          <Text style={styles.registerText}>New Registration</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingTop: 28,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  logoTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0f172a",
  },

  logoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
    textTransform: "uppercase",
  },

  hero: {
    alignSelf: "center",
    marginTop: 14,
    height: 220,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.35)",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  heroRow: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  heroLeft: {
    width: "50%",
    height: "100%",
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 6,
    justifyContent: "center",
  },

  heroRight: {
    width: "50%",
    height: "100%",
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 6,
    justifyContent: "center",
  },

  heroGif: {
    width: "100%",
    height: "100%",
  },

  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  heroBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#0f172a",
  },

  heroHeadline: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: 18,
  },

  heroHeadlineAccent: {
    color: "#2563EB",
  },

  heroCaption: {
    marginTop: 6,
    fontSize: 11,
    color: "#475569",
    lineHeight: 15,
  },

  heroBullets: {
    marginTop: 8,
    gap: 4,
  },

  heroBulletRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  heroBulletText: {
    fontSize: 11,
    color: "#334155",
    lineHeight: 14,
    flexShrink: 1,
  },

  heroMiniRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  heroDots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },

  heroDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(15, 23, 42, 0.18)",
  },

  heroDotActive: {
    width: 16,
    backgroundColor: "rgba(37, 99, 235, 0.85)",
  },

  heroMiniIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
    color: "#0f172a",
    marginTop: 16,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#64748b",
    marginTop: 6,
  },

  cardScroll: {
    paddingVertical: 20,
    paddingLeft: 6,
  },

  card: {
    width: 150,
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: -6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(15, 23, 42, 0.18)",
  },

  dotActive: {
    width: 18,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
  },

  iconWrap: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1e293b",
  },

  cardDesc: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 4,
  },

  bottom: {
    marginTop: 10,
    gap: 12,
  },

  loginBtn: {
    backgroundColor: "#111418",
    paddingVertical: 16,
    borderRadius: 18,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  registerBtn: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  registerText: {
    color: "#111418",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
