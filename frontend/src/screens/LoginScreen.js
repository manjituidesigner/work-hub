import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const PRIMARY = "#137fec";

export default function LoginScreen({ onBack, onGoSignup, onSubmit }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(219,234,254,0.8)", "transparent"]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <MaterialIcons name="work-history" size={48} color="#fff" />
          </View>

          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Please sign in to your account</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Employee ID</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter your Employee ID"
                placeholderTextColor="#94a3b8"
                style={styles.input}
              />
              <MaterialIcons name="badge" size={20} color="#94a3b8" />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#94a3b8"
                secureTextEntry={hidePassword}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <MaterialIcons
                  name={hidePassword ? "visibility-off" : "visibility"}
                  size={20}
                  color="#94a3b8"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} onPress={() => onSubmit?.()}>
            <LinearGradient colors={[PRIMARY, "#3b82f6"]} style={styles.loginBtn}>
              <Text style={styles.loginText}>Log In</Text>
              <MaterialIcons name="login" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.biometric}>
            <TouchableOpacity>
              <MaterialIcons name="face" size={36} color="#94a3b8" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don’t have an account?
            <Text style={styles.link} onPress={onGoSignup}>
              {' '}Sign Up
            </Text>
          </Text>

          <Text style={styles.vendorText}>Log in as Vendor or Admin</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  wrapper: {
    flex: 1,
    maxWidth: 420,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 84,
    paddingBottom: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 34,
  },

  logoBox: {
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    color: "#0f172a",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
  },

  form: {
    gap: 18,
  },

  field: {
    gap: 6,
  },

  label: {
    fontSize: 14,
    color: "#334155",
    marginLeft: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#0f172a",
  },

  forgot: {
    alignSelf: "flex-end",
  },

  forgotText: {
    fontSize: 14,
    color: PRIMARY,
  },

  loginBtn: {
    flexDirection: "row",
    gap: 10,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop: 8,
  },

  loginText: {
    fontSize: 18,
    color: "#fff",
  },

  biometric: {
    marginTop: 18,
    alignItems: "center",
  },

  footer: {
    marginTop: 44,
    alignItems: "center",
    gap: 12,
  },

  footerText: {
    fontSize: 14,
    color: "#64748b",
  },

  link: {
    color: PRIMARY,
  },

  vendorText: {
    fontSize: 12,
    color: "#94a3b8",
  },
});
