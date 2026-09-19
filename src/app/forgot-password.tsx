import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    console.log(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Forgot Password</Text>

        <Text style={styles.subtitle}>
          Enter your email to reset your password
        </Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#888"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Pressable
          onPress={handleForgotPassword}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Reset Password</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/login");
          }}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Back to Login</Text>
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

  btn: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 16,
  },

  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  backButton: {
    alignItems: "center",
    paddingVertical: 10,
  },

  backText: {
    color: "#60A5FA",
    fontSize: 15,
  },
});

