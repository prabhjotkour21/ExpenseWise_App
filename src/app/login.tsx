import {
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    console.log("email", email);
    console.log("password", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#888"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#888"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />

        <Pressable
          onPress={handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/signup");
          }}
        >
          <Text style={styles.link}>Create Account</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/forgot-password");
          }}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#1E293B",
    padding: 24,
    borderRadius: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 28,
  },

  input: {
    height: 52,
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    marginBottom: 16,
    fontSize: 15,
  },

  loginButton: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 20,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    color: "#60A5FA",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 16,
  },

  forgot: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 14,
  },
});