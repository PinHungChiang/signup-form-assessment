import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

const signUpSchema = z
  .object({
    name: z.string().trim().min(2, 'Please enter at least 2 characters.'),
    email: z.string().trim().email('Please enter a valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: SignUpForm) => {
    // Only log the information needed for this exercise, not the passwords.
    console.log('Sign-up submitted:', { name: data.name, email: data.email });
    router.push({
      pathname: '/confirmation',
      params: { name: data.name, email: data.email },
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formCard}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>Fill in the form below to sign up.</Text>

            <Text style={styles.label}>Full name</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.name && styles.inputError]}
                  placeholder="Your full name"
                  placeholderTextColor="#9299A8"
                  autoCapitalize="words"
                  autoComplete="name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  accessibilityLabel="Full name"
                />
              )}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

            <Text style={styles.label}>Email</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder="you@example.com"
                  placeholderTextColor="#9299A8"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  autoComplete="email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  accessibilityLabel="Email"
                />
              )}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Text style={styles.label}>Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  placeholder="At least 8 characters"
                  placeholderTextColor="#9299A8"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  accessibilityLabel="Password"
                />
              )}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            <Text style={styles.label}>Confirm password</Text>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, errors.confirmPassword && styles.inputError]}
                  placeholder="Enter password again"
                  placeholderTextColor="#9299A8"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  accessibilityLabel="Confirm password"
                />
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}

            <Pressable
              style={[styles.button, isSubmitting && styles.buttonDisabled]}
              onPress={() => { void handleSubmit(onSubmit)(); }}
              disabled={isSubmitting}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  screen: { flex: 1, backgroundColor: '#F5F7FB' },
  content: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  formCard: {
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E5E9F0',
  },
  title: { fontSize: 27, fontWeight: '700', color: '#18233C', marginBottom: 6 },
  subtitle: { fontSize: 15, color: '#637084', marginBottom: 14 },
  label: { fontSize: 14, fontWeight: '600', color: '#263247', marginTop: 16, marginBottom: 7 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CDD5E1',
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#18233C',
  },
  inputError: { borderColor: '#C63E45' },
  error: { color: '#B42330', fontSize: 12, marginTop: 5 },
  button: {
    backgroundColor: '#285FC7',
    borderRadius: 9,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
