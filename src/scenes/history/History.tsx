import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import ScreenTemplate from '../../components/ScreenTemplate';

export type HistoryProps = StackScreenProps<RootStackParamList, 'History'>;

export default function History() {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>History</Text>
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
