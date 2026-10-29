import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConfirmationScreen() {
  const { name, email } = useLocalSearchParams<{ name?: string; email?: string }>();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.check}>✓</Text>
        <Text style={styles.title}>Sign-up successful!</Text>
        <Text style={styles.message}>
          {name ? 'Thanks, ' + name + '!' : 'Thanks for signing up!'}
        </Text>
        {email ? <Text style={styles.email}>{email}</Text> : null}
        <Text style={styles.note}>This is a form demo. No account was created.</Text>
        <Pressable
          style={styles.button}
          onPress={() => router.replace('/')}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Back to form</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 28,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E9F0',
    alignItems: 'center',
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center',
  },
  check: { fontSize: 44, color: '#26865D', marginBottom: 8 },
  title: { fontSize: 23, fontWeight: '700', color: '#18233C', textAlign: 'center' },
  message: { fontSize: 16, color: '#3D4A60', marginTop: 14, textAlign: 'center' },
  email: { fontSize: 14, color: '#637084', marginTop: 5, textAlign: 'center' },
  note: { fontSize: 13, color: '#758196', textAlign: 'center', marginTop: 22 },
  button: {
    backgroundColor: '#285FC7',
    borderRadius: 9,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: { fontSize: 15, fontWeight: '700', color: '#FFFFFF' },
});
