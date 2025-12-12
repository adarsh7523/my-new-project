// app/(auth)/_layout.tsx

import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

export default function AuthLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true, // Show a header for auth screens
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.primary,
        },
        headerShadowVisible: false, // Optional: remove shadow under the header
      }}
    >
      <Stack.Screen name="signin" options={{ title: "Sign In" }} />
      <Stack.Screen name="signup" options={{ title: "Create Account" }} />
    </Stack>
  );
}
