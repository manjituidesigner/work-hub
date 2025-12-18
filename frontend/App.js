import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, useWindowDimensions, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import OnboardingEmployeeScreen from './src/screens/OnboardingEmployeeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SelectAccountTypeScreen from './src/screens/SelectAccountTypeScreen';
import EmployeeProfileScreen from './src/screens/EmployeeProfileScreen';
import { ThemeProvider, useTheme } from './src/theme';

function MobileSizeWrapper({ children }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const frameWidth = Math.min(windowWidth, 415);
  const frameHeight = Math.min(windowHeight, 915);

  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        colors={theme.gradient.main.colors}
        locations={theme.gradient.main.locations}
        start={theme.gradient.main.start}
        end={theme.gradient.main.end}
        style={{
          width: frameWidth,
          height: frameHeight,
          borderRadius: 24,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: 0.12,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          elevation: 8,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

export default function App() {
  const [route, setRoute] = useState('splash');
  const statusText = useMemo(() => {
    return '';
  }, []);

  const app = (() => {
    if (route === 'splash') {
      return (
        <MobileSizeWrapper>
          <SplashScreen onGoLogin={() => setRoute('login')} onGoSignup={() => setRoute('signup')} />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'onboarding2') {
      return (
        <MobileSizeWrapper>
          <OnboardingScreen2 onNext={() => setRoute('onboarding3')} onSkip={() => setRoute('signup')} />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'onboarding3') {
      return (
        <MobileSizeWrapper>
          <OnboardingEmployeeScreen onNext={() => setRoute('signup')} onSkip={() => setRoute('signup')} />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'login') {
      return (
        <MobileSizeWrapper>
          <LoginScreen
            onBack={() => setRoute('splash')}
            onGoSignup={() => setRoute('signup')}
            onSubmit={() => setRoute('selectAccountType')}
          />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'signup') {
      return (
        <MobileSizeWrapper>
          <SignupScreen
            onBack={() => setRoute('splash')}
            onGoLogin={() => setRoute('login')}
            onSubmit={() => setRoute('login')}
          />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'selectAccountType') {
      return (
        <MobileSizeWrapper>
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
        </MobileSizeWrapper>
      );
    }

    if (route === 'employeeProfile') {
      return (
        <MobileSizeWrapper>
          <EmployeeProfileScreen onCancel={() => setRoute('selectAccountType')} onSave={() => setRoute('home')} />
          <StatusBar style="dark" />
        </MobileSizeWrapper>
      );
    }

    if (route === 'home') {
      return (
        <MobileSizeWrapper>
          <View className="flex-1 items-center justify-center bg-white px-5">
            <Text className="text-base text-gray-900">Home (placeholder)</Text>
            <StatusBar style="dark" />
          </View>
        </MobileSizeWrapper>
      );
    }

    return (
      <MobileSizeWrapper>
        <View className="flex-1 items-center justify-center bg-white px-5">
          <Text className="font-inter text-gray-900">Home (placeholder)</Text>
          <StatusBar style="dark" />
        </View>
      </MobileSizeWrapper>
    );
  })();

  return <ThemeProvider initialMode="light">{app}</ThemeProvider>;
}
