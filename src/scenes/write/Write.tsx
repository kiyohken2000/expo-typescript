import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Write() {
  const navigation = useNavigation()

  const goHistory = () => {
    navigation.navigate('History')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>goHistory()}
      >
        <Text>Go History</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
