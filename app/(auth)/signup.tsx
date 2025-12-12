// app/(auth)/signup.tsx

import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Title, useTheme } from "react-native-paper";

export default function SignUpScreen() {
  const router = useRouter();
  const theme = useTheme();

  // State for form fields
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = () => {
    setLoading(true);
    // 1. **Registration Logic goes here** (API call, user creation)
    console.log("Signing up with:", email, password);

    // 2. **On success, redirect to the signin page or directly to tabs**
    setTimeout(() => {
      setLoading(false);
      // For simplicity, navigate back to the sign in page after registration
      router.replace("/(auth)/signin");
    }, 1500);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Title style={[styles.title, { color: theme.colors.primary }]}>
        Create Your Account
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
        onPress={handleSignUp}
        loading={loading}
        disabled={!email || !password || loading}
        style={styles.button}
      >
        Create Account
      </Button>

      <Button
        mode="text"
        onPress={() => router.back()}
        style={styles.textButton}
      >
        Already have an account? Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  // Use the same styles as SignInScreen or adjust as needed
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
