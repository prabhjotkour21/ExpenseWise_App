import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

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
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!email) {
      Alert.alert("Error", "Please enter email");
      return;
    } else if (!password) {
      Alert.alert("Error", "Please enter password");
      return;
    } else if (!confirmPassword) {
      Alert.alert("Error", "Please confirm password");
      return;
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Sign up to create your account
        </Text>

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

        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="#888"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          style={styles.input}
        />

        <Pressable
          onPress={handleSignup}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/login");
          }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>
            Already have an account? Login
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

