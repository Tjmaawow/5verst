import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="offline" options={{ 
        headerShown: true, 
        title: "Волонтер(офлайн)", 
        headerBackButtonDisplayMode: 'minimal', 
        headerStyle: {backgroundColor: Colors[colorScheme ?? "light"].background},
        headerTintColor: Colors[colorScheme ?? "light"].text
      }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}