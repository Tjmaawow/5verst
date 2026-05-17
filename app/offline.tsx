import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Pressable, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const Color = isDark ? "#272727" : "#e7e7e7";
  return (
    <ThemedView style={styles.safeZones}>
        <ThemedText type="subtitle">Инструменты финиша</ThemedText>
        <View style={styles.viewActions}>
          <Pressable style={[styles.btnAction, {backgroundColor: Color}]}><IconSymbol size={28} name="qrcode.viewfinder" color={isDark ? '#ffffff' : '#000000'} /><ThemedText type="subtitle">Сканер QR</ThemedText></Pressable>
          <Pressable style={[styles.btnAction, {backgroundColor: Color}]}><IconSymbol size={28} name="stopwatch" color={isDark ? '#ffffff' : '#000000'} /><ThemedText type="subtitle">Секундомер</ThemedText></Pressable>
          <Pressable style={[styles.btnAction, {backgroundColor: Color}]}><IconSymbol size={28} name="rectangle.stack.fill" color={isDark ? '#ffffff' : '#000000'} /><ThemedText type="subtitle">Карточки позиций</ThemedText></Pressable>
          <Pressable style={[styles.btnAction, {backgroundColor: Color}]}><IconSymbol size={28} name="square.and.arrow.up" color={isDark ? '#ffffff' : '#000000'} /><ThemedText type="subtitle">Передать результаты</ThemedText></Pressable>
        </View>
        <ThemedText type="subtitle">Архив принятых файлов</ThemedText>
        <View style={styles.viewActions}>
          <Pressable style={[styles.btnAction, {backgroundColor: Color}]}><IconSymbol size={28} name="doc.fill" color={isDark ? '#ffffff' : '#000000'} /><ThemedText type="subtitle">Шаблонный файл</ThemedText></Pressable>
        </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  safeZones: {
    padding: 20,
    flex: 1
  },
  viewActions: {
    flexDirection: "column",
    gap: 10
  },
  btnAction: {
    padding: 15,
    borderRadius: 15,
    flexDirection: "row"
  }
});
