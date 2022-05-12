import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import ScreenTemplate from '../../components/ScreenTemplate';

export type PrintProps = StackScreenProps<RootStackParamList, 'Print'>;

export default function Print() {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>Print</Text>
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
