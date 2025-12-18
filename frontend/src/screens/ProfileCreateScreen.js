import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileCreateScreen({ onSave, onCancel }) {
  const [tab, setTab] = useState("employee");
  const [education, setEducation] = useState([{}]);
  const [work, setWork] = useState([{}]);
  const [skillsInput, setSkillsInput] = useState("");
  const [skills, setSkills] = useState([]);

  const addEducation = () => {
    setEducation([...education, {}]);
  };

  const addWork = () => {
    setWork([...work, {}]);
  };

  const addSkills = () => {
    const parts = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!parts.length) return;

    setSkills((prev) => {
      const existing = new Set(prev.map((s) => s.toLowerCase()));
      const next = [...prev];
      for (const p of parts) {
        const key = p.toLowerCase();
        if (!existing.has(key)) {
          next.push(p);
          existing.add(key);
        }
      }
      return next;
    });
    setSkillsInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onCancel?.()} disabled={!onCancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        <Tab label="Employee" active={tab === "employee"} onPress={() => setTab("employee")} />
        <Tab label="Company" active={tab === "company"} onPress={() => setTab("company")} />
        <Tab
          label="HR Consultancy"
          active={tab === "consultancy"}
          onPress={() => setTab("consultancy")}
        />
        <Tab label="Vendor" active={tab === "vendor"} onPress={() => setTab("vendor")} />
      </ScrollView>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {tab === "employee" ? (
          <>
            <Center>
              <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={styles.avatar} />
              <Text style={styles.uploadText}>Upload Photo</Text>
            </Center>

            <Card title="Personal Information" icon="person">
              <Input label="Full Name" />
              <Row>
                <Input label="Date of Birth" />
                <Input label="Age" />
              </Row>
              <Row>
                <Input label="Gender" />
                <Input label="Marital Status" />
              </Row>
              <Input label="Father's Name" />
              <Input label="Mother's Name" />
            </Card>

            <Card title="Contact Information" icon="contact-mail">
              <Input label="Email" />
              <Input label="Phone" />
              <Input label="Current Address" multiline />
              <Input label="Permanent Address" multiline />
            </Card>

            <Card title="ID Details" icon="badge">
              <Input label="Aadhar Number" />
              <Input label="Driving License Number" />
              <Input label="PAN Card" />
            </Card>

            <Card title="About Me" icon="person-pin">
              <Input label="Bio / Summary" multiline />
              <Input label="Career Objective" multiline />
            </Card>

            <Card title="Education" icon="school" action={addEducation}>
              {education.map((_, i) => (
                <View key={i} style={styles.timeline}>
                  <Input label="Institute Name" />
                  <Row>
                    <Input label="Year of Passing" />
                    <Input label="Degree / Course" />
                  </Row>
                </View>
              ))}
            </Card>

            <Card title="Work History" icon="work-history" action={addWork}>
              {work.map((_, i) => (
                <View key={i} style={styles.timeline}>
                  <Input label="Company Name" />
                  <Row>
                    <Input label="Designation" />
                    <Input label="Years Worked" />
                  </Row>
                  <Row>
                    <Input label="Current CTC" />
                    <Input label="Expected CTC" />
                  </Row>
                </View>
              ))}
            </Card>

            <Card title="Skills & Hobbies" icon="psychology">
              <Text style={styles.label}>Technical Skills</Text>
              <View style={styles.skillInputWrap}>
                <TextInput
                  value={skillsInput}
                  onChangeText={setSkillsInput}
                  placeholder="Figma, Corel, Adobe"
                  placeholderTextColor="#94a3b8"
                  style={styles.skillInput}
                  returnKeyType="done"
                  onSubmitEditing={addSkills}
                />
                <TouchableOpacity style={styles.skillAddBtn} onPress={addSkills} activeOpacity={0.9}>
                  <MaterialIcons name="add" size={22} color="#137fec" />
                </TouchableOpacity>
              </View>

              {skills.length > 0 ? (
                <View style={styles.skillTagsWrap}>
                  {skills.map((s) => (
                    <View key={s} style={styles.skillTag}>
                      <Text style={styles.skillTagText}>{s}</Text>
                    </View>
                  ))}
                </View>
              ) : null}

              <Input label="Hobbies" />
            </Card>

            <Card title="Family Details" icon="diversity-3">
              <Input label="Number of Siblings" />
              <Input label="Spouse Name" />
            </Card>

            <Card title="Bank & PF Details" icon="account-balance">
              <Input label="Account Holder Name" />
              <Input label="Bank Name" />
              <Row>
                <Input label="Account Number" />
                <Input label="IFSC Code" />
              </Row>
              <Input label="PF Account Number" />
            </Card>

            <Card title="Other" icon="directions-car">
              <Input label="Vehicle Type Owned" />
            </Card>
          </>
        ) : null}

        {tab === "company" ? (
          <>
            <Center>
              <MaterialIcons name="domain" size={80} color="#94a3b8" />
              <Text style={styles.uploadText}>Upload Company Logo</Text>
            </Center>

            <Card title="Company Details" icon="business">
              <Input label="Company Name" />
              <Input label="Industry" />
              <Row>
                <Input label="Size" />
                <Input label="Website" />
              </Row>
            </Card>

            <Card title="Headquarters & Contact" icon="location-on">
              <Input label="HQ Address" multiline />
              <Input label="Business Email" />
            </Card>
          </>
        ) : null}

        {tab === "consultancy" ? (
          <>
            <Center>
              <MaterialIcons name="groups" size={80} color="#94a3b8" />
              <Text style={styles.uploadText}>Upload Agency Logo</Text>
            </Center>

            <Card title="Consultancy Profile" icon="badge">
              <Input label="Consultancy Name" />
              <Row>
                <Input label="Team Size" />
                <Input label="License No." />
              </Row>
            </Card>

            <Card title="Services Offered" icon="handshake">
              <Input label="Services Description" multiline />
            </Card>

            <Card title="Contact" icon="call">
              <Input label="Official Email Address" />
            </Card>
          </>
        ) : null}

        {tab === "vendor" ? (
          <>
            <Center>
              <MaterialIcons name="storefront" size={80} color="#94a3b8" />
              <Text style={styles.uploadText}>Upload Vendor Logo</Text>
            </Center>

            <Card title="Vendor Information" icon="inventory-2">
              <Input label="Business Name" />
              <Input label="Service Type" />
              <Input label="Pricing Model" />
            </Card>

            <Card title="Contact" icon="contact-phone">
              <Input label="Support Phone" />
              <Input label="Service Area" />
            </Card>
          </>
        ) : null}
      </ScrollView>

      <View style={styles.saveBar}>
        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.9} onPress={() => onSave?.()}>
          <Text style={styles.saveText}>Save Profile</Text>
          <MaterialIcons name="check" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Section = ({ title, icon, children, actionIcon, onAction }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <View style={styles.sectionLeft}>
        <MaterialIcons name={icon} size={22} color="#137fec" />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      {actionIcon && (
        <TouchableOpacity onPress={onAction}>
          <MaterialIcons name={actionIcon} size={26} color="#137fec" />
        </TouchableOpacity>
      )}
    </View>
    {children}
  </View>
);

