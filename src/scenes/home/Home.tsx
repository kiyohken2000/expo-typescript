import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()

  const onButtonPress = () => {
    navigation.navigate('Details')
  }

  const goModal = () => {
    navigation.navigate('ModalStack', {
      screen: 'Post',
      params: {from: 'Home'}
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onButtonPress()}
      >
        <Text>go detail!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goModal()}
      >
        <Text>go modal</Text>
      </TouchableOpacity>
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
