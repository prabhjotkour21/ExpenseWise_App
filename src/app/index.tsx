import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';
export default function App() {
    return (
      <SafeAreaView>
            <View>
                <Redirect href={"/login"}/>
            </View>
            </SafeAreaView>
  );
}