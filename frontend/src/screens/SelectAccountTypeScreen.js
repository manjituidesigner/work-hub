import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PRIMARY = "#137fec";

export default function SelectAccountTypeScreen({ onBack, onContinue }) {
  const [selected, setSelected] = useState("company");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <TouchableOpacity onPress={onBack}>
              <MaterialIcons name="arrow-back" size={24} color="#617589" />
            </TouchableOpacity>

            <Text style={styles.stepText}>Step 1 of 4</Text>

            <View style={{ width: 24 }} />
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Choose your role</Text>
          <Text style={styles.subtitle}>
            Select the account type that best describes your needs to get started.
          </Text>
        </View>

        <View style={styles.options}>
          <RoleCard
            icon="domain"
            title="Company"
            desc="I want to hire talent & manage employees."
            active={selected === "company"}
            onPress={() => setSelected("company")}
          />

          <RoleCard
            icon="person"
            title="Employee"
            desc="I am looking for a job or managing my profile."
            active={selected === "employee"}
            onPress={() => setSelected("employee")}
          />

          <RoleCard
            icon="groups"
            title="HR Consultancy"
            desc="I manage recruitment for multiple clients."
            active={selected === "consultancy"}
            onPress={() => setSelected("consultancy")}
          />

          <RoleCard
            icon="storefront"
            title="Vendor"
            desc="I provide services to companies."
            active={selected === "vendor"}
            onPress={() => setSelected("vendor")}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueBtn} onPress={() => onContinue?.(selected)}>
          <Text style={styles.continueText}>Continue</Text>
          <MaterialIcons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RoleCard({ icon, title, desc, active, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, active && styles.cardActive]}
    >
      <View style={[styles.iconBox, active && styles.iconBoxActive]}>
        <MaterialIcons name={icon} size={28} color={active ? PRIMARY : "#617589"} />
      </View>

      <View style={styles.cardText}>
        <View style={styles.cardHeader}>
          <Text style={[styles.cardTitle, active && styles.cardTitleActive]}>{title}</Text>

          {active ? (
            <MaterialIcons name="check-circle" size={22} color={PRIMARY} />
          ) : (
            <View style={styles.radio} />
          )}
        </View>

        <Text style={styles.cardDesc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f8",
  },

  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 140,
  },

  progressSection: {
    paddingTop: 24,
    paddingBottom: 12,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  stepText: {
    fontSize: 14,
    color: "#111418",
  },

  progressBar: {
    height: 6,
    borderRadius: 6,
    backgroundColor: "#dbe0e6",
    overflow: "hidden",
  },

  progressFill: {
    width: "25%",
    height: "100%",
    backgroundColor: PRIMARY,
  },

  header: {
    paddingVertical: 16,
  },

  title: {
    fontSize: 32,
    color: "#111418",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#617589",
  },

  options: {
    marginTop: 12,
    gap: 16,
  },

  card: {
    flexDirection: "row",
    gap: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  cardActive: {
    borderWidth: 2,
    borderColor: PRIMARY,
    backgroundColor: "rgba(19,127,236,0.05)",
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#f0f2f4",
    alignItems: "center",
    justifyContent: "center",
  },

  iconBoxActive: {
    backgroundColor: "rgba(19,127,236,0.15)",
  },

  cardText: {
    flex: 1,
    gap: 6,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 18,
    color: "#111418",
  },

  cardTitleActive: {
    color: PRIMARY,
  },

  cardDesc: {
    fontSize: 14,
    color: "#617589",
    lineHeight: 20,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#dbe0e6",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 28,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },

  continueBtn: {
    height: 52,
    borderRadius: 16,
    backgroundColor: PRIMARY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  continueText: {
    fontSize: 16,
    color: "#fff",
  },
});
