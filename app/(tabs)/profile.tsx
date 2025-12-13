// app/(tabs)/profile.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, useTheme } from "react-native-paper";

export default function ProfileScreen() {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Title style={{ color: theme.colors.onBackground }}>User Profile</Title>
      <Text style={{ color: theme.colors.onBackground }}>
        Manage your account settings here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
