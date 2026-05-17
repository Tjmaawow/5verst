import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const buttonColors = {
    signIn: isDark ? '#cc6e00' : '#ff3300',
    signUp: isDark ? '#3d0085' : '#5b00c4',
    offline: isDark ? '#555555' : '#868686',
  };
  return (
    <View style={{flex: 1}}>
      <ParallaxScrollView
        headerBackgroundColor={{light:"#00ff40",dark:"#006d21"}}
        headerImage={
          <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
            <Image 
            source="https://5verst.ru/wp-content/uploads/2022/04/cropped-B_logo_white_650.png"
            style={{width: 400, height: 200}}
            contentFit="contain"
            />
          </View>
        }>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">5 вёрст</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
      <ThemedView style={styles.buttonsContainer}>
        <Pressable 
          style={[styles.btnSignIn, { backgroundColor: buttonColors.signIn}]}
          onPress={() => console.log("Button tapped")}
        >
          <ThemedText>Вход</ThemedText>
        </Pressable>
        <Pressable 
          style={[styles.btnSignUp, { backgroundColor: buttonColors.signUp}]}
          onPress={() => console.log("Button tapped")}
        >
          <ThemedText>Регистрация</ThemedText>
        </Pressable>
        <Pressable 
          style={[styles.btnOffline, { backgroundColor: buttonColors.offline}]}
          onPress={() => router.push("/offline")}
        >
          <ThemedText>Волонтер-оффлайн</ThemedText>
        </Pressable>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  buttonsContainer: {
    flexDirection: "column",
    gap: 20,
    padding: 15,
    paddingBottom: 100
  },
  btnSignIn: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  },
  btnSignUp: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  },
  btnOffline: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  }
});