const Tab = ({ label, active, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.tab, active && styles.tabActive]}>
    <Text style={[styles.tabText, active && { color: "#fff" }]}>{label}</Text>
  </TouchableOpacity>
);

const Card = ({ title, icon, children, action }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <MaterialIcons name={icon} size={20} color="#137fec" />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {action ? (
        <TouchableOpacity onPress={action}>
          <MaterialIcons name="add" size={22} color="#137fec" />
        </TouchableOpacity>
      ) : null}
    </View>
    {children}
  </View>
);

const Input = ({ label, multiline, ...props }) => (
  <View style={{ flex: 1, marginBottom: 12 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput multiline={multiline} style={[styles.input, multiline && styles.inputMultiline]} {...props} />
  </View>
);

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Center = ({ children }) => <View style={styles.center}>{children}</View>;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f8" },

  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cancel: { color: "#64748b", fontSize: 16 },
  headerTitle: { fontSize: 18, fontWeight: "800" },

  tabs: { paddingHorizontal: 12, marginBottom: 10 },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  tabActive: { backgroundColor: "#137fec", borderColor: "#137fec" },
  tabText: { fontSize: 14, fontWeight: "600" },

  center: { alignItems: "center", marginVertical: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  uploadText: { color: "#137fec", marginTop: 8, fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 12,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardTitle: { fontSize: 16, fontWeight: "800" },

  row: { flexDirection: "row", gap: 10 },

  label: { fontSize: 13, color: "#475569", marginBottom: 4 },
  input: {
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    color: "#111418",
  },
  inputMultiline: {
    height: 90,
    paddingTop: 12,
    paddingBottom: 12,
    textAlignVertical: "top",
  },

  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: "#137fec33",
    paddingLeft: 12,
    marginBottom: 16,
  },

  saveBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  saveBtn: {
    backgroundColor: "#137fec",
    height: 52,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "800" },

  skillInputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingLeft: 12,
    marginBottom: 10,
  },
  skillInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#111418",
  },
  skillAddBtn: {
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  skillTagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 6,
    marginBottom: 12,
  },
  skillTag: {
    backgroundColor: "rgba(19,127,236,0.12)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  skillTagText: {
    color: "#137fec",
    fontSize: 13,
    fontWeight: "700",
  },

  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
});
