// app/(auth)/signin.tsx

import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    TextInput,
    Title,
    useTheme
} from "react-native-paper";

export default function SignInScreen() {
  const router = useRouter();
  const theme = useTheme();

  // State for form fields
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = () => {
    setLoading(true);
    // 1. **Authentication Logic goes here** (API call, Redux/RTK Query dispatch)
    console.log("Signing in with:", email, password);

    // 2. **On success, redirect to the tabs screen** (e.g., dashboard)
    setTimeout(() => {
      setLoading(false);
      // Replace this with your actual success logic:
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Title style={[styles.title, { color: theme.colors.primary }]}>
        Welcome Back
      </Title>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleSignIn}
        loading={loading}
        disabled={!email || !password || loading}
        style={styles.button}
      >
        Sign In
      </Button>

      <Button
        mode="text"
        onPress={() => router.push("/(auth)/signup")}
        style={styles.textButton}
      >
        Don't have an account? Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
  textButton: {
    marginTop: 20,
  },
});
