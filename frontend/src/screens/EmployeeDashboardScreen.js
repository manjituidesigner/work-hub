import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmployeeDashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerIcon}>
            <MaterialIcons name="dashboard" size={22} color="#137fec" />
          </View>
          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>

        <View style={styles.headerRight}>
          <IconBtn icon="search" />
          <View>
            <IconBtn icon="notifications" />
            <View style={styles.dot} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.profileWrap}>
          <View style={styles.avatarRing}>
            <Image source={{ uri: "https://i.pravatar.cc/150?img=32" }} style={styles.avatar} />
            <View style={styles.percentBadge}>
              <Text style={styles.percentText}>85%</Text>
            </View>
          </View>

          <Text style={styles.greeting}>Good Morning, Alex</Text>
          <Text style={styles.role}>Software Engineer</Text>
        </View>

        <View style={styles.quickRow}>
          <QuickAction icon="calendar-today" label="Apply Leave" color="#137fec" />
          <QuickAction icon="payments" label="View Payslip" color="#16a34a" />
          <QuickAction icon="task-alt" label="WorkStation" color="#ea580c" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Stats</Text>
          <Text style={styles.link}>View All</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={[styles.card, styles.cardWide]}>
            <View>
              <Text style={styles.muted}>Monthly Attendance</Text>
              <View style={styles.row}>
                <Text style={styles.big}>98%</Text>
                <Text style={styles.badgeGreen}>+2%</Text>
              </View>
              <Text style={styles.small}>21 Days Present</Text>
            </View>
            <View style={styles.iconCircle}>
              <MaterialIcons name="calendar-month" size={20} color="#137fec" />
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={[styles.iconCircle, { backgroundColor: "#ede9fe" }]}>
                <MaterialIcons name="beach-access" size={18} color="#7c3aed" />
              </View>
              <Text style={styles.muted}>ANNUAL</Text>
            </View>
            <Text style={styles.big}>14</Text>
            <Text style={styles.small}>Days Remaining</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={[styles.iconCircle, { backgroundColor: "#fef9c3" }]}>
                <MaterialIcons name="star" size={18} color="#ca8a04" />
              </View>
              <MaterialIcons name="trending-up" size={18} color="#22c55e" />
            </View>
            <View style={styles.row}>
              <Text style={styles.big}>4.5</Text>
              <Text style={styles.muted}>/ 5</Text>
            </View>
            <Text style={styles.small}>Exceeds Expectations</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.row}>
            <Arrow />
            <Arrow right />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Announcement
            tag="Important"
            color="#dc2626"
            date="Dec 12, 2023"
            title="New Health Policy Update"
            text="We have updated our health insurance policy to include better dental coverage for all full-time employees..."
          />
          <Announcement
            tag="Event"
            color="#2563eb"
            date="Dec 20, 2023"
            title="Holiday Party Invite"
            text="Join us for the annual holiday celebration at the rooftop lounge. Please RSVP by Friday."
          />
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomBar}>
        <BottomTab icon="home" label="Home" active />
        <BottomTab icon="person" label="Profile" />
        <BottomTab icon="search" label="Search" />
        <BottomTab icon="menu" label="Menu" />
      </View>
    </View>
  );
}

const IconBtn = ({ icon }) => (
  <TouchableOpacity style={styles.iconBtn}>
    <MaterialIcons name={icon} size={22} color="#64748b" />
  </TouchableOpacity>
);

const QuickAction = ({ icon, label, color }) => (
  <TouchableOpacity style={styles.quickBtn}>
    <View style={[styles.quickIcon, { backgroundColor: `${color}22` }]}>
      <MaterialIcons name={icon} size={24} color={color} />
    </View>
    <Text style={styles.quickText}>{label}</Text>
  </TouchableOpacity>
);

const Announcement = ({ tag, color, date, title, text }) => (
  <View style={styles.announcement}>
    <View style={styles.row}>
      <Text style={[styles.tag, { backgroundColor: `${color}22`, color }]}>{tag}</Text>
      <Text style={styles.small}>{date}</Text>
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.muted}>{text}</Text>
  </View>
);

const Arrow = ({ right }) => (
  <View style={styles.arrow}>
    <MaterialIcons
      name={right ? "chevron-right" : "chevron-left"}
      size={18}
      color="#475569"
    />
  </View>
);

const BottomTab = ({ icon, label, active }) => (
  <TouchableOpacity style={styles.bottomTab}>
    <MaterialIcons name={icon} size={22} color={active ? "#137fec" : "#9ca3af"} />
    <Text style={[styles.tabLabel, active && { color: "#137fec" }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f8" },

  header: {
    paddingTop: 44,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#f6f7f8",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 20, fontWeight: "800" },
  headerRight: { flexDirection: "row", gap: 12 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },

  profileWrap: { alignItems: "center", marginTop: 24 },
  avatarRing: { position: "relative" },
  avatar: { width: 96, height: 96, borderRadius: 48 },
  percentBadge: {
    position: "absolute",
    bottom: -6,
    alignSelf: "center",
    backgroundColor: "#137fec",
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  percentText: { color: "#fff", fontSize: 11, fontWeight: "700" },
  greeting: { fontSize: 22, fontWeight: "800", marginTop: 12 },
  role: { color: "#64748b" },

  quickRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
  },
  quickBtn: { alignItems: "center" },
  quickIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quickText: { fontSize: 12, fontWeight: "600", marginTop: 6 },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "800" },
  link: { color: "#137fec", fontWeight: "600" },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    width: "48%",
  },
  cardWide: { width: "100%", flexDirection: "row", justifyContent: "space-between" },
  cardTop: { flexDirection: "row", justifyContent: "space-between" },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e0f2fe",
    alignItems: "center",
    justifyContent: "center",
  },

  big: { fontSize: 24, fontWeight: "800" },
  muted: { color: "#64748b", fontSize: 12 },
  small: { fontSize: 12, color: "#64748b" },
  row: { flexDirection: "row", alignItems: "center", gap: 6 },

  badgeGreen: {
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    paddingHorizontal: 6,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: "700",
  },

  announcement: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginLeft: 16,
  },
  tag: {
    fontSize: 10,
    fontWeight: "800",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  cardTitle: { fontSize: 16, fontWeight: "800", marginVertical: 6 },

  arrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#fff",
  },
  bottomTab: { alignItems: "center" },
  tabLabel: { fontSize: 10, color: "#9ca3af" },
});
