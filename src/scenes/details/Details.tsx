import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import ScreenTemplate from '../../components/ScreenTemplate';

export type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

export default function Details() {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
