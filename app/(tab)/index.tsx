// app/(tabs)/index.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, useTheme } from "react-native-paper";

export default function DashboardScreen() {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Title style={{ color: theme.colors.onBackground }}>Dashboard Home</Title>
      <Text style={{ color: theme.colors.onBackground }}>
        You are logged in!
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
