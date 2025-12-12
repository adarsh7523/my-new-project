import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import React from 'react';
import { useTheme } from "react-native-paper";

// You will create screens like dashboard.tsx and profile.tsx inside the (tabs) folder
// The (tabs) layout automatically applies to all screens within it.

export default function TabLayout() {
  // Access the theme (light or dark) set by your Redux/PaperProvider setup
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        // Hide the header on tab screens (optional, but cleaner for tabs)
        headerShown: false, 
        
        // --- Tab Bar Styling ---
        tabBarStyle: {
          backgroundColor: theme.colors.surface, // Use Paper's surface color for the bar background
          borderTopColor: theme.colors.outline, // Use a subtle color for the top border
        },
        
        // --- Icon/Label Styling ---
        tabBarActiveTintColor: theme.colors.primary, // Active tab color
        tabBarInactiveTintColor: theme.colors.onSurfaceDisabled, // Inactive tab color
      }}
    >
      {/* This Stack.Screen corresponds to the file 'app/(tabs)/index.tsx' 
        or 'app/(tabs)/dashboard.tsx' if you rename index.tsx 
      */}
      <Tabs.Screen
        name="index" // Map to the file 'index.tsx' inside the (tabs) folder
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      {/* This Stack.Screen corresponds to the file 'app/(tabs)/profile.tsx' 
        (You need to create this file)
      */}
      <Tabs.Screen
        name="profile" // Map to the file 'profile.tsx' inside the (tabs) folder
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      
      {/* Add more tabs here */}
      
    </Tabs>
  );
}
