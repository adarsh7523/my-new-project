
import AppProviders from "@/redux/providers";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }}>
        {/* The first route shown is index.tsx, which handles the initial routing */}
        <Stack.Screen name="index" />

        {/* (auth) is the group for all authentication screens (signin, signup) */}
        <Stack.Screen name="(auth)" />

        {/* (tabs) is the group for screens accessible after login */}
        <Stack.Screen name="(tabs)" />

        {/* Add more top-level screens/groups here */}
      </Stack>
    </AppProviders>
  );
}
