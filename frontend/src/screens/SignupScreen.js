import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#137fec";

export default function SignupScreen({ onBack, onGoLogin, onSubmit }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <MaterialIcons name="arrow-back" size={24} color="#111418" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>Create an account to manage your HR needs.</Text>
        </View>

        <View style={styles.form}>
          <FormField label="Full Name" icon="person" placeholder="John Doe" />

          <FormField
            label="Email Address"
            icon="mail"
            placeholder="name@company.com"
            keyboardType="email-address"
          />

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock" size={20} color="#9ca3af" />
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                secureTextEntry={hidePassword}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <MaterialIcons
                  name={hidePassword ? "visibility-off" : "visibility"}
                  size={20}
                  color="#9ca3af"
                />
              </TouchableOpacity>
            </View>
          </View>

          <FormField label="Confirm Password" icon="lock-reset" placeholder="••••••••" secure />

          <View style={styles.termsRow}>
            <View style={styles.checkbox} />
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.link}>Terms</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.9} onPress={() => onSubmit?.()}>
            <LinearGradient colors={[PRIMARY, "#4ba1f5"]} style={styles.signupBtn}>
              <Text style={styles.signupText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4BPyBQGksLyWeGAFIHjj1AELCw00NjwT72RFXpYrZOVOgNXyKEbs2iYhZ-cDLs4hUybaOwTPlt7YwGBjae1Ntt5adZ5PpFeEFpA75XXYvYjJBDIMtZIYGBGl1JeXTChHiKXaPTmz9ggIl-S5g7JWE6npK5BcC4tn7-NckETcqCDJ7uEPC_AKUgutX_c0QTWjqG2yxM26qZnlsXLteseamT8Omr57frQu7LmD-7wPo4rNsnMrPUPwnumLuMTuuMIhLaqsHi7PTdaA",
                }}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <MaterialIcons name="apple" size={22} color="#000" />
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Already have an account?
            <Text style={styles.link} onPress={onGoLogin}>
              {' '}Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function FormField({ label, icon, secure, ...props }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <MaterialIcons name={icon} size={20} color="#9ca3af" />
        <TextInput
          {...props}
          secureTextEntry={secure}
          placeholderTextColor="#9ca3af"
          style={styles.input}
        />
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
    paddingHorizontal: 16,
  },

  backBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  header: {
    marginTop: 8,
    marginBottom: 32,
  },

  title: {
    fontSize: 32,
    color: "#111418",
  },

  subtitle: {
    fontSize: 16,
    color: "#617589",
    marginTop: 6,
  },

  form: {
    gap: 20,
  },

  field: {
    gap: 6,
  },

  label: {
    fontSize: 14,
    color: "#111418",
    marginLeft: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 56,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#111418",
  },

  termsRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginTop: 2,
  },

  termsText: {
    fontSize: 14,
    color: "#617589",
    flex: 1,
  },

  link: {
    color: PRIMARY,
  },

  signupBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop: 8,
  },

  signupText: {
    fontSize: 16,
    color: "#fff",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 8,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },

  dividerText: {
    fontSize: 12,
    color: "#617589",
  },

  socialRow: {
    flexDirection: "row",
    gap: 12,
  },

  socialBtn: {
    flex: 1,
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  socialText: {
    fontSize: 14,
    color: "#111418",
  },

  footerText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
    color: "#617589",
  },
});
