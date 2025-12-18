import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#137fec";

export default function EmployeeProfileScreen({ onCancel, onSave }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.progressWrap}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Profile Completion</Text>
            <Text style={styles.progressValue}>35%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <MaterialIcons name="person" size={70} color="#9ca3af" />
          </View>
          <TouchableOpacity style={styles.cameraBtn}>
            <MaterialIcons name="photo-camera" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.uploadText}>Upload Photo</Text>
        </View>

        <Section title="Personal Information" icon="person">
          <Input label="Full Name" placeholder="Jane Doe" />
          <Row>
            <Input label="Date of Birth" placeholder="DD/MM/YYYY" />
            <Input label="Age" placeholder="28" />
          </Row>
          <Row>
            <Input label="Gender" placeholder="Male / Female" />
            <Input label="Marital Status" placeholder="Single" />
          </Row>
          <Input label="Father's Name" placeholder="Father Name" />
          <Input label="Mother's Name" placeholder="Mother Name" />
        </Section>

        <Section title="Contact Information" icon="contact-mail">
          <Input label="Email" placeholder="john@email.com" />
          <Input label="Phone" placeholder="+91 XXXXX XXXXX" />
          <Input label="Current Address" placeholder="Street, City, State" multiline />
          <Input label="Permanent Address" placeholder="Same as current" multiline />
        </Section>

        <Section title="ID Details" icon="badge">
          <Input label="Aadhar Number" placeholder="XXXX-XXXX-XXXX" />
          <Input label="Driving License" placeholder="DL No." />
          <Input label="PAN Card" placeholder="ABCDE1234F" />
        </Section>

        <Section title="About Me" icon="person-pin">
          <Input label="Bio / Summary" placeholder="Write about yourself..." multiline />
          <Input label="Career Objective" placeholder="Your career goals..." multiline />
        </Section>

        <Section title="Education" icon="school">
          <Input label="Institute Name" placeholder="College / University" />
          <Row>
            <Input label="Year of Passing" placeholder="2022" />
            <Input label="Degree" placeholder="B.Tech" />
          </Row>
        </Section>

        <Section title="Work History" icon="work-history">
          <Input label="Company Name" placeholder="Previous Company" />
          <Row>
            <Input label="Designation" placeholder="Developer" />
            <Input label="Years Worked" placeholder="2.5" />
          </Row>
          <Row>
            <Input label="Current CTC" placeholder="LPA" />
            <Input label="Expected CTC" placeholder="LPA" />
          </Row>
        </Section>

        <Section title="Family Details" icon="diversity-3">
          <Input label="No. of Siblings" placeholder="2" />
          <Input label="Spouse Name" placeholder="Optional" />
        </Section>

        <Section title="Bank & PF Details" icon="account-balance">
          <Input label="Account Holder Name" />
          <Input label="Bank Name" />
          <Row>
            <Input label="Account Number" />
            <Input label="IFSC Code" />
          </Row>
          <Input label="PF Account Number" />
        </Section>

        <Section title="Other" icon="directions-car">
          <Input label="Vehicle Type Owned" placeholder="2 Wheeler / 4 Wheeler" />
        </Section>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.9} onPress={onSave}>
          <LinearGradient colors={[PRIMARY, "#4ba6ff"]} style={styles.saveBtn}>
            <Text style={styles.saveText}>Save Profile</Text>
            <MaterialIcons name="check" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Section({ title, icon, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name={icon} size={20} color={PRIMARY} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={{ gap: 12 }}>{children}</View>
    </View>
  );
}

function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}

function Input({ label, multiline, style, ...props }) {
  return (
    <View style={{ flex: 1, gap: 6 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        multiline={multiline}
        style={[styles.input, multiline && styles.inputMultiline, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f8" },

  header: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },

  cancel: { color: "#617589", fontSize: 14 },
  headerTitle: { fontSize: 18, color: "#111418" },

  scroll: { padding: 16 },

  progressWrap: { marginBottom: 24 },
  progressHeader: { flexDirection: "row", justifyContent: "space-between" },
  progressLabel: { fontSize: 14, color: "#64748b" },
  progressValue: { color: PRIMARY, fontWeight: "700" },

  progressBar: {
    height: 6,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginTop: 6,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    backgroundColor: PRIMARY,
    borderRadius: 6,
  },

  avatarWrap: { alignItems: "center", marginBottom: 24 },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBtn: {
    position: "absolute",
    bottom: 30,
    right: "35%",
    backgroundColor: PRIMARY,
    borderRadius: 20,
    padding: 8,
  },
  uploadText: { marginTop: 8, color: PRIMARY },

  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    color: "#111418",
  },

  label: {
    fontSize: 14,
    color: "#374151",
  },

  input: {
    minHeight: 48,
    backgroundColor: "#f0f2f4",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111418",
  },

  inputMultiline: {
    minHeight: 96,
    textAlignVertical: "top",
  },

  row: { flexDirection: "row", gap: 12 },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },

  saveBtn: {
    height: 56,
    borderRadius: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  saveText: {
    color: "#fff",
    fontSize: 18,
  },
});
