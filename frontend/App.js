import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import OnboardingEmployeeScreen from './src/screens/OnboardingEmployeeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SelectAccountTypeScreen from './src/screens/SelectAccountTypeScreen';
import EmployeeProfileScreen from './src/screens/EmployeeProfileScreen';

export default function App() {
  const [route, setRoute] = useState('splash');
  const statusText = useMemo(() => {
    return '';
  }, []);

  if (route === 'splash') {
    return (
      <>
        <SplashScreen onNext={() => setRoute('onboarding2')} onSkip={() => setRoute('signup')} />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'onboarding2') {
    return (
      <>
        <OnboardingScreen2 onNext={() => setRoute('onboarding3')} onSkip={() => setRoute('signup')} />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'onboarding3') {
    return (
      <>
        <OnboardingEmployeeScreen onNext={() => setRoute('signup')} onSkip={() => setRoute('signup')} />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'login') {
    return (
      <>
        <LoginScreen
          onBack={() => setRoute('splash')}
          onGoSignup={() => setRoute('signup')}
          onSubmit={() => setRoute('selectAccountType')}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'signup') {
    return (
      <>
        <SignupScreen
          onBack={() => setRoute('splash')}
          onGoLogin={() => setRoute('login')}
          onSubmit={() => setRoute('login')}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'selectAccountType') {
    return (
      <>
        <SelectAccountTypeScreen
          onBack={() => setRoute('login')}
          onContinue={(selectedRole) => {
            if (selectedRole === 'employee') {
              setRoute('employeeProfile');
              return;
            }
            setRoute('home');
          }}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'employeeProfile') {
    return (
      <>
        <EmployeeProfileScreen
          onCancel={() => setRoute('selectAccountType')}
          onSave={() => setRoute('home')}
        />
        <StatusBar style="dark" />
      </>
    );
  }

  if (route === 'home') {
    return (
      <View className="flex-1 items-center justify-center bg-white px-5">
        <Text className="text-base text-gray-900">Home (placeholder)</Text>
        <StatusBar style="dark" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white px-5">
      <Text className="font-inter text-gray-900">Home (placeholder)</Text>
      <StatusBar style="dark" />
    </View>
  );
}
